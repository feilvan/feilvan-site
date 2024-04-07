interface Post {
  id: number
  title: string
  description: string
  icons: string[]
  protected: boolean
  url?: string
  internal?: boolean
  img?: string
}

const posts: Post[] = [
  {
    id: 1,
    title: 'Firefox userchrome.css',
    description: 'Personal firefox theme. Support dark mode and light mode. Only tested on Windows.',
    icons: ['i-heroicons-code-bracket', 'i-heroicons-swatch'],
    protected: false,
    url: 'https://github.com/feilvan/firefox-css/',
    internal: false,
    img: '/img/firefox-userchrome.png',
  },
  {
    id: 2,
    title: 'Digital Art',
    description: 'Made with Photoshop. Some recent arts includes generative AI as stock images.',
    icons: ['i-heroicons-paint-brush'],
    protected: false,
    url: 'https://www.instagram.com/feilvan/',
    internal: false,
    img: '/img/201115.jpg',
  },
  {
    id: 3,
    title: 'Andy Okay',
    description: 'Art prints in collaboration with Andy Okay.',
    icons: ['i-heroicons-paint-brush', 'i-heroicons-user'],
    protected: false,
    url: 'https://andyokay.com/products/another-realm',
    internal: false,
    img: '/img/Untitled-2.jpg',
  },
  {
    id: 4,
    title: 'Tsukino',
    description: 'Design for mask & bag merch items.',
    icons: ['i-heroicons-swatch', 'i-heroicons-user'],
    protected: false,
    url: 'https://x.com/tsuki_nxo/status/1584130173120970753',
    internal: false,
    img: '/img/image 6.png',
  },
  {
    id: 5,
    title: 'D1 Milano',
    description: 'Art for launching campaign of D1 Milano new watch collection.',
    icons: ['i-heroicons-paint-brush', 'i-heroicons-user'],
    protected: false,
    url: 'https://www.instagram.com/p/Cbe_BOJhoh4/',
    internal: false,
    img: '/img/220324.jpg',
  },
  {
    id: 6,
    title: 'Lorenzo Coats',
    description: 'Art for their songs cover art.',
    icons: ['i-heroicons-paint-brush', 'i-heroicons-user'],
    protected: false,
    img: '/img/Frame 9.png',
  }
]

export default posts