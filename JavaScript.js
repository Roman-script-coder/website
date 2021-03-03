<script type='text/javascript'>
		const numberOfAttempts = document.querySelector('.numberOfAttempts');
		const buttonOfSign = document.querySelectorAll('.buttonOfSign');
		check(true);
		function enterNumber() {
			const numberOfTry = document.querySelector('.numberOfTry');
			if(Number.parseInt(numberOfTry.value)%2 != 0) {
				numberOfAttempts.innerText = numberOfTry.value;
				numberOfTry.value = '';
				numberOfTry.disabled=true;
				check(false);
			} else {
				alert('Количество попыток должно быть не четным');
				numberOfTry.value = '';
			}
		}
		const arrSign = [
		'Камень',
		'Ножницы',
		'Бумага',
		];
		const answer = document.querySelector('.answer');
		const enter = document.querySelector('.enter');
		const playerOne = document.querySelector('.playerOne');
		const playerTwo = document.querySelector('.playerTwo');
		let playerOneScore = 0;
		let playerTwoScore = 0;
		function enterSign(e) {
			const number = parseInt(numberOfAttempts.innerText)-1;
			const randomSign = getRandomInt(0, 3);
			const div = document.createElement('div');
			answer.innerText = '';
			const stone = e.target.value == 'Камень';
			const scissors = e.target.value == 'Ножницы';
			const paper = e.target.value == 'Бумага';
			const vinStone = stone && arrSign[randomSign] == arrSign[1];
			const vinScissors  = scissors && arrSign[randomSign] == arrSign[2];
			const vinPaper = paper && arrSign[randomSign] == arrSign[0];
				if(vinStone || vinScissors || vinPaper) {
					div.innerText = 'Вы выиграли';
					answer.append(div);
					playerOneScore++;
				} else if(e.target.value == arrSign[randomSign]) {
					div.innerText = 'Ничья';
					answer.append(div);
				} else {
					div.innerText = 'Вы проиграли';
					answer.append(div);
					playerTwoScore++;
				}
				numberOfAttempts.innerText = number;
					const valuePlayerOne = document.createElement('div');
					const valuePlayerTwo = document.createElement('div');
					valuePlayerOne.innerText = 'Вы выбрали: ' + e.target.value;
					valuePlayerTwo.innerText = 'Противник выбрал: ' + arrSign[randomSign];
					playerOne.append(valuePlayerOne);
					playerTwo.append(valuePlayerTwo);
			if(numberOfAttempts.innerText == 0) {
				buttonOfSign.disabled=true;
				check(true);
				const totalScore = 'Общий счет: ' + playerOneScore + ' : ' + playerTwoScore;
				if(playerOneScore > playerTwoScore) {
					answer.innerText = totalScore + ' в вашу пользу';
				} else if(playerOneScore < playerTwoScore) {
					answer.innerText = totalScore + ' в пользу противника';
				} else {
					 answer.innerText = totalScore + ' Ничья';
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
	</script>
