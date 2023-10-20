import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const Galaxy = () => {
  const canvasRef = useRef(null);
  const mouseX = useRef(0);
  const mouseY = useRef(0);

  useEffect(() => {
    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    canvasRef.current.appendChild(renderer.domElement);

    // Galaxy
    const galaxyGeometry = new THREE.BufferGeometry();
    const galaxyMaterial = new THREE.PointsMaterial({
      size: 0.1,
      color: 0xffffff,
    });

    const galaxyVertices = [];
    const galaxyVertexCount = 2500;

    for (let i = 0; i < galaxyVertexCount; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = (Math.random() - 0.5) * 2000;
      galaxyVertices.push(x, y, z);
    }

    galaxyGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(galaxyVertices, 3)
    );
    const galaxy = new THREE.Points(galaxyGeometry, galaxyMaterial);
    scene.add(galaxy);

    // Add OrbitControls to control the camera
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // Add damping effect for smoother controls
    controls.minDistance = 1; // Set the minimum distance for zoom
    controls.maxDistance = 40; // Set the maximum distance for zoom

    // Handle mouse movement
    const handleMouseMove = (event) => {
      mouseX.current = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY.current = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    // Handle mouse click
    const handleMouseClick = () => {
      console.log("Galaxy clicked!");
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleMouseClick);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the galaxy based on mouse movement
      galaxy.rotation.x += mouseY.current * 0.008;
      galaxy.rotation.y += mouseX.current * 0.008;

      // Rotate the galaxy automatically
      galaxy.rotation.y += 0.001;

      controls.update(); // Update the controls for damping effect

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleMouseClick);
      controls.dispose(); // Clean up the controls
    };
  }, []);

  return (
    <div
      ref={canvasRef}
      style={{ position: "fixed", top: 0, left: 0, zIndex: -2 }}
    ></div>
  );
};

export default Galaxy;
