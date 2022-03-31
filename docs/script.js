class RatingComponent extends HTMLElement {
    constructor(){
        super();
        const shadow = this.attachShadow({mode: 'open'});

        const starImageURL = 'https://raw.githubusercontent.com/lautaroDeLuca/StarRatingComponentJs/89d471e0bd0a83aa2ad7f37ee1451403193b4903/images/icon-star.svg';

        const wrapper = document.createElement('DIV');
        wrapper.setAttribute('class', 'container');

        const star = document.createElement('DIV');
        star.setAttribute('class', 'starContainer');

        const starImg = document.createElement('img');
        starImg.src = starImageURL;
        starImg.setAttribute('class', 'starImage');

        star.appendChild(starImg);

        const text = document.createElement('h2');
        text.innerText = 'How did we do?';
        text.setAttribute('class', 'boldText');
        
        const subtext = document.createElement('p');
        subtext.innerText = `Please let us know how we did with your support request. 
        All feedback is appreciated to help us improve our offering!`
        subtext.setAttribute('class', 'regularText');

        const numberlist = document.createElement('ul');
        numberlist.setAttribute('class', 'numbersContainer');

        const documentFragment = document.createDocumentFragment();

        for(let i=1; i<6; i++){
            let number = document.createElement('li');
            number.setAttribute('class', 'number')
            number.innerText = i;
            documentFragment.appendChild(number);
        }

        numberlist.appendChild(documentFragment);

        const submitButton = document.createElement('button');
        submitButton.setAttribute('id', 'submitButton');
        submitButton.innerText = 'SUBMIT';

        const style = document.createElement('style');

        style.innerText = `*{
            --orange-primary: hsl(25, 97%, 53%);
            --white: hsl(0, 0%, 100%);
            --light-grey: hsl(217, 12%, 63%);
            --medium-grey: hsl(216, 12%, 54%);
            --dark-blue: hsl(213, 19%, 18%);
            --dark-blue-gradient: hsl(213, 19%, 1%);
            --very-dark-blue: hsl(216, 12%, 8%);
            font-family: 'Overpass', sans-serif;
            list-style-type: none;
        }
        
        body{
            background-color: var(--very-dark-blue);
        }
        
        .starImage{
            border-radius: 50%;
            width: .75em;
            height: .75em;
            padding: .75em;
            background-color: var(--dark-blue);
        }
        
        p{
            display: block;
            font-size: small;
            line-height: 2.5ch;
            margin-bottom: 1em;
        }
        
        #submitButton{
            display: block;
            cursor: pointer;
            text-align: center;
            font-size: small;
            border-style: none;
            padding: 1em;
            width: 100%;
            color: white;
            background-color: var(--orange-primary);
            border-radius: 2em;
            line-height: 1.5em;
            letter-spacing: 0.25ch;
            margin-bottom: .5em;
        }
        
        #submitButton:hover{
            background-color: var(--white);
            color: var(--orange-primary);
        }
        
        .number:focus{
            background-color: var(--light-grey);
            color: white;
        }
        
        .number:hover{
            background-color: var(--orange-primary);
            color: var(--white);
        }
        
        
        .number{
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--dark-blue);
            color: var(--light-grey);
            width: 2em;
            height: 2em;
            padding: .35em;
            border-radius: 50%;
            text-align: center;
            line-height: 2em;
            cursor: pointer;
        }
        
        .numbersContainer{
            padding: 0;
            display: flex;
            justify-content: space-between;
        }
        
        .regularText{
            font-weight: 400;
            color: var(--light-grey);
            padding-top: 0;
        }
        
        h2{
            font-weight: 700;
            padding: .25em 0;
            color: var(--white);
            margin: .3em 0;
        }
        
        .container{
            background-color: white;
            position: absolute;
            padding: 1.5em;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            border-radius: 15px;
            background: radial-gradient(circle at top, var(--dark-blue)0%, var(--dark-blue) 10%, var(--very-dark-blue));
            max-width: 295px;
        }
        
        .starContainer{
            display: flex;
            align-items: center;
            justify-content: left;
        }
        
        .notification{
            text-align: center;
            color: red;
        }
        
        .selection{
            text-align: center;
            color: orange;
            border-radius: 1em;
            margin: 1.25em 0;
            display: flex;
            justify-content: center;
        }
        
        div span{
            background-color: var(--dark-blue);
            padding: .4em;
            line-height: 1em;
            border-radius: 1em;
        }
        
        @media (max-width: 500px) {
            .container {
                min-width: 280px
            }
        }`

        wrapper.appendChild(star);
        wrapper.appendChild(text);
        wrapper.appendChild(subtext);
        wrapper.appendChild(numberlist);
        wrapper.appendChild(submitButton);

        shadow.appendChild(wrapper);
        shadow.appendChild(style);
        
    }

    connectedCallback(){
        this.buttonAction();
        this.numberAction();
    }

    buttonAction = () => {
        const button = this.shadowRoot.getElementById("submitButton");
        const nextPage = document.createElement("thank-you-component");
        button.addEventListener("click", () => {
            if(data !== 0){
            this.shadowRoot.appendChild(nextPage);
            }
            else{
                if(this.shadowRoot.lastElementChild.tagName !== "P"){
                    const alert = document.createElement("p");
                    alert.innerText = "You didnt choose a rating, please select a rating then press submit";
                    alert.setAttribute("class", "notification");
                    this.shadowRoot.appendChild(alert);
                }
            }
        });
    }

    numberAction = () => {
        const number = this.shadowRoot.querySelectorAll(".number");
        for(let i=0; i<number.length; i++){
            number[i].addEventListener("click", () => {
                data = number[i].innerHTML;
            });
        }
    }

}

class ThankYouRating extends HTMLElement {
    constructor(){
        super();
        const shadow = this.attachShadow({mode: 'open'});

        const thankYouImageURL = 'https://raw.githubusercontent.com/lautaroDeLuca/StarRatingComponentJs/89d471e0bd0a83aa2ad7f37ee1451403193b4903/images/illustration-thank-you.svg';

        const wrapper = document.createElement('DIV');
        wrapper.setAttribute('class', 'container');

        const thankYou = document.createElement('DIV');
        thankYou.setAttribute('style', 'display: flex; justify-content: center');

        const thankYouImage = document.createElement('img');
        thankYouImage.src = thankYouImageURL;

        thankYou.appendChild(thankYouImage);

        const selection = document.createElement('DIV');
        selection.setAttribute('class', 'selection');

        const choice = document.createElement('span');
        choice.setAttribute('id', 'choice');

        selection.appendChild(choice);

        const text = document.createElement('h2');
        text.setAttribute('style', 'text-align: center');
        text.innerText = 'Thank you!';

        const subtext = document.createElement('p');
        subtext.setAttribute('class', 'regularText');
        subtext.innerText = `We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!`

        const style = document.createElement('style');

        style.innerText = `*{
            --orange-primary: hsl(25, 97%, 53%);
            --white: hsl(0, 0%, 100%);
            --light-grey: hsl(217, 12%, 63%);
            --medium-grey: hsl(216, 12%, 54%);
            --dark-blue: hsl(213, 19%, 18%);
            --dark-blue-gradient: hsl(213, 19%, 1%);
            --very-dark-blue: hsl(216, 12%, 8%);
            font-family: 'Overpass', sans-serif;
            list-style-type: none;
        }
        
        body{
            background-color: var(--very-dark-blue);
        }
        
        .starImage{
            border-radius: 50%;
            width: .75em;
            height: .75em;
            padding: .75em;
            background-color: var(--dark-blue);
        }
        
        p{
            display: block;
            font-size: small;
            line-height: 2.5ch;
            margin-bottom: 1em;
        }
        
        #submitButton{
            display: block;
            cursor: pointer;
            text-align: center;
            font-size: small;
            border-style: none;
            padding: 1em;
            width: 100%;
            color: white;
            background-color: var(--orange-primary);
            border-radius: 2em;
            line-height: 1.5em;
            letter-spacing: 0.25ch;
            margin-bottom: .5em;
        }
        
        #submitButton:hover{
            background-color: var(--white);
            color: var(--orange-primary);
        }
        
        .number:focus{
            background-color: var(--light-grey);
            color: white;
        }
        
        .number:hover{
            background-color: var(--orange-primary);
            color: var(--white);
        }
        
        
        .number{
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--dark-blue);
            color: var(--light-grey);
            width: 2em;
            height: 2em;
            padding: .35em;
            border-radius: 50%;
            text-align: center;
            line-height: 2em;
            cursor: pointer;
        }
        
        .numbersContainer{
            padding: 0;
            display: flex;
            justify-content: space-between;
        }
        
        .regularText{
            font-weight: 400;
            color: var(--light-grey);
            padding-top: 0;
        }
        
        h2{
            font-weight: 700;
            padding: .25em 0;
            color: var(--white);
            margin: .3em 0;
        }
        
        .container{
            background-color: white;
            position: absolute;
            padding: 1.5em;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            border-radius: 15px;
            background: radial-gradient(circle at top, var(--dark-blue)0%, var(--dark-blue) 10%, var(--very-dark-blue));
            max-width: 295px;
        }
        
        .starContainer{
            display: flex;
            align-items: center;
            justify-content: left;
        }
        
        .notification{
            text-align: center;
            color: red;
        }
        
        .selection{
            text-align: center;
            color: orange;
            border-radius: 1em;
            margin: 1.25em 0;
            display: flex;
            justify-content: center;
        }
        
        div span{
            background-color: var(--dark-blue);
            padding: .4em;
            line-height: 1em;
            border-radius: 1em;
        }
        
        @media (max-width: 500px) {
            .container {
                min-width: 280px
            }
        }`

        wrapper.appendChild(thankYou);
        wrapper.appendChild(selection);
        wrapper.appendChild(text);
        wrapper.appendChild(subtext);

        shadow.appendChild(style);
        shadow.appendChild(wrapper);


    }

    connectedCallback(){
        this.shadowRoot.getElementById('choice').innerText = `You selected ${data} out of 5`;
    }

}

let data = 0;

window.customElements.define("rating-component", RatingComponent);
window.customElements.define("thank-you-component", ThankYouRating);

const displaySelection = () => {
    const selection = document.getElementById("choice");
    selection.innerText = `You selected ${data} out of 5`;
}