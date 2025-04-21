<script lang="ts">
    import { _ } from 'svelte-i18n';
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';
    import * as THREE from 'three';
    
    let canvasContainer: HTMLDivElement;
    
    onMount(() => {
      // Three.js setup code remains the same
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      
      renderer.setSize(canvasContainer.clientWidth, canvasContainer.clientHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
      canvasContainer.appendChild(renderer.domElement);
      
      // Create neural network-like structure
      const geometry = new THREE.BufferGeometry();
      const count = 100;
      
      const positions = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 10;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
      }
      
      const indices = [];
      for (let i = 0; i < count; i++) {
        for (let j = i + 1; j < count; j++) {
          const x1 = positions[i * 3];
          const y1 = positions[i * 3 + 1];
          const z1 = positions[i * 3 + 2];
          
          const x2 = positions[j * 3];
          const y2 = positions[j * 3 + 1];
          const z2 = positions[j * 3 + 2];
          
          const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2 + (z2 - z1) ** 2);
          
          if (distance < 4) {
            indices.push(i, j);
          }
        }
      }
      
      geometry.setIndex(indices);
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      
      const material = new THREE.LineBasicMaterial({ 
        color: 0x4f46e5,
        opacity: 0.5,
        transparent: true
      });
      
      const mesh = new THREE.LineSegments(geometry, material);
      scene.add(mesh);
      
      camera.position.z = 15;
      
      const handleResize = () => {
        camera.aspect = canvasContainer.clientWidth / canvasContainer.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(canvasContainer.clientWidth, canvasContainer.clientHeight);
      };
      
      window.addEventListener('resize', handleResize);
      
      const animate = () => {
        requestAnimationFrame(animate);
        mesh.rotation.x += 0.001;
        mesh.rotation.y += 0.002;
        renderer.render(scene, camera);
      };
      
      animate();
      
      const handleMouseMove = (event: MouseEvent) => {
        const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
        
        camera.position.x += (mouseX - camera.position.x) * 0.05;
        camera.position.y += (mouseY - camera.position.y) * 0.05;
        camera.lookAt(scene.position);
      };
      
      window.addEventListener('mousemove', handleMouseMove);
      
      return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('mousemove', handleMouseMove);
        canvasContainer.removeChild(renderer.domElement);
      };
    });
  </script>
  
  <section id="hero" class="relative min-h-screen flex items-center">
    <div class="absolute inset-0 z-0" bind:this={canvasContainer}></div>
    
    <div class="section-container relative z-10">
      <div class="max-w-3xl" in:fade={{ duration: 1000, delay: 500 }}>
        <h1 class="text-5xl md:text-7xl font-display font-bold mb-4 tracking-wider">
          SHO MIYAGI
        </h1>
        <p class="text-xl md:text-2xl text-primary-600 dark:text-primary-400 tracking-[0.2em] uppercase">
          AI & Data | Web | Cloud
        </p>
        
        <div class="mt-16 prose prose-lg dark:prose-invert">
          <p>{$_('hero.intro')}</p>
        </div>
      </div>
    </div>
  </section>