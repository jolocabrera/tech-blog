const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    post_text: 'Veniam esse adipisicing aute tempor ut pariatur duis enim non aute excepteur consequat cupidatat.',
    user_id: 10
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_text: 'Laborum sunt veniam Lorem elit aute.',
    user_id: 8
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    post_text: 'Do velit fugiat consectetur elit do Lorem consectetur ex.',
    user_id: 1
  },
  {
    title: 'Nunc purus.',
    post_text: 'Cupidatat ex dolore dolore culpa ut qui dolor cupidatat dolore officia ut qui.',
    user_id: 4
  },
  {
    title: 'Pellentesque eget nunc.',
    post_text: 'Cupidatat eu elit elit veniam cillum consectetur laboris ipsum amet nulla quis elit pariatur.',
    user_id: 7
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    post_text: 'Nostrud magna non mollit adipisicing dolor.',
    user_id: 4
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_text: 'Tempor qui laborum tempor ullamco anim do quis proident aute aliqua adipisicing minim ullamco adipisicing.',
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_text: 'Tempor sunt Lorem consequat duis deserunt ut officia ea fugiat.',
    user_id: 1
  },
  {
    title: 'Duis ac nibh.',
    post_text: 'Proident et magna magna magna consectetur reprehenderit enim excepteur.',
    user_id: 9
  },
  {
    title: 'Curabitur at ipsum ac tellus semper interdum.',
    post_text: 'Ad labore qui ea nostrud enim ullamco laboris duis.',
    user_id: 5
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_text: 'Cillum adipisicing voluptate pariatur culpa ut nisi enim ipsum excepteur velit eu.',
    user_id: 3
  },
  {
    title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    post_text: 'Officia proident amet labore velit irure voluptate fugiat.',
    user_id: 10
  },
  {
    title: 'Donec dapibus.',
    post_text: 'Labore anim ullamco occaecat qui ad laborum consequat aliqua.',
    user_id: 8
  },
  {
    title: 'Nulla tellus.',
    post_text: 'Aute laboris deserunt ullamco sit ea culpa aute aute velit ad magna Lorem minim.',
    user_id: 3
  },
  {
    title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    post_text: 'Ea consectetur consectetur commodo ullamco ex.',
    user_id: 3
  },
  {
    title:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    post_text: 'Adipisicing fugiat aliqua veniam consequat laborum ipsum nisi sunt enim anim.',
    user_id: 7
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_text: 'Esse ipsum Lorem sit consectetur commodo et enim eu anim.',
    user_id: 6
  },
  {
    title: 'Etiam justo.',
    post_text: 'Labore qui laboris enim ut labore eiusmod elit magna eiusmod.',
    user_id: 4
  },
  {
    title: 'Nulla ut erat id mauris vulputate elementum.',
    post_text: 'Tempor adipisicing amet pariatur culpa labore commodo ullamco est velit ipsum ipsum ipsum occaecat reprehenderit.',
    user_id: 6
  },
  {
    title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    post_text: 'Ullamco dolor enim eiusmod in sunt deserunt amet.',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
