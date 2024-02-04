import { getTags } from '@/actions/tag';
import Tabbar from './Tabbar';

export const TabsAndSort = async () => {
  const tags = await getTags({ pageSize: 3 });

  // FIX: tab active not working?
  return (
    <article
      id='tabs_and_sort'
      className='container mx-auto flex flex-col justify-center gap-spacing-4xl self-stretch'
    >
      <div id='herdizontal_tabs' className='flex flex-col justify-center'>
        <Tabbar tags={tags.data} />
      </div>
    </article>
  );
};
