import {CGFinterface, dat} from '../lib/CGF.js';

/**
* MyInterface
* @constructor
*/
export class MyInterface extends CGFinterface {
    constructor() {
        super();
    }

    init(application) {
        // call CGFinterface init
        super.init(application);
        
        // init GUI. For more information on the methods, check:
        // https://github.com/dataarts/dat.gui/blob/master/API.md
        this.gui = new dat.GUI();

        //Checkbox element in GUI
        this.gui.add(this.scene, 'displayAxis').name('Display Axis');

        this.gui.add(this.scene, 'displayNormals').name('Display Normals');

        this.gui.add(this.scene, 'displaySphere').name('Display Sphere');

        this.gui.add(this.scene, 'displayPanorama').name('Display Panorama');  
        
        //Slider element in GUI
        this.gui.add(this.scene, 'scaleFactor', 0.5, 3).name('Scale Factor');

        this.gui.add(this.scene, 'speedFactor', 0.1, 3).name('Speed Factor');

        this.gui.add(this.scene, 'nSlices', 2, 50,1).name('Slices').onChange(this.scene.updateObjectComplexity.bind(this.scene));
        
        this.gui.add(this.scene, 'nStacks', 1, 50,1).name('Stacks').onChange(this.scene.updateObjectComplexity.bind(this.scene));

        this.initKeys();
        return true;
    }

    initKeys() {
        this.scene.gui=this;
        this.processKeyboard=function() {};
        this.activeKeys={};
    }

    processKeyDown(event) {
        this.activeKeys[event.code]=true;
    }

    processKeyUp(event) {
        this.activeKeys[event.code]=false;
    }

    isKeyPressed(keyCode) {
        return this.activeKeys[keyCode] || false;
    }
}