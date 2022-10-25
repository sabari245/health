import { useEffect, useState } from "react"

function Section(props) {
    return (
        <section>
            <h1 id={props.id} className="text-2xl text-black font-bold my-3">{props.title}</h1>
            <p>{props.children}</p>
        </section>
    )
}

function OralCancerContent() {
    const [isBlurred, setIsBlurred] = useState(true);
    return (
        // { content }
        <div className="p-10">
            <Section id="information-database" title="Information database">
                <p>{"   "}This part comprises of all information related to oral cancer which can be useful for the medical professional and also to the common people.</p>
                <p className="font-semibold">DISCLAIMER: There are certain images used in the website for concept explanation that are explicit. Users discretion is needed.</p>
                <ol>
                    <li>1. Introduction</li>
                    <span>The lining of the lips, mouth, or upper throat can develop cancer, which is known as oral cancer or mouth cancer. In the mouth, it typically begins as a painless white area that thickens, turns red in spots, develops into an ulcer.  It generally manifests on the lips as a slow-growing, persistent ulcer that doesn't heal. Other signs and symptoms could be difficulty in swallowing, new lumps or bumps in the neck, a mouth swelling, or numbness in the lips or mouth.</span>
                    <li>2. Statistics</li>
                    <span>Two-thirds of the 369,200 new cases of oral cancer that were detected in 2012 were in underdeveloped nations. Every year, these tumours cause about 145,328 deaths in the world. South and Southeast Asia, as well as various nations in southern Europe, have been reported to have the highest incidence of these tumours. Depending on where OSCC is diagnosed, the prevalence and clinical pattern can vary substantially. The health of the countries going through economic transformation is seriously threatened by oral cancer. One fourth of all cases worldwide, roughly 77,000 new cases and 52,000 deaths are reported each year in India. Since oral cancer is one of the more prevalent types of cancer in India, it is the most significant issue for community health. The following graph depicts the cases of oral cancer gender wise for various age groups as of the year 2004.</span>
                    <li>3. CAUSES OF ORAL CANCER</li>
                    <span>
                        <ol>
                            <li>1. The leading cause for oral cancer is the consumption of tobacco and alcohol. Tobacco and alcohol are carcinogenic, which means that they can damage the DNA in the cells which leads to cancer.</li>
                            <li>2. Chewing betelnut: The seeds of the betel palm tree, or "betel," are somewhat addictive. Similar to coffee, betel nuts are a stimulant. Additionally, they have a carcinogenic effect, which raises the possibility of oral cancer.</li>
                            <li>3. An unhealthy diet: There are studies that show how unhealthy diet could influence the risk of oral cancer</li>
                            <li>4. Human papilloma virus: The human papilloma virus (HPV) is a family of viruses that affects the skin and the body's mucous membranes, including those in the mouth, throat, cervix, and anus. This virus spreads through sexual contact and this virus can trigger abnormal cell growth, leading to cancer</li>
                        </ol>
                    </span>
                    <li>4. SYMPTOMS OF ORAL CANCER</li>
                    <span>
                        The signs and symptoms are basically dependent on the location of the tumor. They manifest themselves as thin, irregular white/red patches on the mouth. The symptoms of the disease is as follows:
                        <ul>
                            <li>Lumps inside the mouth</li>
                            <li>White/red patches in the mouth with ulceration</li>
                            <li>Mouth and ear pain</li>
                            <li>Numbness in the lip or chin</li>
                            <li>Loosening of teeth</li>
                            <li>Difficulty in swallowing</li>
                        </ul>
                        The signs and symptoms are basically dependent on the location of the tumor. They manifest themselves as thin, irregular white/red patches on the mouth. The symptoms of the disease is as follows:

                        • Lumps inside the mouth: A lump is a swelling or growth that occurs anywhere in the body. Harmless lumps which could be caused due to infections might go away within one or two weeks. On the other hand, cancerous lesions might be persistent and last for some longer period of time.

                        • White/red patches in the mouth with ulceration: A patch is a particular area in the mouth where there is a change of skin colour that is 1cm wide. On the case of oral cancer, these patches appear to be red or white in colour and they are usually flat

                        • Mouth and ear pain: While there is no pain caused by the lumps or patches, there is pain caused by the difficulty in swallowing of food and speaking

                        • Numbness in the lip or chin: This is observed due to the sensory disturbance caused by the presence of lesion. [1]

                        • Loosening of teeth: Loosening of tooth can be observed in a lot of cancers such as, esophageal cancer, gastric cancer, head and neck cancer, colorectal cancer, pancreas cancer, lung cancer, prostate cancer, bladder cancer and hematopoietic cancer.
                    </span>
                    <li>5. Features for oral cancer</li>
                    <span>One of the main difficulties faced during the pre-diagnosis of oral cancer is distinguishing between oral cancer and other conditions like ulcers, canker sores, infection, etc. Canker sores are small and shallow lesions that develop in the soft tissues of the mouth that usually go away within one to two weeks. Even though they aren't contagious, they might make eating and talking difficult.</span>
                    <span>Distinguishing features aiding in the prediagnosis of oral cancer are listed below
                        1. Sores and other infections usually go within two weeks while cancer persists for a longer time

                        2. Sores and other infections are painful while oral cancer is not

                        3. Sores and other infections are white and have a yellow center while oral cancer lesions are white and red

                        4. Sores and other infections are flat while oral cancer lesions can be raised

                        5. Sores and other infections cause temporary pain while eating while oral cancer makes it hard to swallow, speak, chew, etc.
                    </span>
                    <li>6. DIAGNOSIS OF ORAL CANCER</li>
                    <span>
                        Initial diagnosis is done by assessing the physical symptoms of the same. A wedge of tissue from the suspicious lesion is first cut for tissue diagnosis after a thorough history and clinical examination have been performed. Scalpel biopsy, punch biopsy, fine needle biopsy, or core needle biopsy may be used for this. In this operation, the surgeon removes all or a portion of the tissue so that a pathologist can study it under a microscope. [5]

                        After the initial diagnosis, i.e, confirmation of the presence of cancerous cells, the following would be done
                        • Assessment of the size of the lesion
                        • Look for other cancers to know whether the cancer has spread to the other parts of the body

                        Diagnosis of oral cancer using imaging techniques

                        The most popular and accurate imaging methods for staging head and neck malignancies are computed tomography (CT) and magnetic resonance imaging (MRI). According to the TNM cancer staging method, which provides details on the size of the lesion and major vascular infiltration, this is done. [6] When it comes to examining the soft tissues, bone marrow involvement, and neurovascular infiltration, magnetic resonance imaging provides more information.  It is particularly helpful in the diagnosis of tiny lesions. [7] Despite the fact that CT and MRI have been the most often utilised procedures for a long time, more recent innovations like positron emission tomography (PET) can aid to more accurately stage the tumour.
                    </span>
                    <li>7. Biopsy for oral cancer</li>
                    <span>
                        The main confirmatory test for oral cancer is the histopathological assessment of the abnormality using biopsy. Biopsy is a procedure which involves removing a piece of tissue from the human body which is tested in the laboratory when the person experiences certain concerning signs and symptoms. Histopatology is the study of the signs of a disease by microscopic examination of the specimen obtained from biopsy.



                        This oral cancer arises from the surface epithelium. The histopathological features are given below.

                        1. Epithelial extensions that project onto the connectivetissues

                        2. Disturbed polarity of the basal cells

                        3. Basal cell hyperplasia/enlargement

                        4. Irregular epithelial stratification

                        5. Cellular pleomorpism (Irregularity in the shape and size of the cells)

                        6. Nuclear hyperchromatism (Increase in the number of chromosomes)

                        7. Prominent nuclei

                        8. Raise in the nuclear to cytoplasmic ratio

                        9. Increased and abnormal mitosis

                        10. Cellular adhesion and cohesion loss
                    </span>
                </ol>
            </Section>
            <Section id="diagnostic-toolkit" title="Diagnostic toolkit">
                <ol>
                    <li>1. PRE-DIAGNOSIS OF ORAL CANCER</li>
                    <p className="indent-6">('0 refers to NO and 1 refers to YES')</p>
                    <p className="indent-6">q1= ('Does the sore and infection in mouth stay for a long time (in weeks)?',(0,1))</p>
                    <p className="indent-6">q2= ('Does the sore or infection in mouth pain a lot and frequently?',(0,1))</p>
                    <p className="indent-6">q3= ('Is the sore or infection red or white color',(0,1))</p>
                    <p className="indent-6">q4= ('Does the sore or infection appear to be raised and plump?',(0,1))</p>
                    <p className="indent-6">q5= ('Is it difficult to eat, chew, swallow and speak (pick yes if all are present)',(0,1))</p>

                    <p className="indent-6 mt-4">a=q1+q2+q3+q4+q5</p>
                    <p className="indent-6">acc=(a/5)*100</p>
                    <p className="indent-6">if acc{">"}=60:</p>
                    <p className="indent-12">'It seems that the subject might be suspected to have oral cancer. It is better to carry on with further diagnosis after appropriate consultation with oncologist.</p>
                    <p className="indent-6">else:</p>
                    <p className="indent-12">'The subject appears to be devoid of oral cancer. However, it would be better to consult with a doctor to confirm upon the results.</p>


                    <li>2. HRNQ Questionnaire for Oral Cancer</li>
                    <span>The HNRQ Questionnaire is a questionnaire that consists of questions from different domains such as oral cavity (mouth), throat, skin, digestive function, energy, and psychosocial. Refer the below table to know about the scoring method of this test. Navigate through individual questions through the dropdown menu given below. The following are the scoring pattern:-</span>
                    <p> 'A Great Deal of the time':[0], 'A Lot of the time':[1], 'A Fair Bit of the time':[2], 'Somewhat of the time': [3], 'A Little of the time': [4], 'Hardly Any of the time': [5]</p>

                    <p className="indent-6">Q1- 'Have you had any pain or soreness in your mouth in the past week?'</p>
                    <p className="indent-6">Q2- 'Have you felt low in energy, in the past week?'</p>
                    <p className="indent-6">Q3- Have you had any difficulty swallowing in the past week?</p>
                    <p className="indent-6">Q4- In general, have you felt angry, depressed or down in the dumps in the past week?</p>
                    <p className="indent-6">Q5- Have you felt nauseated, in the past week?</p>
                    <p className="indent-6">Q6- Have you had any difficulty getting a good night sleep, in the past week?</p>
                    <p className="indent-6">Q7- Have you had any dryness of your mouth, in the past week?</p>
                    <p className="indent-6">Q8- Have you felt tired or fatigued, in the past week, such that you are prevented from doing social or recreational activities?</p>
                    <p className="indent-6">Q9- Have you had a sore or painful throat, in the past week?</p>
                    <p className="indent-6">Q10- Have you had any upset of stomach, in the past week?</p>
                    <p className="indent-6">Q11- Have you found your saliva to be very sticky, in the past week?</p>
                    <p className="indent-6">Q12- Have you had any fatigue or tiredness which interfered with your work or routine daily activities, in the past week?</p>
                    <p className="indent-6">Q13- Have you had difficulty tasting your food, in the past week</p>
                    <p className="indent-6">Q14- Have you had difficulty with your appetite, in the past week?</p>
                    <p className="indent-6">Q15- Have you had difficulty keeping down foods or liquids, in the past week?</p>
                    <p className="indent-6">Q16- Have you had any difficulty chewing your food, in the past week?</p>
                    <p className="indent-6">Q17- Have you had a hoarse voice, in the past week?</p>
                    <p className="indent-6">Q18- Have you had a persistent tingling/numb sensation in your mouth?</p>

                    <p className="indent-6 mt-4">If sum {"<"} 54:</p>
                    <p className="indent-12">Print(The subject under observation might not have oral cancer. Please ensure that you consult with a professional.)</p>
                    <p className="indent-6">Else:</p>
                    <p className="indent-12">Print(The subject under observation may have oral cancer. Please ensure that you consult with a professional before pursuing any kinds of treatment.)</p>


                    <li>3. Camera Images for diagnosis of oral cancer</li>
                    <span>This tool is to diagnose and predict for the presence of oral cancer based on camera images. The user is requested to take an image of the region (mouth/lip) that appears abnormal and suspicious.</span>

                    <li>4. Biopsy based tool for confirmation of oral cancer</li>
                    <span>This tool is to diagnose and predict for the presence of oral cancer based on biopsy images. The user is requested to upload the histopathological image obtained from laboratory after consultation with appropriate oncologist.</span>
                </ol>
            </Section>
            <Section id="therapeuti-recommendations" title="Therapeutic recommendations">
                <span>Treatment procedures are designed exclusively for a particular person depending on the features of the cancer. The general methods of treatment have been listed.</span>
                <ul>
                    <li className="font-bold my-2">Treatment through surgery:</li>
                    <span>The surgical removal of tumors have often played a dominant role in the treatment of  oral cancers. Due to the introduction of other treatment techniques like radiotherapy and chemotherapy. Nowadays surgery is done only for early staged oral cancers</span>

                    <li className="font-bold my-2">Treatment through chemotherapy:</li>
                    <span>It is a type of systemic therapy designed to stop the spread and metastasis of tumours by completely destroying rapidly proliferating cancerous cells. For head and neck or oral tumours, it is typically not a therapeutic treatment option by itself, but it can be used either in conjunction with surgery (induction) or in addition to it (chemoradiotherapy) after surgery.</span>

                    <li className="font-bold my-2">Treatment through radiotherapy:</li>
                    <span>Oral malignancies rarely receive radiotherapy as their exclusive form of treatment (usually only if the tumour site is inoperable or the patient chooses not to have surgery). For cases that are more severe or terminal, it can also be administered as a palliative treatment option. With the aim of killing rapidly dividing cancer cells by breaking their DNA structure at the expense of healthy cells, radiation treatment is most frequently employed in conjunction with surgery and/or chemotherapy.</span>
                </ul>
            </Section>
        </div>
    )
}

export { OralCancerContent }