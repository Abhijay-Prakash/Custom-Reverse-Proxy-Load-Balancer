 Custom Reverse Proxy Load Balancer

A lightweight, Node.js-based reverse proxy and load balancing system designed to distribute incoming requests across multiple backend servers using a round-robin algorithm.
This project simulates a real production architecture with three load balancers and two backend servers, demonstrating concepts like scalability, fault tolerance, and traffic routing.

 Architecture Overview

This system contains:

1️⃣ Three Load Balancers (LB1, LB2, LB3)

Each load balancer:

Accepts incoming traffic

Routes requests to backend servers

Uses pure round-robin selection

Works independently (simulating multiple entry points in production)

2️⃣ Two Backend Servers

Each backend server:

Responds with its identity (Server 1 / Server 2)

Is used to visualize how traffic is distributed

3️⃣ Testing Script

A PowerShell script (test.ps1) repeatedly hits a load balancer to verify:

Correct routing

Alternating server responses

Failover behavior

 Tech Stack

Node.js

Express.js

Axios

PowerShell (for testing)

 What This Project Demonstrates

✔ Custom reverse proxy implementation
✔ Load balancing using round-robin
✔ Multiple load balancers (simulating high-availability design)
✔ Request forwarding using Axios
✔ Backend service orchestration
✔ Local simulation of multi-LB setup

This is a great introductory step toward production-grade concepts like:

Health checks

Failover logic

Heartbeat mechanisms

DNS-level load balancing

Autoscaling

🏗 Project Structure
/load_balancer
│
├── lb1.js
├── lb2.js
├── lb3.js
│
├── backend1.js
├── backend2.js
│
├── test.ps1     # Testing script
└── README.md

 How to Run
Start Backend Servers:
node backend1.js
node backend2.js

Start Load Balancers:
node lb1.js
node lb2.js
node lb3.js

Run Test Script (PowerShell):
./test.ps1


You will see responses like:

[LB1] → Response from Backend Server 1
[LB1] → Response from Backend Server 2
[LB1] → Response from Backend Server 1
...

 Future Enhancements

Health check + automatic server removal

Weighted load balancing

Sticky sessions

Clustered LB heartbeat system

Centralized metrics dashboard

Docker deployment
