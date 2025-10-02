export interface Player {
  id: number;
  firstName: string;
  lastName: string;
  position: 'Base' | 'Escolta' | 'Alero' | 'Ala-Pívot' | 'Pívot' | string;
  age: number;
  height: number; // en metros
  avatar?: string; // ruta en /assets
  videoUrl?: string; // url youtube/vimeo o local
  mediaTitle?: string;
}
