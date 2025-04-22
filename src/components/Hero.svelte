<script lang="ts">
  import { _ } from "svelte-i18n";
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import * as THREE from "three";

  let canvasContainer: HTMLDivElement;

  onMount(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(canvasContainer.clientWidth, canvasContainer.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    canvasContainer.appendChild(renderer.domElement);

    // Create data network structure
    const geometry = new THREE.BufferGeometry();
    const nodeCount = 150; // More nodes for richer visualization
    const layerCount = 5; // Create distinct layers
    const nodesPerLayer = nodeCount / layerCount;

    const positions = new Float32Array(nodeCount * 3);
    const colors = new Float32Array(nodeCount * 3);
    const color = new THREE.Color();

    // Create layered structure
    for (let layer = 0; layer < layerCount; layer++) {
      for (let i = 0; i < nodesPerLayer; i++) {
        const index = (layer * nodesPerLayer + i) * 3;

        // Position nodes in layers with some randomness
        positions[index] =
          (layer - layerCount / 2) * 4 + (Math.random() - 0.5) * 2 + 5; // X - layered with offset
        positions[index + 1] = (Math.random() - 0.5) * 10; // Y - scattered
        positions[index + 2] = (Math.random() - 0.5) * 10; // Z - scattered

        // Color gradient from blue to cyan
        color.setHSL(0.6 + layer * 0.1, 0.8, 0.6);
        colors[index] = color.r;
        colors[index + 1] = color.g;
        colors[index + 2] = color.b;
      }
    }

    // Create connections between nodes
    const indices = [];
    const maxDistance = 4;

    for (let i = 0; i < nodeCount; i++) {
      // Connect to next layer
      if (i < nodeCount - nodesPerLayer) {
        for (let j = i + nodesPerLayer - 2; j < i + nodesPerLayer + 3; j++) {
          if (j >= 0 && j < nodeCount) {
            const x1 = positions[i * 3];
            const y1 = positions[i * 3 + 1];
            const z1 = positions[i * 3 + 2];

            const x2 = positions[j * 3];
            const y2 = positions[j * 3 + 1];
            const z2 = positions[j * 3 + 2];

            const distance = Math.sqrt(
              (x2 - x1) ** 2 + (y2 - y1) ** 2 + (z2 - z1) ** 2
            );

            if (distance < maxDistance) {
              indices.push(i, j);
            }
          }
        }
      }

      // Connect within layer
      for (let j = i + 1; j < i + nodesPerLayer / 2; j++) {
        if (
          j < nodeCount &&
          Math.abs(positions[i * 3] - positions[j * 3]) < 2
        ) {
          const distance = Math.sqrt(
            (positions[i * 3] - positions[j * 3]) ** 2 +
              (positions[i * 3 + 1] - positions[j * 3 + 1]) ** 2 +
              (positions[i * 3 + 2] - positions[j * 3 + 2]) ** 2
          );

          if (distance < maxDistance / 2) {
            indices.push(i, j);
          }
        }
      }
    }

    geometry.setIndex(indices);
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const material = new THREE.LineBasicMaterial({
      vertexColors: true,
      opacity: 0.6,
      transparent: true,
    });

    const mesh = new THREE.LineSegments(geometry, material);
    scene.add(mesh);

    // Add floating particles
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(200 * 3);
    const particleColors = new Float32Array(200 * 3);

    for (let i = 0; i < 200; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 20;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 20;

      color.setHSL(0.6 + Math.random() * 0.2, 0.8, 0.6);
      particleColors[i * 3] = color.r;
      particleColors[i * 3 + 1] = color.g;
      particleColors[i * 3 + 2] = color.b;
    }

    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3)
    );
    particleGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(particleColors, 3)
    );

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.1,
      vertexColors: true,
      opacity: 0.6,
      transparent: true,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    camera.position.z = 15;

    const handleResize = () => {
      camera.aspect =
        canvasContainer.clientWidth / canvasContainer.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(
        canvasContainer.clientWidth,
        canvasContainer.clientHeight
      );
    };

    window.addEventListener("resize", handleResize);

    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate main network
      mesh.rotation.y += 0.001;

      // Animate particles
      const positions = particles.geometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] += Math.sin(Date.now() * 0.001 + i) * 0.01;
      }
      particles.geometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    const handleMouseMove = (event: MouseEvent) => {
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

      camera.position.x += (mouseX - camera.position.x + 5) * 0.05;
      camera.position.y += (mouseY - camera.position.y) * 0.05;
      camera.lookAt(scene.position);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      canvasContainer.removeChild(renderer.domElement);
    };
  });
</script>

<section id="hero" class="relative min-h-screen flex items-center">
  <div class="absolute inset-0 z-0" bind:this={canvasContainer}></div>

  <div class="section-container relative z-10">
    <div class="max-w-3xl" in:fade={{ duration: 1000, delay: 500 }}>
      <h1
        class="text-5xl md:text-7xl font-display font-bold mb-4 tracking-wider"
      >
        SHO MIYAGI
      </h1>
      <p
        class="text-xl md:text-2xl text-primary-600 dark:text-primary-400 tracking-[0.2em] uppercase"
      >
        {$_("hero.subtitle")}
      </p>

      <div class="mt-16 prose prose-lg dark:prose-invert">
        <p>{$_("hero.intro")}</p>
      </div>
    </div>
  </div>
</section>
