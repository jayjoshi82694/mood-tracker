import MoodButton from "./MoodButton";



const moods = [
  {
    emoji: "😄",
    label: "Happy",
    image:
    "https://i.makeagif.com/media/8-28-2021/G7fl-2.gif",
   contanct : "--Babita JI Ne Dance ke Liye Haan Boldi--",
  
  },
  { emoji: "😐", label: "angry",image:"https://www.gif-vif.com/desi_gifs/are-you-mad-jethalal-taarak-mehta-ka-ooltah-chashmah-98bf812e2d.gif" ,contanct : "--Yeh Pagal Aurat--"} ,
  { emoji: "😢", label: "Sad" ,image:"https://pbs.twimg.com/media/FdV55viaIAEBSnz.jpg" ,contanct : "--Bapuli Ji ka Ky Kru--"},
  { emoji: "🤩", label: "Excited",image:"https://media.tenor.com/dZZJ7m3a3lwAAAAM/jetha-jethalal-champaklal-gada.gif"  ,contanct : "--Finnaly Sunder gya --" },
  { emoji: "🤩", label: "frustrated",image:"https://media.tenor.com/_g00hBmyZsMAAAAM/annoyed-irritated.gif ",contanct : "--Chup rehna Bhai - Bhandh karna tera bakwas band kr ab --"},
  { emoji: "🤩", label: "crying",image:"https://media.tenor.com/wW1pBiZGZZoAAAAM/jethalal-in-rain-sad-jethalal-in-rain.gif", contanct : "--Meri Di hui Chochlate Fack di babita ji apne--"},
  { emoji: "😯", label: "Shock",image:"https://origin-staticv2.sonyliv.com/landscape_thumb/tmkoc_landscape_thumbnail_ep882.jpg", contanct : "--Karam Karne jata hun kand ho jata hai --" },
  { emoji: "😯", label: "Romentic",image:"https://media.tenor.com/J2wM7jP7A7IAAAAM/sed-jethaji.gif", contanct : "--Haaeiii Babita ji ka Hath  --" ,audio: "src/assets/Varoon-Lyrical-Song-_-Mirzapur.mp3" },
  { emoji: "😯", label: "Don",image:"https://i.makeagif.com/media/10-22-2024/h2uN-t.gif", contanct : "--Goli Beta Masti Nai --" },
  { emoji: "😯", label: "Surprise",image:"https://www.gif-vif.com/desi_gifs/sleepy-jethalal-taarak-mehta-ka-ooltah-chashmah-aa4297952e.gif" ,contanct : "--Fafda Jalebi --"} ,
  { emoji: "😯", label: "Fear",image:"https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2019/07/pjimage-1-1562172515.jpg",contanct : "--Bhootni --" },
  { emoji: "😯", label: "Dance",image:"https://media.tenor.com/oZp1QzbgX4AAAAAM/dance.gif" ,contanct : "--ayeee Hallooooooo--" },
  { emoji: "😯", label: "Confused",image:"https://media.licdn.com/dms/image/v2/C4D22AQEyXDYckLBeNw/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1663304034578?e=2147483647&v=beta&t=Q7pR_m_ytM0eASSMc4ooclstekBU7m77wkB8GjIe3Qo",contanct : "--Sunder Itne le gya toh kitne bache --" },
  { emoji: "😢", label: "Holi " ,image:"https://i.pinimg.com/originals/d6/60/26/d66026295d4abc84fbed451f38a1140f.gif" ,contanct : "--Inko dekho jitna nacha rhe--"},
  { emoji: "😢", label: "Fiting" ,image:"https://media.tenor.com/r6xwrsc8l_oAAAAM/bday-fight.gif" ,contanct : "--Babita Ji ke Liye Me acha Gift laya hun --"},




];

function MoodList({ setCurrentMood }) {
  return (
    <div className="my-14 mb-6   flex flex-nowrap gap-4 px-4 py-4 overflow-x-auto justify-start bg-black scrollbar-hide">
      {moods.map((mood) => (
        <MoodButton
          key={mood.label}
          label={mood.label}
          onSelect={() => setCurrentMood(mood)}
        />
      ))}
    </div>
  );
}

export default MoodList;