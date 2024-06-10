import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-vedic',
  templateUrl: './vedic.component.html',
  styleUrls: ['./vedic.component.scss']
})
export class VedicComponent implements OnInit {

        basicNumber: number = 0;
        destinyNumber: number = 0;
        squares : any[] = []; //acquiring memories to store data it
        num: number[] = [1,2,3,4,5,6];
        vedicData: number[] = [3,1,9,6,7,5,2,8,4];//predefined data
        outputData: number[] = []; 
        dobArray:number[]= [];
        newElement: number[] =[];
        id: number = 0;
        inputControl = new FormControl(); //taking value from user.
        displaySquares: (string | null)[] = [];
        sumDestinyNumber :number = 0;
        currentlyEnabled: boolean = false;
          // Function triggered would be the first this for this component.

        ngOnInit(): void {
              this.newData();
              
          }
        //preparing for creating new table
        newData() {
            this.squares = Array(9).fill(null);
          } 

        logClick(): void {
          // this.mappingValues();
          this.convertDOB();
          this.getDestinyNumber();
          this.getBasicNumber();
          this.mapValues();//! Entering dobarray values
          this.enterBasicno();//! Entering basic no.
          this.enterDestinyno();//! Entering destiny no.
          this.addingValues();
          this.currentlyEnabled = true;
          console.log(this.newElement+" new element array");
          console.log(this.displaySquares+" display squares array");
          console.log(this.sumDestinyNumber+" DN");
          console.log(this.basicNumber+" BN");
          console.log(this.squares);
          
        }
        
        reloadPage(): void {
          window.location.reload();
        }

        //? extracting  numeric part
        extractNumericPart(input: string): string {
            const match = input.match(/\d+/);//\d for numbers, match() is a function.
            return match ? match[0] : '';
          }

        // ? converting string into number array
        convertDOB(): void {
            //1. Extract the numeric part of the string
            const numericPart = this.extractNumericPart(this.inputControl.value);
            // if numeric part is present
            if (numericPart) {
              // 2. Convert each character of the numeric part to an integer
              this.dobArray = numericPart.split('').map((char: string) => parseInt(char, 10));
            } //If numeric part is not present 
            else {
              this.dobArray = [];
            }
          }

        //dn=31 ; 31
        
//? Responsibility area
//!--------------------------------------------------------------
        mapValues():void {
          this.dobArray.forEach((dobValue,index) => {
            const vedicIndex = this.vedicData.indexOf(dobValue);
            if(this.squares[vedicIndex] === dobValue && (index!==4 && index!==5)) {
              this.newElement.push(dobValue);
              // this.id = vedicIndex;
            }
            if(vedicIndex != -1 && (index!==4 && index!==5)) {
              this.squares[vedicIndex] = this.vedicData[vedicIndex];
            }
          

            
          })
        } 
//!---------------------------------------------------------------
        
        enterBasicno() : void {
          
          
            //! ENTERING BASIC NO. IN SQUARES ARRAY.
            //? Entering Destiny number if it is a first value.
            
            //? Entering basic number if it is a second value.
            this.squares.forEach((sqValue, index) => {
            if(sqValue === this.basicNumber && (this.dobArray[0]!==0 && this.dobArray[1]!==0)) {
              this.newElement.push(this.basicNumber);
            }
          })
            const vedInd = this.vedicData.indexOf(this.basicNumber);
            if(this.squares[vedInd] === null) {
              this.squares[vedInd] = this.basicNumber;
            } 
            
        }

        enterDestinyno() : void {
          
            this.squares.forEach((sqValue, index) => {
            if(sqValue === this.destinyNumber) {
              this.newElement.push(sqValue)

            }
          });
            //! ENTER DESTINY NUMBER IN SQUARES ARRAY.
            const vedInd = this.vedicData.indexOf(this.sumDestinyNumber);
            if(this.squares[vedInd] === null) {
              this.squares[vedInd] = this.sumDestinyNumber;
            } 
            
        }


        
        // Basic number done

        addingValues() {
           // Initialize displaySquares as a copy of squares, converted to strings for display purposes
          this.displaySquares = this.squares.map(value => value !== null ? value.toString() : null);

          // Replace values in displaySquares based on additionalValues
          this.newElement.forEach((value, index) => {
            if (this.squares.includes(value)) {
              const ind = this.squares.indexOf(value);
              this.displaySquares[ind] += `${value}`;
      }
    });
        }

        getBasicNumber() {
          this.basicNumber = this.dobArray[0] + this.dobArray[1];
        }

        getDestinyNumber(): void {
          // 1. Adding the sum of all elements present in dobArray
          this.destinyNumber = this.dobArray.reduce((sum, current) => sum + current, 0);
          while(this.destinyNumber > 9) {
          // 2. converting sum of all elements into a string.
          let numberStr:string = this.destinyNumber.toString();
          // 3. splitting string into unique string array.
          let digits: string[] = numberStr.split('');
          // 4. 
          this.sumDestinyNumber = digits.reduce((acc: number, digit: string) => acc + parseInt(digit, 10), 0);
          this.destinyNumber = this.sumDestinyNumber;
        }
        if(!this.sumDestinyNumber)
          {
            this.sumDestinyNumber = this.destinyNumber;
          }
        } 
}


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
//? P1. extra basic no. added test case #1 = 20032023