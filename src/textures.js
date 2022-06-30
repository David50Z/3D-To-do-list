import dirtImg from './images/Dirt texture.jpg';
import grassImg from './images/Grass texture.jpg';
import woodImg from './images/Wood texture.jpg';
import stoneImg from './images/Stone texture.jpg'
import { TextureLoader, NearestFilter, LinearMipMapLinearFilter  } from 'three';



export const dirt = new TextureLoader().load(dirtImg);
export const grass = new TextureLoader().load(grassImg);
export const stone = new TextureLoader().load(stoneImg);
export const wood = new TextureLoader().load(woodImg);

