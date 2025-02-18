# AI-Driven-Phishing-Detection-in-Real-Time-Using-Golang-and-Blockchain


## Overview
This project is an AI-driven phishing detection system built using Golang and Blockchain technology. It identifies and prevents phishing attacks in real-time, leveraging machine learning and distributed ledger technology to ensure secure and transparent detection.

## Features
- **Real-time phishing detection** using AI-powered analysis.
- **Golang-based backend** for high performance and scalability.
- **Blockchain integration** for immutable logging and verification.
- **REST API** for easy integration with other applications.
- **Machine Learning (ML) models** to analyze phishing patterns.

## Technology Stack
- **Golang**: Backend API and core detection logic.
- **TensorFlow/Keras**: AI model for phishing detection.
- **Ethereum/Hyperledger**: Blockchain for storing phishing reports.
- **PostgreSQL**: Database for metadata storage.
- **Docker**: Containerization for deployment.

## Installation
1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-repo/phishing-detection.git
   cd phishing-detection
   ```
2. **Install Dependencies**
   ```bash
   go mod tidy
   ```
3. **Run the Application**
   ```bash
   go run main.go
   ```
4. **Deploy Smart Contract (if using Ethereum)**
   ```bash
   truffle migrate --network rinkeby
   ```

## Usage
- Start the API server.
- Send URLs for phishing detection via the API.
- Retrieve results and flagged phishing attempts.
- View reports stored on the blockchain.

## API Endpoints
- `POST /detect` - Submits a URL for phishing analysis.
- `GET /results/{id}` - Fetches detection results.
- `GET /blockchain/{hash}` - Retrieves blockchain-stored phishing data.

## Contributing
Contributions are welcome! Please submit issues and pull requests.

## License
This project is licensed under the MIT License.

## Acknowledgments
- OpenAI for AI model insights.
- Ethereum/Hyperledger community for blockchain support.
- Golang developers for robust backend solutions.

---

**Edit in StackBlitz Next-Gen Editor ⚡️**

