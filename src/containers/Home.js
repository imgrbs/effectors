import React from 'react'
import { withSiteData } from 'react-static'

const recommends = [
  {
    name: 'ตะลึ่งตึ่งโป๊ะ',
    file: 'drumfill.m4a'
  },
  {
    name: 'ฉาบๆๆๆ',
    file: 'cymbalhit.m4a'
  },
  {
    name: 'แป้ววว',
    file: 'stringbreak.m4a'
  },
  {
    name: 'ป๋อยยย',
    file: 'cartoon6.m4a'
  },
  {
    name: 'ปะกะแป่ว',
    file: 'cartoon1.m4a'
  },
  {
    name: 'ERROR!',
    file: 'erro.mp3'
  },
  {
    name: 'ตึ่งเง้',
    file: 'cartoon2.m4a'
  },
  {
    name: 'เป้งๆ',
    file: 'cartoon3.m4a'
  },
  {
    name: 'ปะงี้ด',
    file: 'cartoon4.m4a'
  },
  {
    name: 'ปะกะบั้บ',
    file: 'cartoon5.m4a'
  },
  {
    name: 'เปี้ยววว',
    file: 'cartoon7.m4a'
  },
];

const goods = [
  {
    name: 'Clap Clap Clap',
    file: 'aplausos_2.mp3'
  },
  {
    name: 'zed ขำ',
    file: 'zed.mp3'
  },
];

const bads = [
  {
    name: 'BOOM!',
    file: 'boom.mp3'
  },
  {
    name: 'ผ่ามพาม',
    file: 'chanchan.swf.mp3'
  },
  {
    name: 'Nani',
    file: 'nani_mkANQUf.mp3'
  },
  {
    name: 'Omaewa',
    file: 'omae-wa-mou-shindeiru.mp3'
  },
];

const hits = [
  {
    name: 'ต่อย หนัก',
    file: 'hit1.m4a'
  },
  {
    name: 'ต่อย เบา',
    file: 'hit2.m4a'
  },
  {
    name: 'ต่อย เบา กว่า',
    file: 'hit3.m4a'
  },
  {
    name: 'ต่อย ปลิว',
    file: 'hit4.m4a'
  },
];

const longs = [
  {
    name: 'Inception',
    file: 'inception.mp3'
  },
  {
    name: 'Sax Guy',
    file: 'eeee.mp3'
  },
  {
    name: 'Alone!',
    file: 'forever-alone_1.mp3'
  },
  {
    name: 'Illuminati!',
    file: 'x-files-theme-song-copy.mp3'
  },
  {
    name: 'Victory Final Fantasy!',
    file: 'victoryff.swf.mp3'
  },
];

const PATH = 'effects';

function createAudio(sound){
  return ({...sound, audio: new Audio(`${PATH}/${sound.file}`)})
}

function mapAudios(sounds) {
  return sounds.map(createAudio)
}

const handleSound = (audio) => {
  audio.load()
  audio.play()
}

const Button = ({ name, audio }) => (
  <button className='btn btn-lg border border-primary m-2' onClick={() => handleSound(audio)}>{name}</button>
)

const SoundList = ({ title, sounds }) => (
  <div className="card col-12 col-lg-5 my-3 mx-2 p-3">
    <div className="card-body">
      <h3 className='card-title'>{title}</h3>
      {
        console.log(sounds)
      }
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
          <SoundList title='ใช้บ่อย' sounds={mapAudios(recommends)} />
          <SoundList title='เย้' sounds={mapAudios(goods)} />
          <SoundList title='ตู้ม' sounds={mapAudios(bads)} />
          <SoundList title='ต่อย' sounds={mapAudios(hits)} />
          <SoundList title='เสียงนาน' sounds={mapAudios(longs)} />
        </div>
      </div>
    )
  }
}

export default withSiteData(Home)
