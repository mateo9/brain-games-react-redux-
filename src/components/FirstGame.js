import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import FirstGameBlocks  from './FirstGameBlocks';
import FirstGameIntroduction from './FirstGameIntroduction';
import MissionDone from './MissionDone';
import { randomNumber, removeClickedNum } from '../actions/randomNumberAction'
import { setTimer, updateTimer, updateWaitForStartTimer } from '../actions/timerAction';


class FirstGame extends PureComponent {

	componentWillMount() {
        var randArry = [];
        var timer = 90;

        this.props.setTimer(timer);
       
        for(let i = 0; i < 25; i++) {
        	let temp = Math.floor(Math.random() * (90 - 1 + 1)) + 1;

        	if(randArry.indexOf(temp) === -1) {
        		randArry.push(temp);
        	} else --i;
        }
        

        this.props.randomNumber(randArry);
        
	}

      handleClick(current) {

        let sortRandArry = this.props.randArr.slice()
        sortRandArry.sort(function(a,b) {
            return a - b
        });

       if( current === sortRandArry[0] && this.props.timer.firstGameTimer !== 0
          && this.props.timer.waitForStartTimer === 0 ){
       this.props.removeClickedNum(current);
       }
   
      }

      componentDidMount() {

        const waitForNewGame = setInterval(() => {
            this.props.updateWaitForStartTimer(this.props.timer.waitForStartTimer - 1);
                 if(this.props.timer.waitForStartTimer === 0){
                     clearInterval(waitForNewGame);
                 }
        }, 1000);


        setTimeout(() => {
            const interval = setInterval(() => {
                this.props.updateTimer(this.props.timer.firstGameTimer - 1);
                    if(this.props.timer.firstGameTimer === 0 || this.props.randArr.length === 0){
                    clearInterval(interval);
                    }
             }, 1000)
        }, 3000);
      }


	render() {
     
    const firstGameTimer = this.props.timer.firstGameTimer;
    const waitForStartTimer = this.props.timer.waitForStartTimer;
    const firstGameBlocks = this.props.randArr.map((current,index) => {
                            return <FirstGameBlocks
                            handleClick= {this.handleClick.bind(this,current)}
                            data={current} key={index} index={index}/>
                            })
		return (
		<div className="first-game-container">
        <div className="timer">{firstGameTimer}</div>
        {firstGameBlocks}
        {
            firstGameBlocks.length !== 0 ?
            (
                <FirstGameIntroduction sec={waitForStartTimer}/>
            ) :
            (
                <div>
                <MissionDone />
                <button className="next-game">Next Game</button>
                </div>
            )
        }
        
        </div>
			);
	}
}

const mapStateToProps = (state) => {
	return {
		randArr: state.firstGame.randArry,
        timer: state.timer
	}
}



export default connect(mapStateToProps, 
                      { randomNumber,
                        removeClickedNum,
                        setTimer,
                        updateTimer,
                        updateWaitForStartTimer
                      })(FirstGame);