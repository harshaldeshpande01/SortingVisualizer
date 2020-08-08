import React from 'react';
import { getMergeSortAnimations } from '../sortingAlgorithms/sortingAlgorithms.js';
import { getInsertionSortAnimations } from '../sortingAlgorithms/sortingAlgorithms.js';
import { getbubbleSortAnimations } from '../sortingAlgorithms/sortingAlgorithms.js';
import { getCountingSortAnimations } from '../sortingAlgorithms/sortingAlgorithms.js';
import './SortingVisualizer.css';
import { Navbar, Nav, Button } from 'react-bootstrap';

const WIDTH = window.innerWidth;

const HEIGHT = window.innerHeight;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'turquoise';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';


export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.resetArray();
  }


  resetArray() {
    const array = [];
    const n = Math.round((WIDTH - 199) / 4);
    for (let i = 0; i < n; i++) {
      array.push(randomIntFromInterval(10, HEIGHT - 72));
    }
    this.setState({ array });
    // console.log(array);
  }

  mergeSort() {
    const n = Math.round((WIDTH - 199) / 4);
    let animationSpeed = 334 / n;
    document.getElementById('gb').setAttribute("disabled", "disabled");
    document.getElementById('mb').setAttribute("disabled", "disabled");
    document.getElementById('qb').setAttribute("disabled", "disabled");
    document.getElementById('hb').setAttribute("disabled", "disabled");
    document.getElementById('bb').setAttribute("disabled", "disabled");
    const animations = getMergeSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * animationSpeed);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * animationSpeed);
      }
      setTimeout(() => {
        document.getElementById('gb').removeAttribute("disabled");
        document.getElementById('mb').removeAttribute("disabled");
        document.getElementById('qb').removeAttribute("disabled");
        document.getElementById('hb').removeAttribute("disabled");
        document.getElementById('bb').removeAttribute("disabled");
      }, animations.length * animationSpeed)
    }
    // console.log(this.state.array);
  }

  countingSort() {
    const n = Math.round((WIDTH - 199) / 4);
    const animationSpeed = 334 / n;
    document.getElementById('gb').setAttribute("disabled", "disabled");
    document.getElementById('mb').setAttribute("disabled", "disabled");
    document.getElementById('qb').setAttribute("disabled", "disabled");
    document.getElementById('hb').setAttribute("disabled", "disabled");
    document.getElementById('bb').setAttribute("disabled", "disabled");
    const animations = getCountingSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = animations[i][1];
      if (isColorChange < 0) {
        const [barOneIdx, x] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const color = isColorChange === -1 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
        }, i * animationSpeed);
      }
      else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * animationSpeed);
      }
      setTimeout(() => {
        document.getElementById('gb').removeAttribute("disabled");
        document.getElementById('mb').removeAttribute("disabled");
        document.getElementById('qb').removeAttribute("disabled");
        document.getElementById('hb').removeAttribute("disabled");
        document.getElementById('bb').removeAttribute("disabled");
      }, animations.length * animationSpeed);
    }
  }

  insertionSort() {
    const n = Math.round((WIDTH - 199) / 4);
    const animationSpeed = 33.4 / n;
    document.getElementById('gb').setAttribute("disabled", "disabled");
    document.getElementById('mb').setAttribute("disabled", "disabled");
    document.getElementById('qb').setAttribute("disabled", "disabled");
    document.getElementById('hb').setAttribute("disabled", "disabled");
    document.getElementById('bb').setAttribute("disabled", "disabled");
    const animations = getInsertionSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = animations[i][1];
      if (isColorChange < 0) {
        const [barOneIdx, x] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const color = isColorChange === -1 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
        }, i * animationSpeed);
      }
      else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * animationSpeed);
      }
      setTimeout(() => {
        document.getElementById('gb').removeAttribute("disabled");
        document.getElementById('mb').removeAttribute("disabled");
        document.getElementById('qb').removeAttribute("disabled");
        document.getElementById('hb').removeAttribute("disabled");
        document.getElementById('bb').removeAttribute("disabled");
      }, animations.length * animationSpeed);
    }

  }

  BubbleSort() {
    const n = Math.round((WIDTH - 199) / 4);
    const animationSpeed = 33.4 / n;
    document.getElementById('gb').setAttribute("disabled", "disabled");
    document.getElementById('mb').setAttribute("disabled", "disabled");
    document.getElementById('qb').setAttribute("disabled", "disabled");
    document.getElementById('hb').setAttribute("disabled", "disabled");
    document.getElementById('bb').setAttribute("disabled", "disabled");
    const animations = getbubbleSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = animations[i][2];
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 2 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * animationSpeed);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * animationSpeed);
      }
      setTimeout(() => {
        document.getElementById('gb').removeAttribute("disabled");
        document.getElementById('mb').removeAttribute("disabled");
        document.getElementById('qb').removeAttribute("disabled");
        document.getElementById('hb').removeAttribute("disabled");
        document.getElementById('bb').removeAttribute("disabled");
      }, animations.length * animationSpeed)

    }

  }

  // NOTE: This method will only work if your sorting algorithms actually return
  // the sorted arrays; if they return the animations (as they currently do), then
  // this method will be broken.
  // testSortingAlgorithms() {
  //   for (let i = 0; i < 100; i++) {
  //     const array = [];
  //     const length = randomIntFromInterval(1, 1000);
  //     for (let i = 0; i < length; i++) {
  //       array.push(randomIntFromInterval(-1000, 1000));
  //     }
  //     const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
  //     const mySortedArray = getBubbleSortAnimations(array.slice());
  //     console.log(arraysAreEqual(javaScriptSortedArray, mySortedArray));
  //   }
  // }

  render() {
    const { array } = this.state;
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="#242424" variant="dark">
          <Navbar.Brand href="#home">Sorting-Visualizer</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Button id="gb" onClick={() => this.resetArray()} style={{ backgroundColor: '#242424' }} variant="dark">Generate New Array</Button>
              <Button id="mb" onClick={() => this.mergeSort()} style={{ backgroundColor: '#242424' }} variant="dark">Merge Sort</Button>
              <Button id="hb" onClick={() => this.countingSort()} style={{ backgroundColor: '#242424' }} variant="dark">Counting Sort</Button>
              <Button id="qb" onClick={() => this.insertionSort()} style={{ backgroundColor: '#242424' }} variant="dark">Insertion Sort</Button>
              <Button id="bb" onClick={() => this.BubbleSort()} style={{ backgroundColor: '#242424' }} variant="dark">Bubble Sort</Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <div className="array-container">
          {array.map((value, idx) => (
            //let margin = value > 0? 50 : 10;
            <div
              className="array-bar"
              key={idx}
              // onMouseOver={() => {console.log(value)}}
              style={{
                backgroundColor: PRIMARY_COLOR,
                height: `${value}px`,
                //marginBottom: `${margin}px`, 
              }}
              >
              </div>
          ))}
          {/* <button onClick={() => this.testSortingAlgorithms()}>
            Test Sorting Algorithms (BROKEN)
        </button> */}
        </div>
      </div>
    );
  }
}

// From https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// function arraysAreEqual(arrayOne, arrayTwo) {
//   if (arrayOne.length !== arrayTwo.length) return false;
//   for (let i = 0; i < arrayOne.length; i++) {
//     if (arrayOne[i] !== arrayTwo[i]) {
//       return false;
//     }
//   }
//   return true;
// }
