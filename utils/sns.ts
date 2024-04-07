interface Social {
  id: number
  icon: string
  to: string
}

const sns: Social[] = [
  {
    id: 1,
    icon: 'i-fa6-brands-github',
    to: 'https://github.com/feilvan'
  },
  {
    id: 2,
    icon: 'i-fa6-brands-instagram',
    to: 'https://www.instagram.com/feilvan/'
  },
  {
    id: 3,
    icon: 'i-fa6-brands-threads',
    to: 'https://www.threads.net/@feilvan'
  },
  {
    id: 4,
    icon: 'i-fa6-brands-youtube',
    to: 'https://www.youtube.com/feilvan'
  },
]

export default sns