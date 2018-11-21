import React from 'react'
import { withSiteData } from 'react-static'

const recommends = [
  {
    name: 'ตะลึ่งตึ่งโป๊ะ',
    sound: 'drumfill.m4a'
  },
  {
    name: 'ฉาบๆๆๆ',
    sound: 'cymbalhit.m4a'
  },
  {
    name: 'แป้ววว',
    sound: 'stringbreak.m4a'
  },
  {
    name: 'ป๋อยยย',
    sound: 'cartoon6.m4a'
  },
  {
    name: 'ปะกะแป่ว',
    sound: 'cartoon1.m4a'
  },
  {
    name: 'ERROR!',
    sound: 'erro.mp3'
  },
  {
    name: 'ตึ่งเง้',
    sound: 'cartoon2.m4a'
  },
  {
    name: 'เป้งๆ',
    sound: 'cartoon3.m4a'
  },
  {
    name: 'ปะงี้ด',
    sound: 'cartoon4.m4a'
  },
  {
    name: 'ปะกะบั้บ',
    sound: 'cartoon5.m4a'
  },
  {
    name: 'เปี้ยววว',
    sound: 'cartoon7.m4a'
  },
];

const goods = [
  {
    name: 'Clap Clap Clap',
    sound: 'aplausos_2.mp3'
  },
  {
    name: 'zed ขำ',
    sound: 'zed.mp3'
  },
];

const bads = [
  {
    name: 'BOOM!',
    sound: 'boom.mp3'
  },
  {
    name: 'ผ่ามพาม',
    sound: 'chanchan.swf.mp3'
  },
  {
    name: 'Nani',
    sound: 'nani_mkANQUf.mp3'
  },
  {
    name: 'Omaewa',
    sound: 'omae-wa-mou-shindeiru.mp3'
  },
];

const hits = [
  {
    name: 'ต่อย หนัก',
    sound: 'hit1.m4a'
  },
  {
    name: 'ต่อย เบา',
    sound: 'hit2.m4a'
  },
  {
    name: 'ต่อย เบา กว่า',
    sound: 'hit3.m4a'
  },
  {
    name: 'ต่อย ปลิว',
    sound: 'hit4.m4a'
  },
];

const longs = [
  {
    name: 'Inception',
    sound: 'inception.mp3'
  },
  {
    name: 'Sax Guy',
    sound: 'eeee.mp3'
  },
  {
    name: 'Alone!',
    sound: 'forever-alone_1.mp3'
  },
  {
    name: 'Illuminati!',
    sound: 'x-files-theme-song-copy.mp3'
  },
  {
    name: 'Victory Final Fantasy!',
    sound: 'victoryff.swf.mp3'
  },
];

const PATH = 'effects';

const handleSound = (sound) => {
  const audio = new Audio(`${PATH}/${sound}`);
  audio.play();
}

const Button = ({ name, sound }) => (
  <button className='btn btn-lg border border-primary m-2' onClick={() => handleSound(sound)}>{name}</button>
)

const SoundList = ({ title, sounds }) => (
  <div className="card col-12 col-lg-5 my-3 mx-2 p-3">
    <div className="card-body">
      <h3 className='card-title'>{title}</h3>
      {
        sounds.map(sound => <Button key={sound.name} {...sound} />)
      }
    </div>
  </div>
)

class Home extends React.Component {

  render() {
    return (
      <div className='container'>
        <div className="row d-flex justify-content-center">
          <div className="col-12 text-center">
            <h1>Welcome to "SIT ตาม สาย" Effector</h1>
          </div>
          <SoundList title='ใช้บ่อย' sounds={recommends} />
          <SoundList title='เย้' sounds={goods} />
          <SoundList title='ตู้ม' sounds={bads} />
          <SoundList title='ต่อย' sounds={hits} />
          <SoundList title='เสียงนาน' sounds={longs} />
        </div>
      </div>
    )
  }
}

export default withSiteData(Home)
