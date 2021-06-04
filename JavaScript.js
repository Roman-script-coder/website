		const numberOfAttempts = document.querySelector('.numberOfAttempts');
		const buttonOfSign = document.querySelectorAll('.buttonOfSign');
		check(true);
		function enterNumber() {
			const pattern = /\D+/g;
			const numberOfTry = document.querySelector('.numberOfTry');
			if(numberOfTry.value.match(pattern)) {
				console.log(numberOfTry.value.match(pattern));
				alert('Введите число');
					numberOfTry.value = '';
			} else {
				if(parseInt(numberOfTry.value)%2 != 0) {
					numberOfAttempts.innerText = numberOfTry.value;
					numberOfTry.value = '';
					numberOfTry.disabled=true;
					check(false);
				} else {
					alert('Количество попыток должно быть не четным');
					numberOfTry.value = '';
				}
			}
		}
		const arrSign = [
		'Камень',
		'Ножницы',
		'Бумага',
		];
		const answer = document.querySelector('.answer');
		const enter = document.querySelector('.enter');
		const result = document.querySelector('.result');
		let playerWinScore = 0;
		let playerLoseScore = 0;
		function enterSign(e) {
			const valuePlayerYour = document.createElement('div');
			const valuePlayerOpponent = document.createElement('div');
			const randomSign = getRandomInt(0, 3);
			const div = document.createElement('div');
			result.innerText = '';
			const number = parseInt(numberOfAttempts.innerText)-1;
			const stone = e.target.value == 'Камень';
			const scissors = e.target.value == 'Ножницы';
			const paper = e.target.value == 'Бумага';
			const vinStone = stone && arrSign[randomSign] == arrSign[1];
			const vinScissors  = scissors && arrSign[randomSign] == arrSign[2];
			const vinPaper = paper && arrSign[randomSign] == arrSign[0];
				if(vinStone || vinScissors || vinPaper) {
					div.innerText = 'Вы выиграли';
					result.append(div);
					playerWinScore++;
					numberOfAttempts.innerText = number;
					valuePlayerYour.classList.add('playerWin');
					valuePlayerOpponent.classList.add('playerWin');
					valuePlayerYour.innerText = e.target.value;
					valuePlayerOpponent.innerText = arrSign[randomSign];
					answer.append(valuePlayerYour);
					answer.append(valuePlayerOpponent);
				} else if(e.target.value == arrSign[randomSign]) {
					div.innerText = 'Ничья';
					result.append(div);
					valuePlayerYour.classList.add('playerDraw');
					valuePlayerOpponent.classList.add('playerDraw');
					valuePlayerYour.innerText = e.target.value;
					valuePlayerOpponent.innerText = arrSign[randomSign];
					answer.append(valuePlayerYour);
					answer.append(valuePlayerOpponent);
				} else {
					div.innerText = 'Вы проиграли';
					result.append(div);
					playerLoseScore++;
					numberOfAttempts.innerText = number;
					valuePlayerYour.classList.add('playerLose');
					valuePlayerOpponent.classList.add('playerLose');
					valuePlayerYour.innerText = e.target.value;
					valuePlayerOpponent.innerText = arrSign[randomSign];
					answer.append(valuePlayerYour);
					answer.append(valuePlayerOpponent);
				}
			if(numberOfAttempts.innerText == 0) {
				buttonOfSign.disabled=true;
				check(true);
				const totalScore = 'Общий счет: ' + '\n' + playerWinScore + ' : ' + playerLoseScore + '\n';
				if(playerWinScore > playerLoseScore) {
					result.innerText = totalScore + 'В вашу пользу';
				} else if(playerWinScore < playerLoseScore) {
					result.innerText = totalScore + 'В пользу противника';
				}
			}
		}
		function getRandomInt(min, max) {
  			return Math.floor(Math.random() * (max - min)) + min;
		}
		function check(value) {
			for(let i=0; i<buttonOfSign.length; i++) {
				buttonOfSign[i].disabled=value;
			}
		}
