import React from 'react';
import Faker from 'faker';
import Post from '../components/Post';
import ContainerView from '../components/ContainerView';

const UserHomepage = () => {
  return (
    <ContainerView search={true} user={{ name: Faker.name.findName(), img: Faker.image.avatar() }}>
      <div className="container">
        <Post club="blah" timestamp="06/16/2020">
          I'm baby ramps kickstarter pour-over quinoa pop-up cardigan. Meditation whatever tbh, la croix chicharrones hot chicken distillery vegan skateboard etsy. 3 wolf moon single-origin coffee swag, sartorial pickled fashion axe selfies small batch. La croix kinfolk craft beer truffaut vegan seitan meditation schlitz copper mug pabst lo-fi banh mi. Dummy text? More like dummy thicc text, amirite?
        </Post>
        <Post club="blah" timestamp="06/16/2020">
          I'm baby ramps kickstarter pour-over quinoa pop-up cardigan. Meditation whatever tbh, la croix chicharrones hot chicken distillery vegan skateboard etsy. 3 wolf moon single-origin coffee swag, sartorial pickled fashion axe selfies small batch. La croix kinfolk craft beer truffaut vegan seitan meditation schlitz copper mug pabst lo-fi banh mi. Dummy text? More like dummy thicc text, amirite?
        </Post>
        <Post club="blah" timestamp="06/16/2020">
          I'm baby ramps kickstarter pour-over quinoa pop-up cardigan. Meditation whatever tbh, la croix chicharrones hot chicken distillery vegan skateboard etsy. 3 wolf moon single-origin coffee swag, sartorial pickled fashion axe selfies small batch. La croix kinfolk craft beer truffaut vegan seitan meditation schlitz copper mug pabst lo-fi banh mi. Dummy text? More like dummy thicc text, amirite?
        </Post>
        <Post club="blah" timestamp="06/16/2020">
          I'm baby ramps kickstarter pour-over quinoa pop-up cardigan. Meditation whatever tbh, la croix chicharrones hot chicken distillery vegan skateboard etsy. 3 wolf moon single-origin coffee swag, sartorial pickled fashion axe selfies small batch. La croix kinfolk craft beer truffaut vegan seitan meditation schlitz copper mug pabst lo-fi banh mi. Dummy text? More like dummy thicc text, amirite?
        </Post>
        <Post club="blah" timestamp="06/16/2020">
          I'm baby ramps kickstarter pour-over quinoa pop-up cardigan. Meditation whatever tbh, la croix chicharrones hot chicken distillery vegan skateboard etsy. 3 wolf moon single-origin coffee swag, sartorial pickled fashion axe selfies small batch. La croix kinfolk craft beer truffaut vegan seitan meditation schlitz copper mug pabst lo-fi banh mi. Dummy text? More like dummy thicc text, amirite?
        </Post>
        <Post club="blah" timestamp="06/16/2020">
          I'm baby ramps kickstarter pour-over quinoa pop-up cardigan. Meditation whatever tbh, la croix chicharrones hot chicken distillery vegan skateboard etsy. 3 wolf moon single-origin coffee swag, sartorial pickled fashion axe selfies small batch. La croix kinfolk craft beer truffaut vegan seitan meditation schlitz copper mug pabst lo-fi banh mi. Dummy text? More like dummy thicc text, amirite?
        </Post>
      </div>
    </ContainerView>
  );
};

export default UserHomepage;
