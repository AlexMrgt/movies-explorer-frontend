function SocialLinks() {

  const socialLinks = [
    {
      text: 'Github',
      link: 'https://github.com/AlexMrgt',
    },
    {
      text: 'Telegram',
      link: 'https://t.me/AlexMRGT',
    }
  ];

  return (
    <ul
      className='socials-link-list'
    >
      {socialLinks.map(link =>
        <li
          key={link.text}
          className='socials-link-list__link-item'
        >
          <a
            className='socials-link-list__link'
            href={link.link}
            target='_blank'
            rel='noreferrer'
          >
            {link.text}
          </a>
        </li>)}
    </ul>
  )
}

export default SocialLinks;
