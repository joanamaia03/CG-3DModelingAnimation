import {CGFobject} from '../lib/CGF.js';
/**
 * MyTriangle
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyTriangle extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	
	initBuffers() {
		this.vertices = [
			-1, 1, 0,	//0
			-1, -1, 0,	//1
			1, -1, 0,	//2
			-1, 1, 0,	//0a
			-1, -1, 0,	//1a
			1, -1, 0,	//2a
		];

		this.normals = [
			0,0,1,		//0
			0,0,1,		//1
			0,0,1,		//2
			0,0,-1,		//0a
			0,0,-1,		//1a
			0,0,-1,		//2a
		]

		//Counter-clockwise reference of vertices
		this.indices = [
			1,2,0
		];

		this.texCoords = [
			0, 0.5,
			0.5, 1, 
			0, 1,
		]

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}
