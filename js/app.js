var scene = new THREE.Scene();
            var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
            var renderer = new THREE.WebGLRenderer();
            renderer.setSize( window.innerWidth, window.innerHeight);
            document.body.appendChild( renderer.domElement );
            var group = new THREE.Group();
            scene.add( group );
            var loader = new THREE.TextureLoader();
            var geometry   = new THREE.SphereGeometry(2, 52, 52);
            var texture    = THREE.ImageUtils.loadTexture('imgs/earth.jpg');
            var bumpTexture    = THREE.ImageUtils.loadTexture('imgs/earthbump1k.jpg');
            var secTexture    = THREE.ImageUtils.loadTexture('imgs/earthspec1k.jpg');            
            var specColor = new THREE.Color('red');
            var material = new THREE.MeshPhongMaterial( { 
                                map: texture, 
                                bumpMap: bumpTexture,   
                                bumpScale  :  0.30, 
                                specularMap: secTexture, 
                                overdraw: 0.5 
                            });
            var mesh = new THREE.Mesh( geometry, material );
            group.add( mesh );
            var canvasCloud = THREE.ImageUtils.loadTexture( "imgs/earthcloudmap.jpg" );
            var geometry1   = new THREE.SphereGeometry(2, 52, 52)
            var material1  = new THREE.MeshPhongMaterial({
                          map     : canvasCloud,
                          side        : THREE.DoubleSide,
                          opacity     : 0.3,
                          transparent : true,
                          depthWrite  : false,
            });
            var cloudMesh = new THREE.Mesh(geometry1, material1)
            mesh.add(cloudMesh)
            var geometrym  = new THREE.SphereGeometry(20, 20, 20);
            var materialm  = new THREE.MeshBasicMaterial()
            materialm.map   = THREE.ImageUtils.loadTexture('imgs/galaxy_starfield.png')
            materialm.side  = THREE.BackSide
            var meshm  = new THREE.Mesh(geometrym, materialm)
            scene.add( meshm );
            var light = new THREE.DirectionalLight( 0xffffff );
            light.position.set( 0.1, 0.5, 5).normalize();
            scene.add(light);
            camera.position.z = 5;
            function render() {
                requestAnimationFrame( render );
                 group.rotation.y += 0.01;
                renderer.render( scene, camera );
            }
            render();