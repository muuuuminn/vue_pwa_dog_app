import db from '../../db';
import router from '../../router';

export default (url, comment, author) => {
  let d = new Date();
  let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

  db.collection('dogs').add(
    {
      url,
      comment,
      info: `Postrd by ${author != '' ? author : 'unknow'} on ${days[d.getDay()]}`,
      created_at: new Date().getTime()
    }
  ).then(
    router.push({ name: 'home' })
  )
}
