import SocialIcon from '@/components/social-icons';
import { siteConfig } from '@/constant/config';
import UnstyledLink from './links/UnstyledLink';

export default function Footer() {
  return (
    <footer>
      <div className='mt-16 flex flex-col items-center'>
        <div className='mb-3 flex space-x-4'>
          <SocialIcon
            kind='mail'
            href={`mailto:${siteConfig.email}`}
            size={6}
          />
          <SocialIcon kind='github' href={siteConfig.github} size={6} />
          <SocialIcon kind='facebook' href={siteConfig.facebook} size={6} />
          <SocialIcon kind='youtube' href={siteConfig.youtube} size={6} />
          <SocialIcon kind='linkedin' href={siteConfig.linkedin} size={6} />
          <SocialIcon kind='twitter' href={siteConfig.twitter} size={6} />
          <SocialIcon kind='instagram' href={siteConfig.instagram} size={6} />
          <SocialIcon kind='threads' href={siteConfig.threads} size={6} />
        </div>
        <div className='mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400'>
          <div>{siteConfig.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <UnstyledLink href='/'>{siteConfig.title}</UnstyledLink>
        </div>
        <div className='mb-8 text-sm text-gray-500 dark:text-gray-400'>
          <UnstyledLink href='https://github.com/timlrx/tailwind-nextjs-starter-blog'>
            Tailwind Nextjs Theme
          </UnstyledLink>
        </div>
      </div>
    </footer>
  );
}
