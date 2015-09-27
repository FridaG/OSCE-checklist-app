Meteor.startup(function () {
    if (OSCE.find().count() === 0){
        var data = [
        {
            name: "Cardiac System",
            sections:[
                {
                    sectionName: "Introduction",
                    sectionItems:[ 
                    "Wash Hands, introduction, consent obtained"]
                },
                
                {
                    sectionName:"Position/Exposure",
                    sectionItems:
                    [
                    "Couch raised to 30–45°, exposed only as necessary"
                    ]
                },
                {
                    sectionName:"General Inspection",
                    sectionItems:
                    [
                    "General observation, Mental state, Body Habitus, Colour"
                    ]
                
                },
                {
                    sectionName:"Vital signs/hydration",
                    sectionItems:
                    [
                    "Temp, PR, BP, RR, (O2 sats, BSL, urinalysis)"
                    ]
                
                },
                {
                    sectionName:"Hands",
                    sectionItems:
                    [
                    "Pallor", "cyanosis", "xanthomata (cholesterol deposits)", "clubbing (hypoxia, myxoma, cirrhosis, Graves' Disease/thyroid acropachy, non-small cell lung cancer)", "signs of endocarditis (palmar painless <strong>Janeway lesions</strong>, painful Osler's nodes, splinter haemorrhages)"
                    ]
                
                },
                {
                    sectionName:"Radial pulse/respiratory rate",
                    sectionItems:
                    [
                    "Radial pulse: rate and rhythm",
                    "Radio-radial, radio-femoral delay, respiratory rate."
                    ]
                
                },
                {
                    sectionName:"Blood pressure",
                    sectionItems:
                    [
                    "Discuss technique and assessment of postural hypotension"
                    ]
                
                },
                {
                    sectionName:"Face",
                    sectionItems:
                    [
                        {
                            subsection:"Eyes",
                            subsectionItems:["xanthelasma (yellow cholesterol plaques)", "conjunctival pallor", "jaundice"]
                        },
                        {
                            subsection:"Mouth",
                            subsectionItems: ["central cyanosis", "palate", "teeth", "gums"]
                        }
                    
                    ]
                
                },
                {
                    sectionName:"Neck",
                    sectionItems:
                    [
                    "JVP",
                    "Carotid:palpate pulse -- note character, auscultate for bruits"
                    ]
                },
                {
                    sectionName:"Chest",
                    sectionItems:
                    [
                    "Scars, deformities, apex beat, thrills",
                    "parasternal and LV heave"
                    ]
                },
                {
                    sectionName:"Heart",
                    sectionItems:
                    [
                        {
                            subsection:"Auscultate:",
                            subsectionItems:["2 heart sounds", "added sounds", "murmurs"]
                        },
                        {
                            subsection:"Listen in three positions:",
                            subsectionItems: ["supine (45º)", "left lateral position", "sitting forward in full expiration"]
                        }
                    
                    ]
                
                },
                {
                    sectionName:"Back",
                    sectionItems:
                    [
                    "<strong>Inspect</strong> for scars, deformity",
                    "<strong>Palpate</strong> for sacral oedema",
                    "<strong>Percuss</strong> the lung bases looking for effusion due to pulmonary oedema",
                    "<strong>Auscultate</strong> the lung bases for crackles due to pulmonary oedema"
                    ]
                },

                {
                    sectionName:"Abdomen (discuss only)",
                    sectionItems:
                    [
                        {
                            subsection:"supine on one pillow",
                            subsectionItems:[]
                        },
                        {
                            subsection:"palpate:",
                            subsectionItems: ["tenderness", "masses", "organomegaly", "aortic aneurysm", "ascites"]
                        },
                        {
                            subsection:"auscultate for bruits",
                            subsectionItems: ["aortic", "renal", "femoral"]
                        }
                    
                    ]
                },
                {
                    sectionName:"Lower limbs",
                    sectionItems:
                    [
                        {
                            subsection:"Look for:",
                            subsectionItems:["varicose veins", "colour and temperature of legs", "trophic changes", "ulceration of the skin", "clubbing of toes", "xanthomata", "oedema"]
                        },
                        {
                            subsection:"Compare pulses of both limbs:",
                            subsectionItems: ["femoral", "popliteal", "posterior tibial", "dorsalis pedis"]
                        }
                    
                    ]
                },
                {
                    sectionName:"Further assessments",
                    sectionItems:
                    [
                    "fundoscopy, ECG"
                    ]
                }
                ]
        },
        {
            name: "Respiratory System",
            sections:[
                {
                    sectionName:"Introduction",
                    sectionItems:[
                        "Wash hands, introduction, obtain consent"
                    ]
                },
                {
                    sectionName:"Position/Exposure",
                    sectionItems:
                    [
                    "Lying or sitting with chest exposed as necessary",
                    ]
                }, 
                {
                    sectionName:"General inspection",
                    sectionItems:
                    [
                    "General observation, mental state, body habitus, colour"
                    ]
                }, 
                {
                    sectionName:"Vital signs/hydration",
                    sectionItems:
                    [
                    "Temp, PR, BP, RR, SaO2"
                    ]
                }, 
                {
                    sectionName:"Hands/upper limbs",
                    sectionItems:
                    [
                    "clubbing, cyanosis, tar staining, pallor, cyanosis, wasting","flapping tremor", "radial pulse - rate, rhythem, volume", "respiratory rate, accessory muscle use"
                    ]
                }, 
                {
                    sectionName:"Face/neck",
                    sectionItems:
                    [
                        {
                            subsection:"eyes:",
                            subsectionItems:["conjunctival pallor, Horner's syndrome"]
                        },
                        {
                            subsection:"nose:",
                            subsectionItems: ["polyps, enlarged turbinates, displaced septum, sinus tenderness"]
                        },
                        {
                            subsection:"mouth and neck",
                            subsectionItems: ["tongue - central cyanosis", "leukoplakia","oral candiasis", "pharynx - tonsil size/exudate", "dentition", "palpate trachea for displacement/tug"]
                        },
                        {
                            subsection:"lymph nodes",
                            subsectionItems: ["submental", "submandibular", "jugular chain", "pre/post auricular", "occiptal", "posterior triangle", "supraclavicular"]
                        }
                    ]
                },
                {
                    sectionName:"Chest inspection (start posterior and repeat anterior)",
                    sectionItems:
                    [
                    "Shape, symmetry, scars, deformities, respiratory movement; supraclavicular, intercostal, and subcostal recession"
                    ]
                }, 
                {
                    sectionName:"Palpation",
                    sectionItems:
                    [
                    "measure expansion, note asymmetry"
                    ]
                }, 
                {
                    sectionName:"Percussion",
                    sectionItems:
                    [
                    "Position (arms crossed for posterior chest)", "compare symmetry","include axillae/supraclavicular fossa/clavicles"
                    ]
                }, 
                {
                    sectionName:"Auscultation",
                    sectionItems:
                    [
                        {
                            subsection:"Breath Sounds",
                            subsectionItems:["vesicular/bronchial", "added sounds (stridor, wheezes, crackles)", "vocal resonance"]
                        }
                    ]
                },
                {
                    sectionName:"Further assessments",
                    sectionItems:
                    [
                    "observation chart", "respiratory function tests (Peak flow meter, spirometry)"
                    ]
                }
            ]
        },
        {
            name:"Gastrointestinal System",
            sections:[
                {
                    sectionName:"Introduction",
                    sectionItems:[
                        "Wash hands, introduction, obtain consent, chaperone."
                    ]
                },
                {
                    sectionName:"Position/exposure",
                    sectionItems:[
                        "Position and expose as necessary"
                    ]
                },
                {
                    sectionName:"General inspection",
                    sectionItems:[
                        "Assess age, gender, well/unwell, mental state, body habitus, colour"
                    ]
                },
                {
                    sectionName:"Vital signs/hydration",
                    sectionItems:[
                        "Temp, PR, BP, RR, GCS, SaO2"
                    ]
                },
                {
                    sectionName:"Hands and upper limb",
                    sectionItems:[
                        "Nails (leukonychia, koilonychia)", "Hands (clubbing, palmar erythema, pallor, Dupuytren's contracture)", "Hepatic flap (if indicated), tremor","Arms (spider naevi, bruising, wasting, scratch marks)" 
                    ]
                },
                {
                    sectionName:"Face",
                    sectionItems:
                    [
                        {
                            subsection:"Eyes",
                            subsectionItems:["xanthelasma, conjunctival pallor, jaundice, ictiris"]
                        },
                        {
                            subsection:"Mouth",
                            subsectionItems:["foetor, lips, oral mucosa, tongue, gingiva, dentition, tonsils"]
                        },
                    ]
                },
                {
                    sectionName:"Neck and chest",
                    sectionItems:
                    [
                        {
                            subsection:"Inspect",
                            subsectionItems:["spider naevi, hair distribution, gynaecomastia"]
                        },
                        {
                            subsection:"Palpate lymph nodes",
                            subsectionItems:["submental", "submandibular", "pre/postauricular", "jugular chain","supraclavicular","posteriour triangle", "occipital"]
                        },
                    ]
                },
                {
                    sectionName:"Abdomen",
                    sectionItems:
                    [
                        {
                            subsection:"Inspect",
                            subsectionItems:["skin: scars, striae, bruising, pigmentation", "abdomen: distension, masses, veins, peristalsis, pulsations"]
                        },
                        {
                            subsection:"Palpate (superficial, then deep)",
                            subsectionItems:["tenderness: localised (Murphy's sign, McBurney's point)", "Rovsing's sign (palpate left elicits pain in right; sign of appendicitis), and rebound tenderness (watch face)", "guarding (voluntary or involuntary", "masses", "organs (liver, spleen, kidneys, bladder), AAA"]
                        },
                        {
                            subsection:"Percuss",
                            subsectionItems:["liver span, bladder", "shifting dullness/fluid thrill"]
                        },
                        {
                            subsection:"Auscultation",
                            subsectionItems:["bowel sounds/succussion splash", "bruits over renal pedicles and the aorta"]
                        },
                    ]
                },
                {
                    sectionName:"Discuss (not performed)",
                    sectionItems:[
                        "Examination of axilla (lymphadenopathy), (groin region (hernias and lymphadenopathy)", "genitalia", "DRE +/- VE" 
                    ]
                },
                {
                    sectionName:"Lower limbs",
                    sectionItems:[
                        "Skin changes, sacral and ankle/pedal oedema, pulses, DVT" 
                    ]
                },
                {
                    sectionName:"Discuss tests",
                    sectionItems:[
                        "Wt/Ht, BGL, WTU, u&beta;hCG" 
                    ]
                }

            ]

        },
        {
            name:"MSK - Spine",
            sections:[
                {
                    sectionName:"Introduction",
                    sectionItems:[
                        "Wash hands, introduction, obtain consent"
                    ]
                },
                {
                    sectionName:"Position/exposure",
                    sectionItems:[
                        "Initially upright and appropriately exposed depending on region to be examined, then recumbant"
                    ]
                },
                {
                    sectionName:"General inspection",
                    sectionItems:[
                        "Assess age, gender, well/unwell, mental state, body habitus +/-, dysmorphic features, deformity, general posture, assistance devices"
                    ]
                },
                {
                    sectionName:"Look",
                    sectionItems:[
                        "Look specifically at bony/muscular landmarks (assess vertebral levels", "Check for posture (normal spinal curvature), deformity, symmetry (landmarks), spasm, swelling, skin changes, scars, and wasting."
                    ]
                },
                {
                    sectionName:"Feel",
                    sectionItems:[
                        "Check skin temperature.",
                        "Palpate spine (spinous processes, interspinous ligaments, facet joints), all bony landmarks, and surrounding muscles, note tenderness.",
                        "Palpate paraspinal muscles for bulk, spasm, and tenderness."
                    ]
                },
                {
                    sectionName:"Move (active first, then passive)",
                    sectionItems:[
                        "Assess full range of active and passive movement.",
                        "Note symmetry, restriction, pain, or neurological symptoms.", 
                        "For thoracic spine sitting will fix the pelvis."
                    ]
                },
                {
                    sectionName:"Function",
                    sectionItems:[
                        "Assess how daily function is affected.",
                        "Cx spine: driving, sleeping.",
                        "Thoracic spine: twisting.",
                        "Lumbar spine: bending over, tying laces."
                    ]
                },
                {
                    sectionName:"Special tests",
                    sectionItems:
                    [
                        {
                            subsection:"Cervical spine:",
                            subsectionItems:["neurological assessment of arms"]
                        },
                        {
                            subsection:"Thoracic spine:",
                            subsectionItems:["Assess for scoliosis"]
                        },
                        {
                            subsection:"Lumbar spine",
                            subsectionItems:[
                            "femoral nerve stretch",
                            "straight leg raise (sciatic nerve)",
                            "neurological assessment of lower limb."
                            ]
                        }
                    ]
                }

            ]
        },
        {
            name: "MSK - Knee",
            sections: [
                {
                    sectionName:"Introduction",
                    sectionItems:[
                        "Wash hands, introduction, obtain consent"
                    ]
                },
                {
                    sectionName:"Position/exposure",
                    sectionItems:[
                        "Begin with patient in standing position in exercise shorts or underwear."
                    ]
                },
                {
                    sectionName:"General inspection",
                    sectionItems:[
                        "Assess age, gender, well/unwell, mental state, body habitus +/- dysmorphic features, deformity, general posture, assistance devices",
                        "Observe gait, undressing, sitting and rising from chair, removing shoes and socks"
                    ]
                },
                {
                    sectionName:"Look",
                    sectionItems:[
                        "Inspect for posture, deformity (genu valgum/varum/recurvatum), symmetry (landmarks), spasm, swelling (joint effusion, bursae), skin changes, scars and wasting (esp, quads)",
                        "Inspect from front, side, and behind (Baker’s cyst)", 
                        "Observe for patella tracking"
                    ]
                },
                {
                    sectionName:"Feel",
                    sectionItems:[
                        "Skin temperature, swellings, tenderness",
                        "bony landmarks for swelling, tenderness, or deformity (patella, patella ligament, tibial tuberosity, medial and lateral femoral and tibial condyles and head of fibula)",
                        "joint line",
                        "muscles: quads (bulk, spasm, tenderness) and quad tendon",
                        "bursae",
                        "popliteal fossa for Baker’s cyst",
                        "Test for effusion: patella tap, bulge test",  
                    ]
                },
                {
                    sectionName:"Move",
                    sectionItems:[
                        "Active movement",
                        "Passive movement",
                        "Assess symmetry, quality of movement, grade restrictions",
                        "Flexion, extension, rotation",
                    ]
                },
                {
                    sectionName:"Function",
                    sectionItems:[
                        "Assess gait, squatting, sitting and rising from chair, removing shoes and socks. (if not done previously)"
                    ]
                },
                {
                    sectionName:"Special tests",
                    sectionItems:
                    [
                        {
                            subsection:"Patella apprehension test:",
                            subsectionItems:["The examiner places a thumb along the medial patellar border and applies a laterally directed force, observing the facies for angst)"]
                        },
                        {
                            subsection:"Medial and lateral collateral ligament test:",
                            subsectionItems: ["Stress the MCL by bracing the opposite side to the ligament you are testing and apply a valgus (laterally directed) force to the distal tibia initially in slight flexion and then in full extension. Opposite for LCL."]
                        },
                        {
                            subsection:"Anterior draw test",
                            subsectionItems: ["sit on foot, pull leg forward to test ACL.  Push back (posterior draw) for PCL"]
                        },
                        {
                            subsection:"Lachman’s test",
                            subsectionItems: ["ACL integrity, like anterior draw"]
                        },
                        {
                            subsection:"McMurray’s test for medial/lateral meniscal tear",
                            subsectionItems: ["This is the one where you pick the leg up, put the thigh one way and point the foot the opposite way.  To test the medial meniscus rotate the tibia laterally (externally) by clasping the heel of the foot and extending the knee (2 – 3 times). check for a pop in the relevant meniscus"]
                        }
                    ]
                }
               

            ]

        },
        {
            name: "MSK - Shoulder",
            sections:[
                {
                    sectionName:"Introduction",
                    sectionItems:[
                        "Wash hands, introduction, obtain consent"
                    ]
                },
                {
                    sectionName:"Position/exposure",
                    sectionItems:[
                        "Comfortable position for patient — preferably standing.  Both shoulders fully exposed — for males, shirt off; for females, bra/sports top"
                    ]
                },
                {
                    sectionName:"General inspection",
                    sectionItems:[
                        "Assess age, gender, well/unwell, mental state, body habitus +/- dysmorphic features, deformity, general posture, assistance devices",
                        "Observe patient undress to assess functional impairment"
                    ]
                },
                {
                    sectionName:"Look",
                    sectionItems:[
                        "Inspect for posture, deformity (dislocation), symmetry (landmarks)",
                        "spasm, swelling (joint effusion), skin changes, scars and wasting (esp. deltoid)",
                        "Inspect from front, side, and behind (muscles of scapula)"
                    ]
                },
                {
                    sectionName:"Feel",
                    sectionItems:[
                        "Skin temperature, swellings, tenderness.",
                        "Bony landmarks for swelling, tenderness or deformity (sternoclavicular joint, clavicle, acromioclavicular joint, coracoid and acromion processes, spine, and borders of scapula)",
                        "Joint line",
                        "Muscles - deltoid, biceps, triceps"
                    ]
                },
                {
                    sectionName:"Move",
                    sectionItems:[
                        "Assess symmetry, quality of movement, grade restrictions of – abduction/elevation, adduction, flexion/elevation,extension, internal rotation, external rotation",
                        "active movement: from front and back to assess symmetrical scapulohumeral rhythm",
                        "passive movement"
                    ]
                },
                {
                    sectionName:"Function",
                    sectionItems:[
                        "Assess brushing hair, doing up bra in women, hanging out washing"
                    ]
                },
                {
                    sectionName:"Special tests",
                    sectionItems:
                    [
                        {
                            subsection:"Biceps tendon tests:",
                            subsectionItems:[
                                "Speed’s test -- Flex the shoulder against resistance applied over the distal humerus while maintaining the elbow in extension and the forearm in supination. Tenderness in the bicipital groove indicates bicipital tendinitis.",
                                "Yergason’s test -- Elbow flexed, forearm is pronated.  A positive test is pain at the bicipital groove."
                                ]
                        },
                        {
                            subsection:"Hawkins-Kennedy Test (subacromial impingement):",
                            subsectionItems:["Flex the patient’s elbow and shoulder to 90°, The examiner supports the elbow with one hand and uses the other to internally rotate the shoulder. The test is positive if pain is reproduced."]
                        },
                        {
                            subsection:"Empty-can test (supraspinatus tear/rotator cuff test)",
                            subsectionItems:[
                                "Abduct the arm to 90° in neutral position and test abduction strength.  Then internally rotate the arm and position the arm in 30° of horizontal flexion from the coronal plane and test again."
                            ]
                        },
                        {
                            subsection:"Apprehension Test (for anterior stability)",
                            subsectionItems:[
                                "If sitting or standing, the examiner applies an anterior force to the head of the humerus to produce anterior movement of the humeral head.  Ensure you watch the patient for signs of distress."
                            ]
                        },
                        {
                            subsection:"Winged scapula (paralysis of the serratus anterior muscle, innervated by long thoracic nerve)",
                            subsectionItems:[
                                "Pushup against wall"
                            ]
                        }
                    ]
                } 
            ]
        },
        {
            name: "Neuro - Cranial Nerves",
            sections: [
                {
                    sectionName:"Introduction",
                    sectionItems:[
                        "Wash hands, introduction, obtain consent"
                    ]
                },
                {
                    sectionName:"Positioning",
                    sectionItems:[
                        "Patient should be sitting on edge of bed"
                    ]
                },
                {
                    sectionName:"General Inspection",
                    sectionItems:[
                        "General observation and mental state",
                        "Scars, neurofibromas, facial asymmetry, ptosis, proptosis, deviation of eyes, unequal pupils",
                    ]
                },
                {
                    sectionName:"CN I - Olafactory",
                    sectionItems:[
                        "Ask patient if they can smell normally"
                    ]
                },
                {
                    sectionName:"CN II - Optic",
                    sectionItems:[
                        "Visual acuity",
                        "visual fields",
                        "fundi"
                    ]
                },
                {
                    sectionName:"CN III, IV, VI - Oculomotor, Trochlear, Abducens",
                    sectionItems:[
                        "Inspect pupils, test pupillary reaction to light and accommodation",
                        "assess eye movements – look for failure of movement and nystagmus",
                        "ask about diplopia"
                    ]
                },
                {
                    sectionName:"CN V - Trigeminal",
                    sectionItems:[
                        "Corneal reflex",
                        "face sensation",
                        "mastication muscles",
                        "jaw jerk"
                    ]
                },
                {
                    sectionName:"CN VII - Facial",
                    sectionItems:[
                        "Facial muscle power – forehead, wrinkle eyes, grin and compare nasolabial folds, puff out cheeks"
                    ]
                },
                {
                    sectionName:"CN VIII - vestibulocochlear",
                    sectionItems:[
                        "Whisper tests, inspect auditory canals and drums if indicated, Weber + Rinne’s tests with a 256 Hz tuning fork"
                    ]
                },
                {
                    sectionName:"CN IX, X - Glossopharyngeal and Vagus",
                    sectionItems:[
                        "Inspect palate and uvula",
                        "Assess palatal movement",
                        "Assess cough and speech"
                    ]
                },
                {
                    sectionName:"CN XI - Accessory",
                    sectionItems:[
                        "Inspect for torticollis",
                         "shrug shoulders", 
                         "assess sternomastoid"
                    ]
                },
                {
                    sectionName:"CN XII - Hypoglossal",
                    sectionItems:[
                        "Inspect tongue, protrude tongue"
                    ]
                }

            ]
        },
        {
            name: "Neuro - Upper Limb", 
            sections:[
                {
                    sectionName:"Introduction",
                    sectionItems:[
                        "Wash hands, introduction, obtain consent"
                    ]
                },
                {
                    sectionName:"Positioning",
                    sectionItems:[
                        "Patient should be sitting upright on edge of bed, arms relaxed and resting in lap. Arms and upper trunk exposed."
                    ]
                },
                {
                    sectionName:"Inspect",
                    sectionItems:[
                        "General observation and mental state",
                        "Posture, muscle wasting, abnormal movements, fasiculations, Positional drift"
                    ]
                },
                {
                    sectionName:"Tone",
                    sectionItems:[
                        "Wrist, elbow"
                    ]
                },
                {
                    sectionName:"Power",
                    sectionItems:[
                        "Shoulder abduction and adduction", 
                        "Elbow flexion and extension",
                        "Wrist flexion and extension",
                        "Finger extension, flexion and abduction"    
                    ]
                },
                {
                    sectionName:"Reflexes",
                    sectionItems:[
                        "Biceps",
                        "triceps",
                        "supinator",
                        "finger jerks"       
                    ]
                },
                {
                    sectionName:"Coordination",
                    sectionItems:[
                        "Finger-nose test", 
                        "rapidly alternating movements"
                    ]
                },
                {
                    sectionName:"Sensation",
                    sectionItems:[
                        "Light touch",
                        "pain",
                        "vibration sense",
                        "proprioception",
                        "C3 - supraclavicular fossa",
                        "C4 - top of AC joint",
                        "C5 - lateral side of antecubital fossa",
                        "C6 - thumb",
                        "C7 - middle finger",
                        "C8 - little finger",
                        "T1 - medial (ulnar) side of antecubital fossa",
                        "T2 - apex of axilla",
                        "T4 - fourth IC space (nipple line)",
                        "T10 - tenth IC space (umbilicus)"

                    ]
                },
                {
                    sectionName:"Peripheral Nerves",
                    sectionItems:[
                        "Radial nerve (motor/sensory)",
                        "Median nerve (motor/sensory)",
                        "Ulnar nerve (motor/sensory)"
                    ]
                }

            ]
        },
        {
            name: "Neuro - Lower Limb",
            sections:[
                {
                    sectionName:"Introduction",
                    sectionItems:[
                        "Wash hands, introduction, obtain consent"
                    ]
                },
                {
                    sectionName:"Positioning",
                    sectionItems:[
                        "Commence standing; lower limbs exposed"
                    ]
                },
                {
                    sectionName:"Inspect",
                    sectionItems:[
                        "General observation and mental state",
                        "Posture, skin changes, muscle wasting, fasciculation"
                    ]
                },
                {
                    sectionName:"Functional Tests",
                    sectionItems:[
                        "Observe/test gait, heel-toe, tiptoes, heels",
                        "Observe/test proximal myopathy",
                        "Romberg test"
                    ]
                },
                {
                    sectionName:"Tone",
                    sectionItems:[
                        "Knee, ankle"
                    ]
                },
                {
                    sectionName:"Power",
                    sectionItems:[
                        "Hip flexion, extension, abduction and adduction, Knee flexion and extension",
                        "Ankle plantar flexion and dorsiflexion",
                        "Tarsal joint eversion and inversion",
                    ]
                },
                {
                    sectionName:"Reflexes",
                    sectionItems:[
                        "Knee jerk",
                        "ankle jerk",
                        "plantar reflex",
                    ]
                },
                {
                    sectionName:"Coordination",
                    sectionItems:[
                        "KObserve/test for coordination"
                    ]
                },
                {
                    sectionName:"Sensation",
                    sectionItems:[
                        "Light touch",
                        "pain",
                        "vibration sensation",
                        "proprioception",
                        "T12 - inguinal ligament at midpoint",
                        "L1 - half distance between T12 and L2",
                        "L2 - mid anterior thigh",
                        "L3 - medial femoral condyle",
                        "L4 - medial malleolus",
                        "L5 - dorsum of foot at third MTP joint",
                        "S1 - lateral heel",
                        "S2 - popliteal fossa in midline",
                        "S3 - ischial tuberosity",
                        "S4-5 - peri-anal region"

                    ]
                },
                {
                    sectionName:"Peripheral Nerves",
                    sectionItems:[
                        "Lateral cutaneous nerve of thigh (sensory)",
                        "Femoral nerve (motor/sensory)",
                        "Sciatic nerve (motor/sensory)",
                        "Common fibular nerve (motor/sensory)"
                    ]
                }
            ]
        },
        {
            name: "Thyroid Exam",
            sections:[
                {
                    sectionName:"Introduction",
                    sectionItems:[
                        "Wash hands, introduction, obtain consent"
                    ]
                },
                {
                    sectionName:"Position/exposure",
                    sectionItems:[
                        "Expose only the minimum necessary at one time",
                        "Ask the patient to expose themselves where possible; Offer patient sheet or modesty blanket"
                    ]
                },
                {
                    sectionName:"General inspection",
                    sectionItems:[
                        "evidence of weight loss, anxiety (hyperthyroidism)",
                        "mental or physical sluggishness (hypothyroidism)"
                    ]
                },
                {
                    sectionName:"Hands",
                    sectionItems:[
                        "tremor, onycholysis, clubbing, palmar erythema, warmth/sweatiness (hyperthyroidism)",
                        "cyanosis, swelling, cool/dry hands (hypothyroidism)",
                        "Palpate for radial pulse (tachycardia, atrial fibrillation – hyperthyroidism, bradycardia – hypothyroidism)."
                    ]
                },
                {
                    sectionName:"Arms",
                    sectionItems:[
                        "Lift arms above head (proximal myopathy). ",
                        "Reflexes."
                    ]
                },
                {
                    sectionName:"Face",
                    sectionItems:[
                        "Exophthalmos, lid retraction, lid lag (hyperthyroidism)",
                        "Thickening of skin, pigmentation, alopecia, periorbital oedema, loss of outer one-third of eyebrows, xanthelasma, tongue swelling, voice change (hypothyroidism)"
                    ]
                },
                {
                    sectionName:"Neck",
                    sectionItems:[
                        "Inspect for scars, goitre, thyroid nodules — ask patient to swallow",
                        "Palpate thyroid — repeat with patient swallowing",
                        "Palpate cervical lymph nodes, carotid arteries, position of trachea",
                        "Demonstrate testing for Pemberton’s sign (raise hands above head; look for vena cava obstruction)"
                    ]
                },
                {
                    sectionName:"Chest",
                    sectionItems:[
                        "Auscultate heart for murmurs.",
                        "Auscultate lungs for signs of CCF (basal crackles) or pleural effusion."
                    ]
                },
                {
                    sectionName:"Legs",
                    sectionItems:[
                        "Look for pretibial myxoedema (Graves).",
                        "Test for power (proximal myopathy). Test reflexes."
                    ]
                }

            ]
        },
        {
            name: "Diabetic leg and foot",
            sections:[
                {
                    sectionName:"Introduction",
                    sectionItems:[
                        "Wash hands, introduction, obtain consent"
                    ]
                },
                {
                    sectionName:"Position/exposure",
                    sectionItems:[
                        "Expose only the minimum necessary at one time",
                        "Ask the patient to expose themselves where possible; Offer patient sheet or modesty blanket"
                    ]
                },
                {
                    sectionName:"General inspection",
                    sectionItems:[
                        "Age, sex, body habitus",
                        "Evidence of dehydration, level of consciousness, respiration",
                        "Cushing’s syndrome, acromegaly, haemochromatosis"
                    ]
                },
                {
                    sectionName:"Hands/Arms",
                    sectionItems:[
                        "Blood pressure – check for postural drop"
                    ]
                },
                {
                    sectionName:"Eyes",
                    sectionItems:[
                        "Visual acuity",
                        "Argyll Robertson pupils (bilateral small pupils that reduce in size on a near object (they “accommodate”), but do not constrict when exposed to light) -- neurosyphilis, diabetic neuropathy",
                        "Assess CN III, IV, VI",
                        "Fundoscopy: changes of diabetic or hypertensive retinopathy"
                    ]
                },
                {
                    sectionName:"Abdomen",
                    sectionItems:[
                        "Waist circumference",
                        "Hepatomegaly"
                    ]
                },
                {
                    sectionName:"Legs/Feet",
                    sectionItems:
                    [
                        {
                            subsection:"Look for:",
                            subsectionItems:[
                                "Shoes: appropriate?",
                                "Skin: quality, colour, ulcers, callus, infection",
                                "Muscles: wasting",
                                "Deformity - pes planus, pes cavus, charcot joints"
                            ]
                        },
                        {
                            subsection:"Palpate:",
                            subsectionItems:["Vascular: temperature, capillary refill, pulses"]
                        },
                        {
                            subsection:"Examine for Neuropathy",
                            subsectionItems:[
                                "<strong>Sensory</strong> – pin prick, 128 Hz tuning fork, proprioception, monofilament",
                                "Lower limb reflexes",
                                "<strong>Motor</strong> – proximal myopathy",
                                "<strong>Autonomic</strong> – sweaty/dry skin"
                            ]
                        }
                        
                    ]
                },
                {
                    sectionName:"Additional tests to discuss",
                    sectionItems:[
                        "BSL, urinalysis, ABI"
                    ]
                }
            ]
        },
        {
            name: "Urinary System Examination",
            sections:[
                {
                    sectionName:"Introduction",
                    sectionItems:[
                        "Wash hands, introduction, obtain consent"
                    ]
                },
                {
                    sectionName:"Position/exposure",
                    sectionItems:[
                        "Expose only the minimum necessary at one time",
                        "Ask the patient to expose themselves where possible; Offer patient sheet or modesty blanket"
                    ]
                },
                {
                    sectionName:"Vital signs",
                    sectionItems:[
                        "Temp, PR, BP, RR",
                        "(O sats, Wt/Ht/BMI, BGL, WTU)"
                    ]
                },
                {
                    sectionName:"General Inspection",
                    sectionItems:[
                        "Mental state, complexion, fetor, hydration"
                    ]
                },
                {
                    sectionName:"Hands",
                    sectionItems:[
                        "Leukonychia, pallor, asterixis"
                    ]
                },
                {
                    sectionName:"Arms",
                    sectionItems:[
                        "Inspect for AV fistulae, bruising, pigmentation, excoriation",
                        "Test for sensation (peripheral neuropathy)",
                        "Pulse",
                        "Measure blood pressure"
                    ]
                },
                {
                    sectionName:"Face",
                    sectionItems:[
                        "Anaemia, jaundice, fetor, mouth ulcers, thrush, gingivitis"
                    ]
                },
                {
                    sectionName:"Neck",
                    sectionItems:[
                        "Measure JVP.",
                        "Auscultate for carotid bruits"
                    ]
                },
                {
                    sectionName:"Chest",
                    sectionItems:[
                        "Auscultate heart and lungs"
                    ]
                },
                {
                    sectionName:"Abdomen",
                    sectionItems:[
                        "Inspect for scars, distension, catheter",
                        "Palpate for masses, liver, kidney, bladder, aortic aneurysm",
                        "Percuss for shifting dullness, bladder",
                        "Auscultate for renal bruit",
                        "(Discuss rectal examination for prostatomegaly)"
                    ]
                },
                {
                    sectionName:"Back",
                    sectionItems:[
                        "Palpate for bony tenderness, renal tenderness, sacral oedema"
                    ]
                },
                {
                    sectionName:"Legs",
                    sectionItems:[
                        "Inspect for oedema, purpura, pigmentation, excoriation, gouty tophi",
                        "Palpate for oedema, peripheral pulses",
                        "Check sensation (peripheral neuropathy)",
                    ]
                },
                {
                    sectionName:"Additional tests to discuss",
                    sectionItems:[
                        "Consider fundoscopy, temperature chart, urine analysis"
                    ]
                },
            ]
        },
        {
            name:"Haematological Examination",
            sections:[
                {
                    sectionName:"Introduction",
                    sectionItems:[
                        "Wash hands, introduction, obtain consent"
                    ]
                },
                {
                    sectionName:"Position/exposure",
                    sectionItems:[
                        "Expose only the minimum necessary at one time. Offer patient sheet or modesty blanket"
                    ]
                },
                {
                    sectionName:"General inspection",
                    sectionItems:[
                        "Look for pallor, bruising, jaundice, scratch marks, rashes."
                    ]
                },
                {
                    sectionName:"Hands",
                    sectionItems:[
                        "Inspect for koilonychia, pallor of nail beds/palmar creases, joint/connective tissue disease.",
                        "Palpate for radial pulse."
                    ]
                },
                {
                    sectionName:"Palpate lymph nodes",
                    sectionItems:
                    [
                        {
                            subsection:"Assess lymph nodes for site, size, consistency, tenderness, fixation, overlying skin changes:",
                            subsectionItems:[
                                "Epitrochlear (elbow)",
                                "Axillary",
                                "Cervical/Occipital",
                                "Supraclavicular",
                                "(Inguinal – with abdominal examination)",
                                "(Popliteal – with leg examination)."
                            ]
                        }
                    ]
                },
                {
                    sectionName:"Face",
                    sectionItems:[
                        "Eyes: jaundice, haemorrhage, conjunctival pallor",
                        "Mouth: mucosa, tongue, gums, tonsils"
                    ]
                },
                {
                    sectionName:"Chest",
                    sectionItems:
                    [
                        {
                            subsection:"Check for bony tenderness:",
                            subsectionItems:[
                                "Tap fist over spine",
                                "Press sternum and clavicles with heel of hand",
                                "Push shoulders together"
                            ]
                        }
                    ]
                },
                {
                    sectionName:"Abdominal examination",
                    sectionItems:[
                        "masses",
                        "organomegaly",
                        "inguinal lymphadenopathy",
                    ]
                },
                {
                    sectionName:"Lower limbs",
                    sectionItems:[
                        "Inspect for bruising, pigmentation, scratch marks, ulceration",
                        "Palpate regional nodes",
                        "Test for peripheral neuropathy"
                    ]
                },
                {
                    sectionName:"Discuss further examination",
                    sectionItems:[
                        "Consider fundoscopy DRE and VE"
                    ]
                }
                


            ]
        }
        ];
        data.forEach(function (item, index, array) {
              OSCE.insert(item);
          });
    }

});

Meteor.publish('OSCE', function(){
	return OSCE.find();
});


