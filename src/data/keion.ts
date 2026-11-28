// 首页的轻音少女内容：顶部相册与随机播放的曲目。
//
// 音频自托管（做法同 elainafan.one）：把自己的音频放到
//   public/music/<slug>.m4a   （.mp3 也可以）
//   public/music/<slug>.jpg   （可选封面，没有就用头像）
// 构建时只收录文件真实存在的曲目；一首都没有时，卡片只展示曲名、不显示播放器。
// 注意：公开仓库里放版权音乐有被 DMCA 下架的风险，请自行判断。

export interface Track {
  slug: string;
  title: string;
  artist: string;
  /** 可选：音频出处（如 Bilibili 视频页），会显示成“来源 ↗” */
  source?: string;
}

export const TRACKS: Track[] = [
  { slug: 'cagayake-girls', title: 'Cagayake!GIRLS', artist: '桜高軽音部' },
  { slug: 'dont-say-lazy', title: 'Don\'t say "lazy"', artist: '桜高軽音部' },
  { slug: 'fuwafuwa-time', title: 'ふわふわ時間', artist: '放課後ティータイム' },
  { slug: 'go-go-maniac', title: 'GO! GO! MANIAC', artist: '放課後ティータイム' },
  { slug: 'listen', title: 'Listen!!', artist: '放課後ティータイム' },
  { slug: 'no-thank-you', title: 'NO, Thank You!', artist: '放課後ティータイム' },
  { slug: 'u-and-i', title: 'U&I', artist: '放課後ティータイム' },
  { slug: 'tenshi-ni-fureta-yo', title: '天使にふれたよ!', artist: '放課後ティータイム' },
];

export const GALLERY = [
  { src: '/images/gallery-clubroom.webp', caption: '放課後ティータイム，集合！' },
  { src: '/images/gallery-floor.webp', caption: '社团教室的地板上，躺成一圈' },
] as const;
