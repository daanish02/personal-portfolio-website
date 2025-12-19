# Sample Data Guide (Golden Standard)

This document provides a complete set of mock data for every JSON store in the project. Use these as a reference to ensure your data follows the correct structure and uses all supported literals.

---

## 🏷️ Personal & Social

### `about.json`
```json
{
  "name": "Jane Doe",
  "tagline": "AI Research Engineer | Systems Architect",
  "intro": [
    "I am a passionate AI Engineer with over 5 years of experience in developing scalable machine learning systems.",
    "My work focuses on the intersection of deep learning and high-performance computing, aiming to make AI more accessible."
  ],
  "interests": {
    "technical": ["Neural Architecture Search", "Distributed Systems", "GPU Kernels"],
    "nonTechnical": ["Mountain Biking", "Analog Photography", "Jazz Piano"]
  }
}
```

### `contact.json`
```json
{
  "email": "jane.doe@example.com",
  "github": {
    "username": "janedoe",
    "statsUsername": "janedoe-stats",
    "url": "https://github.com/janedoe"
  },
  "linkedin": {
    "url": "https://linkedin.com/in/janedoe"
  },
  "leetcode": {
    "username": "janedoe_code",
    "url": "https://leetcode.com/janedoe_code"
  }
}
```

---

## 🏛️ Page 1: Portfolio (Home)

### `experience.json`
```json
[
  {
    "id": "exp-1",
    "title": "Principal AI Engineer",
    "subtitle": "Quantum Systems",
    "period": "2021 - Present",
    "overview": "Leading the development of a distributed training framework for Large Language Models.",
    "isEmpty": false,
    "details": {
      "problem": "Massive communication overhead in multi-node LLM training.",
      "approach": "Implemented a custom collective communication library using NCCL and RDMA.",
      "impact": "Reduced training time by 30% for models exceeding 100B parameters.",
      "skills": ["C++", "CUDA", "PyTorch", "InfiniBand"],
      "links": [{ "label": "Technical Blog", "url": "https://example.com/blog/llm-training" }]
    }
  }
]
```

### `projects.json`
```json
[
  {
    "id": "proj-1",
    "title": "Edge-Vision Toolkit",
    "badge": "Active", // Options: "Active", "Completed", "In Progress", "Ideation"
    "period": "2023",
    "overview": "A lightweight library for real-time object detection on mobile devices.",
    "isEmpty": false,
    "details": {
      "description": "Optimized YOLOv8 models for mobile deployment using quantization and pruning.",
      "problem": "High latency of standard CV models on non-GPU mobile hardware.",
      "approach": "Utilized TensorRT-Mobile and custom pruning strategies.",
      "impact": "Achieved 30 FPS on mid-range Android devices.",
      "skills": ["C++", "TensorFlow Lite", "ONNX", "Android NDK"],
      "links": [{ "label": "GitHub Repo", "url": "https://github.com/janedoe/edge-vision" }]
    }
  },
  {
    "id": "proj-2",
    "title": "Autonomous Drone Navigator",
    "badge": "Completed",
    "period": "2022",
    "overview": "Simultaneous Localization and Mapping (SLAM) system for indoor drones.",
    "isEmpty": false,
    "details": {
      "description": "Built a vision-based SLAM system using ORB-SLAM3 and ROS2.",
      "links": []
    }
  }
]
```

### `skills.json`
```json
{
  "skills": [
    { "name": "PyTorch", "url": "https://pytorch.org/" },
    { "name": "TensorFlow", "icon": null },
    { "name": "NVIDIA", "icon": "https://simpleicons.org/icons/nvidia.svg" }
  ]
}
```

### `certifications.json`
```json
[
  {
    "id": "cert-1",
    "title": "Google Cloud Professional ML Engineer",
    "issuer": "Google",
    "date": "2023",
    "status": "Completed", // Options: "Completed", "In Progress", "Planned"
    "overview": "Validated expertise in building and deploying ML models on GCP.",
    "isEmpty": false,
    "details": {
      "description": "Covered Vertex AI, Dataflow, and BigQuery ML.",
      "links": [{ "label": "Verify", "url": "https://google.com/verify/123" }]
    }
  }
]
```

---

## 🏗️ Page 2: Credentials (/background)

### `education.json`
```json
[
  {
    "degree": "Ph.D. in Computer Science",
    "institution": "Stanford University",
    "period": "2016 - 2021",
    "gpa": "4.0/4.0",
    "highlights": ["Thesis: Neural Architecture Search for Transformers", "Outstanding Student Award"]
  }
]
```

### `research.json`
```json
[
  {
    "id": "res-1",
    "title": "Low-Precision Quantization for ViTs",
    "venue": "CVPR 2024",
    "date": "2024",
    "status": "Published", // Options: "Ideation", "In Progress", "Submitted", "In Review", "Published"
    "overview": "Method for 4-bit quantization of Vision Transformers with <1% accuracy loss.",
    "isEmpty": false,
    "details": {
      "description": "Proposed a novel weight calibration technique for mixed-precision inference.",
      "links": [{ "label": "ArXiv Paper", "url": "https://arxiv.org/abs/456" }]
    }
  },
  {
    "id": "res-2",
    "title": "Hardware-Aware Architecture Search",
    "venue": "NeurIPS 2023",
    "date": "2023",
    "status": "Submitted",
    "overview": "Automated search for architectures optimized for specific hardware latencies.",
    "isEmpty": false,
    "details": {
      "description": "Integrates hardware latency models directly into the search objective."
    }
  }
]
```

### `awards.json`
```json
[
  {
    "id": "award-1",
    "title": "Top 30 Under 30 in AI",
    "context": "Forbes",
    "year": "2023",
    "overview": "Recognized for contributions to efficient deep learning.",
    "isEmpty": false,
    "details": {
      "description": "Selected based on research impact and industry contributions."
    }
  }
]
```

---

## 🧪 Page 3: More (/depth)

### `languages.json`
```json
[
  { "name": "English", "icon": null },
  { "name": "Mandarin", "icon": null }
]
```

### `student-activities.json`
```json
[
  {
    "id": "act-1",
    "title": "Captain",
    "organization": "Robotics Team",
    "period": "2018 - 2020",
    "overview": "Leading the university robotics team in national competitions.",
    "isEmpty": false,
    "details": {
      "description": "Won 1st place in the National RoboCup 2019."
    }
  }
]
```

### `volunteering.json`
```json
[
  {
    "id": "vol-1",
    "title": "Mentor",
    "organization": "Women in Data Science",
    "period": "2021 - Present",
    "overview": "Mentoring early-career data scientists.",
    "isEmpty": false,
    "details": {
      "description": "Providing technical guidance and career advice."
    }
  }
]
```
