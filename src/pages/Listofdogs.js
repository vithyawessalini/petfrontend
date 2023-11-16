import React from 'react';

const dogsData = [
  {
    name: 'Crusa',
    age: '2 years',
    description:'Cuddles was originally brought to CARE by her pet parents for a skin treatment. However, she ended up as a permanent resident her as parents were unreachable after leaving her here.Today, she stays in the OPD area and rules the hearts of our vets who seek her out and find solace in her ‘cuddles’ after a stressful day.',
    image: 'https://i0.wp.com/charlies-care.com/wp-content/uploads/2020/05/21-Cuddles.png?w=690&ssl=1',
  },
  {
    name: 'Spooky',
    age: '3 years',
    description:'Spooky came to us as a 2 month old pup after an accident left him with his bone sticking out and hind leg hanging.He recovered from the surgery but contracted canine distemper. Being the fighter he is, he overcame that also!Even as they complain of his naughtiness, the staff and volunteers of CARE end up pampering him. He’s the darling of the shelter and an absolute joy to be around!',
    image: 'https://i0.wp.com/charlies-care.com/wp-content/uploads/2020/05/44-Mowgli.jpg?resize=1536%2C1029&ssl=1',
  },
  {
    name: 'Nicky',
    age: '2 years',
    description:'Nicky is named after the Nice road where he had an accident. He was taken to another shelter but the lack of space there brought him to CARE.He’s among the most vocal dogs in the permanent residents’ enclosure, usually found discussing issues of the day in conversational howls.',
    image: 'https://i0.wp.com/charlies-care.com/wp-content/uploads/2020/05/73-Yellow.png?resize=300%2C201&ssl=1',
  },
  {
    name: 'Rosy',
    age: '4 years',
    description:'When we first saw Rosy aka Jumping Jack, we burst out laughing! He was a beautiful brindle-colored package who kept prancing with his hind legs lifted in the air. But we also realized that this was a serious neurological condition that needed immediate attention. Sadly he was tied to our gates so we have no idea where he came from.Today he’s the master of the treatment area, carefully supervising every action the vets take.',
    image: 'https://i0.wp.com/charlies-care.com/wp-content/uploads/2021/03/Video-scaled.jpeg?resize=1495%2C2048&ssl=1',
  },
  {
    name: 'Sita',
    age: '8 months',
    description:'Sita came to CARE as an adoption pup but developed a very bad case of the dreaded Canine Distemper.While he couldn’t go back, he’s a regular serum donor for other CD-afflicted pups that need help. Baahubali indeed!Baahu takes credit for starting most of the dog fights but he is a darling with humans. He greets every visitor to the permanent residents area by standing up on his hind legs and leaning on them with his front paws.',
    image: 'https://www.princeton.edu/sites/default/files/styles/1x_full_2x_half_crop/public/images/2022/02/KOA_Nassau_2697x1517.jpg?itok=Bg2K7j7J',
  },
  {
    name: 'Tiger',
    age: '1 years',
    description:'CARE wants to disprove the hypothesis – “no one would want to adopt a three-legged dog.” We have great faith in our followers and well-wishers – we know people can look beyond a dog’s outward appearance.Tiger (brindle) is a perfectly normal, healthy dog. Now, while humans might consider a missing leg a handicap, dogs don’t. This boy can do anything a four-legged dog can do – he is playful, energetic and even protects his little pack!He may have three legs but he has the same heart of gold like any other dog out there and maybe even more of it.',
    image: 'https://i0.wp.com/charlies-care.com/wp-content/uploads/2020/05/68-Tiger.jpg?w=960&ssl=1',
  },

];

function Listofdogs() {
  return (
    <div style={{padding:'50px',paddingLeft:'200px'}}>
    <div className="dog-grid">
      {dogsData.map((dog, index) => (
        <div key={index} className="dog-card">
          <div className="text">
            <h2>{dog.name}&emsp;({dog.age})</h2>
            <p style={{paddingLeft:'20px',lineHeight: '1.5',fontSize:'19px'}}> &emsp;{dog.description}</p>
            <button className="adoptbutton">
          <a href='https://care.danamojo.org/dm/passive-adoption-7620'>Click here to Passively adopt</a>
        </button>
          </div>
          <div className="image">
            <img src={dog.image} alt={dog.name} />
          </div>
        </div>
      ))}
    </div></div>
  );
}

export default Listofdogs;
