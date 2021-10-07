import React from 'react';
import classes from './Placeholder.module.css';

const Placeholder: React.FunctionComponent = () => {
  React.useEffect(() => {
    const header: HTMLHeadElement = document.getElementById(
      'header'
    ) as HTMLHeadElement;
    const title: HTMLTitleElement = document.getElementById(
      'title'
    ) as HTMLTitleElement;
    const excerpt: HTMLParagraphElement = document.getElementById(
      'excerpt'
    ) as HTMLParagraphElement;
    const profile_img: HTMLDivElement = document.getElementById(
      'profile_img'
    ) as HTMLDivElement;
    const name: HTMLDivElement = document.getElementById(
      'name'
    ) as HTMLDivElement;
    const date: HTMLElement = document.getElementById('date') as HTMLElement;

    const animated_bgs: NodeListOf<HTMLElement> =
      document.querySelectorAll<HTMLElement>(`.${classes['animated-bg']}`);
    const animated_bg_texts: NodeListOf<HTMLElement> =
      document.querySelectorAll<HTMLElement>(`.${classes['animated-bg-text']}`);

    const getData = () => {
      header.innerHTML =
        '<img src="https://images.unsplash.com/photo-1633463449149-e1bd9616dae7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=736&q=80" alt="" />';
      title.innerHTML = 'Lorem ipsum dolor sit amet';
      excerpt.innerHTML =
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis';
      profile_img.innerHTML =
        '<img src="https://randomuser.me/api/portraits/men/49.jpg" alt="" />';
      name.innerHTML = 'John Doe';
      date.innerHTML = 'Oct 08, 2020';

      animated_bgs.forEach((bg) => bg.classList.remove(classes['animated-bg']));
      animated_bg_texts.forEach((bg) =>
        bg.classList.remove(classes['animated-bg-text'])
      );
    };
    setTimeout(getData, 2500);
  }, []);
  return (
    <div className={classes.card}>
      <div
        className={`${classes['card-header']} ${classes['animated-bg']}`}
        id="header"
      >
        &nbsp;
      </div>

      <div className={classes['card-content']}>
        <h3
          className={`${classes['card-title']} ${classes['animated-bg']} ${classes['animated-bg-text']}`}
          id="title"
        >
          &nbsp;
        </h3>
        <p className={classes['card-excerpt']} id="excerpt">
          &nbsp;
          <span
            className={`${classes['animated-bg']} ${classes['animated-bg-text']}`}
          >
            &nbsp;
          </span>
          <span
            className={`${classes['animated-bg']} ${classes['animated-bg-text']}`}
          >
            &nbsp;
          </span>
          <span
            className={`${classes['animated-bg']} ${classes['animated-bg-text']}`}
          >
            &nbsp;
          </span>
        </p>
        <div className={classes.author}>
          <div
            className={`${classes['profile-img']} ${classes['animated-bg']}`}
            id="profile_img"
          >
            &nbsp;
          </div>
          <div className={classes['author-info']}>
            <strong
              className={`${classes['animated-bg']} ${classes['animated-bg-text']}`}
              id="name"
            >
              &nbsp;
            </strong>
            <small
              className={`${classes['animated-bg']} ${classes['animated-bg-text']}`}
              id="date"
            >
              &nbsp;
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Placeholder;
