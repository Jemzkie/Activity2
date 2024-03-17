import CatPic from './assets/Cat.jpg' 
import DogPic from './assets/Dog Melon.jpg' 
import PepePic from './assets/Pepe sad.jpg' 
import GigaPic from './assets/Giga Chad.png' 
import ShrekPic from './assets/Shrek.jpg' 

function List() {
    const students = [
      {
        id: 1,
        name: "Catto",
        email: "catto@gmail.com",
        profile: CatPic,
      },
      {
        id: 2,
        name: "Dog Melon",
        email: "dogmelon@gmail.com",
        profile: DogPic,
      },
      {
        id: 3,
        name: "Pepega Sadge",
        email: "sadgefrog@gmail.com",
        profile: PepePic,
      },
      {
        id: 4,
        name: "Giga Chad",
        email: "chadgiga@gmail.com",
        profile: GigaPic,
      },
      {
        id: 5,
        name: "Shrek",
        email: "shrekswamp@gmail.com",
        profile: ShrekPic,
      },
    ];
    
      return students;
}

export default List;

  