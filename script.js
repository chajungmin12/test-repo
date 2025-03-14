let currentBid = 1000; // 초기 입찰가
let timeLeft = 300; // 5분 (300초)

const playerName = document.getElementById('player-name');
const currentBidElement = document.getElementById('current-bid');
const bidAmount = document.getElementById('bid-amount');
const bidButton = document.getElementById('bid-button');
const timeLeftElement = document.getElementById('time-left');

function updateBid() {
    const newBid = parseInt(bidAmount.value);
    if (newBid > currentBid) {
        currentBid = newBid;
        currentBidElement.textContent = currentBid + '만원';
        bidAmount.value = '';
    } else {
        alert('현재 입찰가보다 높은 금액을 입력해주세요.');
    }
}

function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timeLeftElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    if (timeLeft > 0) {
        timeLeft--;
        setTimeout(updateTimer, 1000);
    } else {
        bidButton.disabled = true;
        alert('경매가 종료되었습니다!');
    }
}

bidButton.addEventListener('click', updateBid);
updateTimer();
