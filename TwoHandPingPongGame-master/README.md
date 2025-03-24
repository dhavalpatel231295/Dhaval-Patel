#  🎮 Two Hand Ping Pong Game  🎮 

Welcome to the **Two Hand Ping Pong Game**! 🌟 This project demonstrates how to create a fun and interactive ping pong game controlled by hand gestures. Perfect for beginners, this game combines computer vision and gaming mechanics to provide a unique experience.

## 🚀 Features
- **✋ Hand Gesture Control**: Use your hands to control the paddles and play ping pong.
- **⚡ Dynamic Gameplay**: Experience a fast-paced game with real-time ball movement.
- **🏆 Score Tracking**: Keep track of your scores as you play against yourself!
- **💥 Game Over Screen**: A visual representation of when the game ends.

---

## 🛠 Technology Stack
- **🐍 Python**: Core programming language for development.
- **🔍 OpenCV**: For real-time computer vision and video capture.
- **✋ CVZone**: Simplifies hand tracking and overlays.
- **➕ NumPy**: For numerical operations and handling array data.
- **🤖 MediaPipe**: For efficient hand tracking and gesture recognition.

---

## 🏗 How to Run the Project

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/TwoHandPingPongGame.git
cd TwoHandPingPongGame
```

### 2. Install Dependencies
Make sure you have Python installed. You can install the required packages using pip:
```bash
pip install opencv-python cvzone numpy mediapipe
```

### 3. Run the Project
```bash
python main.py
```

## 🔍 How It Works
- **🤚 Hand Detection**: The game uses a webcam to track your hands in real time.
- **⚙️ Gameplay Mechanics**: You control the left and right paddles with your hands to hit the ball.
- **🎯 Scoring**: Points are awarded for successful hits, and the game ends when the ball goes out of bounds.

## 🗂 Project Structure
```bash
.
├── Resources/
│   ├── Background.png  # Background image for the game
│   ├── gameOver.png    # Game Over screen image
│   ├── Ball.png        # Ball image
│   ├── bat1.png        # Left paddle image
│   └── bat2.png        # Right paddle image
├── main.py             # Main script for the game
└── README.md           # Project documentation
```

## 🔮 Future Enhancements
- 🔊 Add sound effects for scoring and game over.
- 🤖 Implement more advanced AI opponents for single-player mode.
- ⚖️ Customize paddle sizes and ball speed for different difficulty levels.

## 📜 License
This project is licensed under the MIT License. See the LICENSE file for more details.

## 🙏 Acknowledgements
- **OpenCV**: For powerful computer vision capabilities.
- **CVZone**: For simplifying hand gesture recognition.
- **MediaPipe**: For efficient hand tracking and gesture recognition.
