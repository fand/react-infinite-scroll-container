import { configure } from '@kadira/storybook';

function loadStories() {
  require('../stories/InfiniteScrollContainer');
}

configure(loadStories, module);
