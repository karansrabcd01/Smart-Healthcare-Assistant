const diseases = [
    {
        name: "Common Cold",
        symptoms: ["cough", "sneezing", "sore throat", "runny nose", "fatigue", "headache", "mild fever", "congestion", "body ache", "chills"]
    },
    {
        name: "Flu",
        symptoms: ["fever", "chills", "muscle ache", "cough", "congestion", "runny nose", "fatigue", "headache", "sore throat", "vomiting"]
    },
    {
        name: "COVID-19",
        symptoms: ["fever", "dry cough", "fatigue", "loss of taste", "loss of smell", "shortness of breath", "headache", "sore throat", "muscle pain", "chills"]
    },
    {
        name: "Migraine",
        symptoms: ["headache", "nausea", "sensitivity to light", "sensitivity to sound", "blurred vision", "throbbing pain", "dizziness", "fatigue", "vomiting", "aura"]
    },
    {
        name: "Diabetes",
        symptoms: ["frequent urination", "excessive thirst", "extreme hunger", "unexplained weight loss", "fatigue", "blurry vision", "slow healing", "frequent infections", "numbness", "dry mouth"]
    },
    {
        name: "Hypertension",
        symptoms: ["headache", "dizziness", "blurred vision", "shortness of breath", "chest pain", "nosebleeds", "fatigue", "confusion", "irregular heartbeat", "blood in urine"]
    },
    {
        name: "Asthma",
        symptoms: ["shortness of breath", "wheezing", "chest tightness", "cough", "difficulty breathing", "rapid breathing", "fatigue", "anxiety", "blue lips", "sweating"]
    },
    {
        name: "Pneumonia",
        symptoms: ["cough", "fever", "chills", "shortness of breath", "chest pain", "fatigue", "nausea", "vomiting", "diarrhea", "confusion"]
    },
    {
        name: "Bronchitis",
        symptoms: ["cough", "mucus production", "fatigue", "shortness of breath", "chest discomfort", "slight fever", "chills", "sore throat", "body aches", "headache"]
    },
    {
        name: "Tuberculosis",
        symptoms: ["persistent cough", "coughing up blood", "chest pain", "weight loss", "fatigue", "fever", "night sweats", "chills", "loss of appetite", "shortness of breath"]
    },
    {
        name: "Gastroenteritis",
        symptoms: ["diarrhea", "nausea", "vomiting", "stomach cramps", "fever", "headache", "muscle aches", "dehydration", "fatigue", "loss of appetite"]
    },
    {
        name: "Peptic Ulcer",
        symptoms: ["burning stomach pain", "bloating", "heartburn", "nausea", "intolerance to fatty foods", "belching", "vomiting", "weight loss", "poor appetite", "bloody stools"]
    },
    {
        name: "Irritable Bowel Syndrome (IBS)",
        symptoms: ["abdominal pain", "cramping", "bloating", "gas", "diarrhea", "constipation", "mucus in stool", "fatigue", "nausea", "feeling of incomplete bowel movement"]
    },
    {
        name: "Urinary Tract Infection (UTI)",
        symptoms: ["strong urge to urinate", "burning sensation when urinating", "frequent urination", "cloudy urine", "blood in urine", "strong-smelling urine", "pelvic pain", "fatigue", "fever", "nausea"]
    },
    {
        name: "Kidney Stones",
        symptoms: ["severe pain in the side", "pain radiating to the lower abdomen", "pain during urination", "pink, red or brown urine", "cloudy urine", "nausea", "vomiting", "frequent urination", "fever", "chills"]
    },
    {
        name: "Gallstones",
        symptoms: ["sudden intense pain in the abdomen", "pain between the shoulder blades", "pain in the right shoulder", "nausea", "vomiting", "fever", "chills", "jaundice", "dark urine", "clay-colored stools"]
    },
    {
        name: "Appendicitis",
        symptoms: ["sudden abdominal pain", "pain that worsens with movement", "nausea", "vomiting", "loss of appetite", "fever", "constipation", "diarrhea", "abdominal bloating", "inability to pass gas"]
    },
    {
        name: "Hepatitis",
        symptoms: ["fatigue", "flu-like symptoms", "dark urine", "pale stool", "abdominal pain", "loss of appetite", "unexplained weight loss", "yellowing of the skin", "jaundice", "nausea"]
    },
    {
        name: "Liver Cirrhosis",
        symptoms: ["fatigue", "easy bruising", "itchy skin", "swelling in legs", "weight loss", "loss of appetite", "nausea", "jaundice", "confusion", "spider-like blood vessels on skin"]
    },
    {
        name: "Pancreatitis",
        symptoms: ["upper abdominal pain", "pain that radiates to the back", "pain that worsens after eating", "nausea", "vomiting", "fever", "rapid pulse", "tenderness in the abdomen", "swollen abdomen", "weight loss"]
    },
    {
        name: "Hyperthyroidism",
        symptoms: ["unintentional weight loss", "rapid heartbeat", "increased appetite", "nervousness", "anxiety", "tremor", "sweating", "increased sensitivity to heat", "fatigue", "difficulty sleeping"]
    },
    {
        name: "Hypothyroidism",
        symptoms: ["fatigue", "weight gain", "cold intolerance", "constipation", "dry skin", "puffy face", "hoarseness", "muscle weakness", "depression", "memory problems"]
    },
    {
        name: "Rheumatoid Arthritis",
        symptoms: ["joint pain", "joint swelling", "stiffness", "fatigue", "fever", "loss of appetite", "weakness", "deformity of joints", "redness", "tenderness"]
    },
    {
        name: "Osteoporosis",
        symptoms: ["back pain", "loss of height", "stooped posture", "easily fractured bones", "brittle bones", "weakness", "fatigue", "decreased grip strength", "swelling in joints", "joint pain"]
    },
    {
        name: "Anemia",
        symptoms: ["fatigue", "weakness", "pale skin", "shortness of breath", "dizziness", "cold hands and feet", "headache", "irregular heartbeat", "chest pain", "brittle nails"]
    },
    {
        name: "Leukemia",
        symptoms: ["fatigue", "fever", "frequent infections", "unexplained weight loss", "easy bruising", "bleeding", "bone pain", "night sweats", "swollen lymph nodes", "pale skin"]
    },
    {
        name: "Lymphoma",
        symptoms: ["swollen lymph nodes", "fatigue", "fever", "night sweats", "unexplained weight loss", "shortness of breath", "itchy skin", "chest pain", "cough", "loss of appetite"]
    },
    {
        name: "Skin Cancer",
        symptoms: ["new mole", "changes in existing mole", "itchiness", "bleeding from mole", "irregular borders", "asymmetry in mole", "varied colors in mole", "large diameter mole", "scaly skin", "non-healing sore"]
    },
    {
        name: "Breast Cancer",
        symptoms: ["lump in the breast", "change in breast shape", "dimpling of skin", "nipple discharge", "redness of skin", "swelling in breast", "nipple inversion", "pain in the breast", "itchiness", "thickening of breast tissue"]
    },
    {
        name: "Prostate Cancer",
        symptoms: ["difficulty urinating", "weak urine flow", "blood in urine", "blood in semen", "bone pain", "erectile dysfunction", "loss of bladder control", "discomfort in pelvic area", "swelling in legs", "unexplained weight loss"]
    },
    {
        name: "Lung Cancer",
        symptoms: ["persistent cough", "coughing up blood", "shortness of breath", "chest pain", "hoarseness", "weight loss", "bone pain", "headache", "fatigue", "loss of appetite"]
    },
    {
        name: "Colorectal Cancer",
        symptoms: ["change in bowel habits", "blood in stool", "persistent abdominal pain", "weakness", "fatigue", "unexplained weight loss", "rectal bleeding", "iron deficiency anemia", "nausea", "vomiting"]
    },
    {
        name: "Alzheimer's Disease",
        symptoms: ["memory loss", "difficulty planning", "difficulty solving problems", "confusion with time", "confusion with place", "difficulty with speaking", "misplacing items", "withdrawal from work", "mood swings", "personality changes"]
    },
    {
        name: "Parkinson's Disease",
        symptoms: ["tremor", "slowed movement", "rigid muscles", "impaired posture", "balance problems", "loss of automatic movements", "speech changes", "writing changes", "muscle pain", "sleep disturbances"]
    },
    {
        name: "Multiple Sclerosis",
        symptoms: ["numbness", "weakness", "vision problems", "tremor", "lack of coordination", "fatigue", "dizziness", "tingling", "speech problems", "memory problems"]
    },
    {
        name: "Epilepsy",
        symptoms: ["seizures", "temporary confusion", "staring spell", "uncontrollable jerking", "loss of consciousness", "fear", "anxiety", "deja vu", "tingling", "dizziness"]
    },
    {
        name: "Stroke",
        symptoms: ["sudden numbness", "sudden confusion", "trouble speaking", "trouble seeing", "trouble walking", "dizziness", "loss of balance", "severe headache", "paralysis", "nausea"]
    },
    {
        name: "Heart Attack",
        symptoms: ["chest pain", "shortness of breath", "nausea", "lightheadedness", "cold sweat", "pain in arm", "pain in back", "pain in neck", "pain in jaw", "fatigue"]
    },
    {
        name: "Heart Failure",
        symptoms: ["shortness of breath", "fatigue", "swelling in legs", "rapid heartbeat", "persistent cough", "wheezing", "abdominal swelling", "nausea", "lack of appetite", "difficulty concentrating"]
    },
    {
        name: "Atrial Fibrillation",
        symptoms: ["irregular heartbeat", "heart palpitations", "fatigue", "shortness of breath", "dizziness", "chest pain", "weakness", "lightheadedness", "confusion", "anxiety"]
    },
    {
        name: "Peripheral Artery Disease",
        symptoms: ["leg pain", "leg cramping", "numbness", "weakness", "coldness in leg", "sores on toes", "hair loss on legs", "shiny skin on legs", "slow toenail growth", "weak pulse in leg"]
    },
    {
        name: "Deep Vein Thrombosis",
        symptoms: ["swelling in leg", "pain in leg", "red skin on leg", "warmth in leg", "tenderness in leg", "difficulty walking", "leg cramps", "shortness of breath", "chest pain", "coughing up blood"]
    },
    {
        name: "Pulmonary Embolism",
        symptoms: ["shortness of breath", "chest pain", "coughing up blood", "leg pain", "leg swelling", "rapid heartbeat", "lightheadedness", "dizziness", "clammy skin", "fever"]
    },
    {
        name: "Sleep Apnea",
        symptoms: ["loud snoring", "gasping for air during sleep", "waking with dry mouth", "morning headache", "difficulty staying asleep", "excessive daytime sleepiness", "difficulty concentrating", "irritability", "mood swings", "high blood pressure"]
    },
    {
        name: "Chronic Fatigue Syndrome",
        symptoms: ["extreme fatigue", "sleep problems", "difficulty concentrating", "muscle pain", "joint pain", "headache", "sore throat", "enlarged lymph nodes", "unrefreshing sleep", "dizziness"]
    },
    {
        name: "Fibromyalgia",
        symptoms: ["widespread pain", "fatigue", "sleep disturbances", "difficulty concentrating", "memory problems", "depression", "anxiety", "headaches", "irritable bowel syndrome", "stiffness"]
    },
    {
        name: "Celiac Disease",
        symptoms: ["diarrhea", "bloating", "gas", "fatigue", "weight loss", "anemia", "constipation", "depression", "anxiety", "headache"]
    },
    {
        name: "Lactose Intolerance",
        symptoms: ["diarrhea", "nausea", "bloating", "gas", "abdominal pain", "cramps", "rumbling in the stomach", "vomiting", "flatulence", "fatigue"]
    },
    {
        name: "Gout",
        symptoms: ["intense joint pain", "swelling in joint", "redness in joint", "tenderness in joint", "warmth in joint", "limited range of motion", "lingering discomfort", "fatigue", "fever", "headache"]
    },
    {
        name: "Psoriasis",
        symptoms: ["red patches of skin", "scaly skin", "itchiness", "dry skin", "cracked skin", "bleeding skin", "burning sensation", "soreness", "thickened nails", "swollen joints"]
    },
    {
        name: "Vitiligo",
        symptoms: ["loss of skin color", "premature graying", "loss of color in tissues", "loss of color in hair", "white patches on skin", "sensitivity to sunlight", "itchiness", "irregular borders on patches", "spreading of patches", "changes in texture of skin"]
    }
    // Add more diseases as in the previous code (total of 50)
    // ...
];

const allSymptoms = Array.from(new Set(diseases.flatMap(disease => disease.symptoms)));

function populateSymptomList() {
    const symptomList = document.getElementById("symptom-list");

    allSymptoms.forEach(symptom => {
        const option = document.createElement("option");
        option.value = symptom;
        option.textContent = symptom;
        symptomList.appendChild(option);
    });
}

function filterDiseases(selectedSymptoms) {
    const diseaseList = document.getElementById("disease-list");
    diseaseList.innerHTML = "";

    const filteredDiseases = diseases.filter(disease => {
        return selectedSymptoms.every(symptom => disease.symptoms.includes(symptom));
    });

    filteredDiseases.forEach(disease => {
        const li = document.createElement("li");
        li.textContent = disease.name;
        diseaseList.appendChild(li);
    });

    if (filteredDiseases.length === 0) {
        const li = document.createElement("li");
        li.textContent = "No matching diseases found.";
        diseaseList.appendChild(li);
    }
}

document.getElementById("add-symptom").addEventListener("click", function() {
    const symptomList = document.getElementById("symptom-list");
    const selectedSymptom = symptomList.value;
    const symptomsList = document.getElementById("symptoms-list");

    if (selectedSymptom && !Array.from(symptomsList.children).map(li => li.textContent).includes(selectedSymptom)) {
        const li = document.createElement("li");
        li.textContent = selectedSymptom;
        symptomsList.appendChild(li);

        const selectedSymptoms = Array.from(symptomsList.children).map(li => li.textContent);
        filterDiseases(selectedSymptoms);
    }

    symptomList.value = "";
});

populateSymptomList();
