const data = [
    {
        name: "Adrenal Gland (ADRENAL_GLAND)",
        type: "Adrenal Gland Cancer",
        color: "Purple",	
        code1: "C12666",
        code2: "C0001625",
        children: [
            {
                name: "Adrenocortical Adenoma (ACA)",
                type: "Adrenocortical Adenoma",
                color: "Purple",
                code: "C9003",
                umls:	"C0206667",
            },
            {
                name: "Adrenocortical Carcinoma (ACC)",
                type: "Adrenocortical Carcinoma",
                color: "Purple",
                code: "C9325",
                umls: "C0206686",
            },
            {
                name: "Pheochromocytoma (PHC)",
                type: "Pheochromocytoma",
                color: "Purple",
                code: "C3326",
                umls: "C0031511",
            }
        ]
    },
    {
        name: "Ampulla of Vater (AMPULLA_OF_VATER)",
        type: "Ampullary Carcinoma",
        color: "Purple",
        code: "C3908",
        umls: "C026686",
        children: [
          {
              name: "Ampullary Carcinoma (AMPCA)",
              type: "Ampullary Cancer", 
              color: "Purple",
              code: "C3908",
              umls: "C0262401",
              children: [
                {
                  name: "Intestinal Ampullary Carcinoma (IAMPCA)",
                  type: "Ampullary Cancer",
                  color: "Purple",
                  code: "C27415",
                  umls: "C1332247",
                },
                {
                  name: "Mixed Ampullary Carcinoma (MAMPCA)",
                  type: "Ampullary Cancer",
                  color: "Purple",
                  code: "",
                  umls: "",
                },
                {
                  name: "Pancreatobiliary Ampullary Carcinoma (PAMPCA)",
                  type: "Ampullary Cancer",
                  color: "Purple",
                  code: "",
                  umls: "",
                },
              ]
          }
      ]
    },
    {
        name: "Biliary Tract (BILIARY_TRACT)",
        type: "Biliary Tract Cancer",
        color: "Green",	
        code: "C12678",	
        umls: "C0005423",
        children: [
          {
              name: "Intracholecystic Papillary Neoplasm (ICPN)",
              type: "Hepatobiliary Cancer",
              color:"Green",
              code: "",
              umls: "",
              children: [
                { name: "Gallbladder Cancer (GBC)",
                  type: "Hepatobiliary Cancer",
                  color: "Green",
                  code: "C3844",
                  umls: "C0235782",
                  children: [
                    { name: "Adenosquamous Carcinoma of the Gallbladder (GBASC)",
                      type: "Hepatobiliary Cancer",
                      color: "Green",
                      code: "",
                      umls: "",
                    },
                    { name: "Gallbladder Adenocarcinoma, NOS (GBAD)",
                      type: "Hepatobiliary Cancer",
                      color: "Green",
                      code: "",
                      umls: "",
                     },
                     { name: "Small Cell Gallbladder Carcinoma (SCGBC)",
                       type: "Hepatobiliary Cancer",
                       color: "Green",
                       code: "",
                       umls: "",
                     }
                  ]
                },  
              ] 
          },
          {
            name: "Intraductal Papillary Neoplasm of the Bile Duct (IPN)",
            type: "Hepatobiliary Cancer",
            color: "Green",
            code: "",
            umls: "",
            children: [
              {
                name: "Cholangiocarcinoma (CHOL)",
                type: "Hepatobiliary Cancer",
                color: "Green",
                code: "C4436",
                umls: "C0206698",
                children: [
                  {
                    name: "Extrahepatic Cholangiocarcinoma (EHCH)",
                    type: "Hepatobiliary Cancer	Green",
                    color: "Green",
                  },
                  {
                    name: "Intrahepatic Cholangiocarcinoma (IHCH)",
                    type: "Hepatobiliary Cancer",
                    color: "Green",
                    code: "C35417",
                    umls: "C0345905",
                  },
                  {
                    name: "Perihilar Cholangiocarcinoma (PHCH)",
                    type: "Hepatobiliary Cancer",
                    color: "Green",
                    code:	"C96804",	
                    umls: "C3273047",
                  }
                ]
              },
            ]
          }
        ]
    },
    {
      name: "Bladder/Urinary Tract (BLADDER)",
      type: "Bladder/Urinary Tract Cancer",
      color: "Yellow",
      code: "C12414",
      umls: "C0005682",
      children: [
          {
              name: "Bladder Adenocarcinoma (BLAD)",
              type: "Bladder Cancer",
              color: "Yellow",
              code: "C4032",
              umls: "C0279682",
          },
          {
              name: "Bladder Squamous Cell Carcinoma (BLSC)",
              type: "Bladder Cancer",
              color: "Yellow",
              code: "C4031",
              umls: "C0279681",
          },
          {
              name: "Bladder Urothelial Carcinoma (BLCA)",
              type: "Bladder Cancer",
              color: "Yellow",
              code: "C39851",
              umls: "C0279680",
          },
          {
              name: "Inflammatory Myofibroblastic Bladder Tumor (IMTB)",
              type: "Bladder Cancer",
              color: "Yellow",
              code: "C6177",
              umls: "C1336891",
          },
          {
              name: "Inverted Urothelial Papilloma (IUP)",
              type: "Bladder Cancer",
              color: "Yellow",
              code: "",
              umls: "",
          },
          {
              name: "Mucosal Melanoma of the Urethra (URMM)",
              type: "Melanoma",
              color: "Yellow",
              code: "",
              umls: "",
              history: "GMUCM",
          },
          {
              name: "Plasmacytoid/Signet Ring Cell Bladder Carcinoma (SRCBC)",
              type: "Bladder Cancer",
              color: "Yellow",
              code: "C39823",
              umls: "C1512742",
          },
          {
              name: "Sarcomatoid Carcinoma of the Urinary Bladder (SCB)",
              type: "Bladder Cancer",
              color: "Yellow",
              code: "C39824",
              umls: "C1512743",
          },
          {
              name: "Small Cell Bladder Cancer (SCBC)",
              type: "Bladder Cancer",
              color: "Yellow",
              code: "C9461",
              umls: "C1332564",
          },
          {
              name: "Upper Tract Urothelial Carcinoma (UTUC)",
              type: "Bladder Cancer",
              color: "Yellow",
              code: "C7716",
              umls: "C0220648",
          },
          {
              name: "Urachal Carcinoma (URCA)",
              type: "Bladder Cancer",
              color: "Yellow",
              code: "C39842",
              umls: "C1511205",
              children: [
                  {
                      name: "Urachal Adenocarcinoma (UA)",
                      type: "Bladder Cancer",
                      color: "Yellow",
                      code: "C39843",
                      umls: "C1511204",
                  }
              ]
          },
          {
              name: "Urethral Cancer (UCA)",
              type: "Bladder Cancer",
              color: "Yellow",
              code: "C9106",
              umls: "C0700101",
              children: [
                  {
                      name: "Urethral Adenocarcinoma (UAD)",
                      type: "Bladder Cancer",
                      color: "Yellow",
                      code: "C6167",
                      umls: "C1336885",
                  },
                  {
                      name: "Urethral Squamous Cell Carcinoma (USCC)",
                      type: "Bladder Cancer",
                      color: "Yellow",
                      code: "C6165",
                      umls: "C1336890",
                  },
                  {
                      name: "Urethral Urothelial Carcinoma (UCU)",
                      type: "Bladder Cancer",
                      color: "Yellow",
                      code: "",
                      umls: "CL448335",
                  }
              ]
          },
          {
              name: "Urothelial Papilloma (UPA)",
              type: "Bladder Cancer",
              color: "Yellow",
              code: "",
              umls: "",
          }
      ]
    },
    {
      name: "Bone (BONE)",
      type: "Bone Cancer",
      color: "White",
      code: "C12366",
      umls: "C0262950",
      children: [
          {
              name: "Adamantinoma (ADMA)",
              type: "Bone Cancer",
              color: "White",
              code: "",
              umls: "",
          },
          {
              name: "Chondroblastoma (CHBL)",
              type: "Bone Cancer",
              color: "White",
              code: "C2945",
              umls: "C0008441",
          },
          {
              name: "Chondrosarcoma (CHS)",
              type: "Bone Cancer",
              color: "White",
              code: "C2946",
              umls: "C0008479",
              children: [
                  {
                      name: "Dedifferentiated Chondrosarcoma (DDCHS)",
                      type: "Bone Cancer",
                      color: "White",
                      code: "C6476",
                      umls: "C0862878",
                  },
                  {
                      name: "Extraskeletal Myxoid Chondrosarcoma (EMCHS)",
                      type: "Bone Cancer",
                      color: "White",
                      code: "C27502",
                      umls: "C1275278",
                  },
                  {
                      name: "Mesenchymal Chondrosarcoma (MCHS)",
                      type: "Bone Cancer",
                      color: "White",
                      code: "C53493",
                      umls: "C1708980",
                  },
                  {
                      name: "Myxoid Chondrosarcoma (MYCHS)",
                      type: "Bone Cancer",
                      color: "White",
                      code: "C4303",
                      umls: "C0334551",
                  }
              ]
          },
          {
              name: "Chordoma (CHDM)",
              type: "Bone Cancer",
              color: "White",
              code: "C2947",
              umls: "C0008487",
              children: [
                  {
                      name: "Conventional Type Chordoma (CCHDM)",
                      type: "Bone Cancer",
                      color: "White",
                      code: "",
                      umls: "",
                  },
                  {
                      name: "Dedifferentiated Chordoma (DDCHDM)",
                      type: "Bone Cancer",
                      color: "White",
                      code: "C48876",
                      umls: "C1266174",
                  }
              ]
          },
          {
              name: "Ewing Sarcoma (ES)",
              type: "Bone Cancer",
              color: "White",
              code: "C4817",
              umls: "C0553580",
          },
          {
              name: "Giant Cell Tumor of Bone (GCTB)",
              type: "Bone Cancer",
              color: "White",
              code: "C121932",
              umls: "C0206638",
          },
          {
              name: "Osteosarcoma (OS)",
              type: "Bone Cancer",
              color: "White",
              code: "C9145",
              umls: "C0029463",
              children: [
                  {
                      name: "Chondroblastic Osteosarcoma (CHOS)",
                      type: "Bone Cancer",
                      color: "White",
                      code: "C4021",
                      umls: "C0279603",
                  },
                  {
                      name: "Fibroblastic Osteosarcoma (FIOS)",
                      type: "Bone Cancer",
                      color: "White",
                      code: "C4020",
                      umls: "C0279602",
                  },
                  {
                      name: "High-Grade Surface Osteosarcoma (HGSOS)",
                      type: "Bone Cancer",
                      color: "White",
                      code: "C53958",
                      umls: "C1266165",
                  },
                  {
                      name: "Low-Grade Central Osteosarcoma (LGCOS)",
                      type: "Bone Cancer",
                      color: "White",
                      code: "C6474",
                      umls: "C1266163",
                  },
                  {
                      name: "Osteoblastic Osteosarcoma (OSOS)",
                      type: "Bone Cancer",
                      color: "White",
                      code: "C53953",
                      umls: "C1704328",
                  },
                  {
                      name: "Parosteal Osteosarcoma (PAOS)",
                      type: "Bone Cancer",
                      color: "White",
                      code: "C8969",
                      umls: "C0206642",
                  },
                  {
                      name: "Periosteal Osteosarcoma (PEOS)",
                      type: "Bone Cancer",
                      color: "White",
                      code: "C8970",
                      umls: "C1377843",
                  },
                  {
                      name: "Secondary Osteosarcoma (SECOS)",
                      type: "Bone Cancer",
                      color: "White",
                      code: "C53704",
                      umls: "C1710042",
                  },
                  {
                      name: "Small Cell Osteosarcoma (SCOS)",
                      type: "Bone Cancer",
                      color: "White",
                      code: "C4023",
                      umls: "C0279622",
                  },
                  {
                      name: "Telangiectatic Osteosarcoma (TEOS)",
                      type: "Bone Cancer",
                      color: "White",
                      code: "C3902",
                      umls: "C0259782",
                  }
              ]
          }
      ]
    },
    {
      name: "Bowel (BOWEL)",
      type: "Bowel Cancer",
      color: "SaddleBrown",
      code: "C12736",
      umls: "C0021853",
      children: [
          {
              name: "Anal Gland Adenocarcinoma (AGA)",
              type: "Anal Cancer",
              color: "SaddleBrown",
              code: "C5609",
              umls: "C1266027",
          },
          {
              name: "Anal Squamous Cell Carcinoma (ANSC)",
              type: "Anal Cancer",
              color: "SaddleBrown",
              code: "C9161",
              umls: "C1412036",
          },
          {
              name: "Anorectal Mucosal Melanoma (ARMM)",
              type: "Melanoma",
              color: "SaddleBrown",
              code: "C4639",
              umls: "C0349538",
          },
          {
              name: "Appendiceal Adenocarcinoma (APAD)",
              type: "Appendiceal Cancer",
              color: "SaddleBrown",
              code: "C7718",
              umls: "C0238003",
              children: [
                  {
                      name: "Colonic Type Adenocarcinoma of the Appendix (CTAAP)",
                      type: "Appendiceal Cancer",
                      color: "SaddleBrown",
                      code: "",
                      umls: "",
                  },
                  {
                      name: "Goblet Cell Adenocarcinoma of the Appendix (GCCAP)",
                      type: "Appendiceal Cancer",
                      color: "SaddleBrown",
                      code: "",
                      umls: "C0205695",
                  },
                  {
                      name: "Mucinous Adenocarcinoma of the Appendix (MAAP)",
                      type: "Appendiceal Cancer",
                      color: "SaddleBrown",
                      code: "C43558",
                      umls: "C1706832",
                  },
                  {
                      name: "Signet Ring Cell Type of the Appendix (SRAP)",
                      type: "Appendiceal Cancer",
                      color: "SaddleBrown",
                      code: "C43554",
                      umls: "C1711320",
                  }
              ]
          },
          {
              name: "Colorectal Adenocarcinoma (COADREAD)",
              type: "Colorectal Cancer",
              color: "SaddleBrown",
              code: "C5105",
              umls: "C1319315",
              children: [
                  {
                      name: "Colon Adenocarcinoma (COAD)",
                      type: "Colorectal Cancer",
                      color: "SaddleBrown",
                      code: "C4349",
                      umls: "C0338106",
                  },
                  {
                      name: "Colon Adenocarcinoma In Situ (CAIS)",
                      type: "Colorectal Cancer",
                      color: "SaddleBrown",
                      code: "",
                      umls: "",
                  },
                  {
                      name: "Mucinous Adenocarcinoma of the Colon and Rectum (MACR)",
                      type: "Colorectal Cancer",
                      color: "SaddleBrown",
                      code: "C43585",
                      umls: "C1707439",
                  },
                  {
                      name: "Rectal Adenocarcinoma (READ)",
                      type: "Colorectal Cancer",
                      color: "SaddleBrown",
                      code: "C9383",
                      umls: "C0149978",
                  },
                  {
                      name: "Signet Ring Cell Adenocarcinoma of the Colon and Rectum (SRCCR)",
                      type: "Colorectal Cancer",
                      color: "SaddleBrown",
                      code: "C9168,C7967",
                      umls: "C0279654,C1707436",
                  }
              ]
          },
          {
              name: "Gastrointestinal Neuroendocrine Tumors (GINET)",
              type: "Gastrointestinal Neuroendocrine Tumor",
              color: "SaddleBrown",
              code: "C95404",
              umls: "C2987127",
              children: [
                  {
                      name: "High-Grade Neuroendocrine Carcinoma of the Colon and Rectum (HGNEC)",
                      type: "Gastrointestinal Neuroendocrine Tumor",
                      color: "SaddleBrown",
                      code: "C96156",
                      umls: "C3272607",
                  },
                  {
                      name: "Small Bowel Well-Differentiated Neuroendocrine Tumor (SBWDNET)",
                      type: "Gastrointestinal Neuroendocrine Tumor",
                      color: "SaddleBrown",
                      code: "C9461",
                      umls: "C1332564",
                  },
                  {
                      name: "Well-Differentiated Neuroendocrine Tumor of the Appendix (AWDNET)",
                      type: "Gastrointestinal Neuroendocrine Tumor",
                      color: "SaddleBrown",
                      code: "C96422",
                      umls: "C3272767",
                  },
                  {
                      name: "Well-Differentiated Neuroendocrine Tumor of the Rectum (RWDNET)",
                      type: "Gastrointestinal Neuroendocrine Tumor",
                      color: "SaddleBrown",
                      code: "C96159",
                      umls: "C3272610",
                  }
              ]
          },
          {
              name: "Low-grade Appendiceal Mucinous Neoplasm (LAMN)",
              type: "Appendiceal Cancer",
              color: "SaddleBrown",
              code: "",
              umls: "",
          },
          {
              name: "Medullary Carcinoma of the Colon (CMC)",
              type: "Colorectal Cancer",
              color: "SaddleBrown",
              code: "C60641",
              umls: "C1880119",
          },
          {
              name: "Small Bowel Cancer (SBC)",
              type: "Small Bowel Cancer",
              color: "SaddleBrown",
              code: "C7724",
              umls: "C0238196",
              children: [
                  {
                      name: "Duodenal Adenocarcinoma (DA)",
                      type: "Small Bowel Cancer",
                      color: "SaddleBrown",
                      code: "C7889",
                      umls: "C0278804",
                  }
              ]
          },
          {
              name: "Small Intestinal Carcinoma (SIC)",
              type: "Small Bowel Cancer",
              color: "SaddleBrown",
              code: "C7724",
              umls: "C0238196",
          },
          {
              name: "Tubular Adenoma of the Colon (TAC)",
              type: "Tubular Adenoma of the Colon",
              color: "SaddleBrown",
              code: "",
              umls: "",
          }
      ]
    },
    {
      name: "Breast (BREAST)",
      type: "Breast Cancer",
      color: "HotPink",
      code: "C12971",
      umls: "C0006141",
      children: [
          {
              name: "Adenomyoepithelioma of the Breast (BRAME)",
              type: "Breast Cancer",
              color: "HotPink",
              code: "C6899",
              umls: "C1510795",
          },
          {
              name: "Breast Ductal Carcinoma In Situ (DCIS)",
              type: "Breast Cancer",
              color: "HotPink",
              code: "C2924",
              umls: "C0007124",
              children: [
                  {
                      name: "Paget Disease of the Nipple (PD)",
                      type: "Breast Cancer",
                      color: "HotPink",
                      code: "C3301",
                      umls: "C1704323",
                  }
              ]
          },
          {
              name: "Breast Fibroepithelial Neoplasms (BFN)",
              type: "Breast Sarcoma",
              color: "HotPink",
              code: "C40405",
              umls: "C1511309",
              children: [
                  {
                      name: "Fibroadenoma (FA)",
                      type: "Breast Sarcoma",
                      color: "HotPink",
                      code: "C3744",
                      umls: "C0206650",
                  },
                  {
                      name: "Phyllodes Tumor of the Breast (PT)",
                      type: "Breast Sarcoma",
                      color: "HotPink",
                      code: "C7575",
                      umls: "C0238031",
                      children: [
                          {
                              name: "Benign Phyllodes Tumor of the Breast (BPT)",
                              type: "Breast Sarcoma",
                              color: "HotPink",
                              code: "C5196",
                              umls: "C1332533",
                          },
                          {
                              name: "Borderline Phyllodes Tumor of the Breast (BLPT)",
                              type: "Breast Sarcoma",
                              color: "HotPink",
                              code: "C5316",
                              umls: "C1332592",
                          },
                          {
                              name: "Malignant Phyllodes Tumor of the Breast (MPT)",
                              type: "Breast Sarcoma",
                              color: "HotPink",
                              code: "C4504",
                              umls: "C0346154",
                          }
                      ]
                  }
              ]
          },
          {
              name: "Breast Lobular Carcinoma In Situ (LCIS)",
              type: "Breast Cancer",
              color: "HotPink",
              code: "C4018",
              umls: "C0279563",
          },
          {
              name: "Breast Neoplasm, NOS (BNNOS)",
              type: "Breast Cancer",
              color: "HotPink",
              code: "",
              umls: "",
          },
          {
              name: "Breast Sarcoma (PBS)",
              type: "Breast Sarcoma",
              color: "HotPink",
              code: "C4670",
              umls: "C0349667",
              children: [
                  {
                      name: "Breast Angiosarcoma (BA)",
                      type: "Breast Sarcoma",
                      color: "HotPink",
                      code: "C5184",
                      umls: "C1332614",
                  }
              ]
          },
          {
              name: "Inflammatory Breast Cancer (IBC)",
              type: "Breast Cancer",
              color: "HotPink",
              code: "C4001",
              umls: "C0278601",
          },
          {
              name: "Invasive Breast Carcinoma (BRCA)",
              type: "Breast Cancer",
              color: "HotPink",
              code: "C9245",
              umls: "C0853879",
              children: [
                  {
                      name: "Adenoid Cystic Breast Cancer (ACBC)",
                      type: "Breast Cancer",
                      color: "HotPink",
                      code: "C5130",
                      umls: "C1332167",
                  },
                  {
                      name: "Breast Carcinoma with Signet Ring (BRSRCC)",
                      type: "Breast Cancer",
                      color: "HotPink",
                      code: "C5175",
                      umls: "C1335964",
                  },
                  {
                      name: "Breast Invasive Cancer, NOS (BRCANOS)",
                      type: "Breast Cancer",
                      color: "HotPink",
                      code: "",
                      umls: "",
                  },
                  {
                      name: "Breast Invasive Carcinoma, NOS (BRCNOS)",
                      type: "Breast Cancer",
                      color: "HotPink",
                      code: "",
                      umls: "",
                  },
                  {
                      name: "Breast Invasive Carcinosarcoma, NOS (CSNOS)",
                      type: "Breast Cancer",
                      color: "HotPink",
                      code: "",
                      umls: "",
                  },
                  {
                      name: "Breast Invasive Ductal Carcinoma (IDC)",
                      type: "Breast Cancer",
                      color: "HotPink",
                      code: "C4194",
                      umls: "C1134719",
                  },
                  {
                      name: "Breast Invasive Lobular Carcinoma (ILC)",
                      type: "Breast Cancer",
                      color: "HotPink",
                      code: "C7950",
                      umls: "C0279565",
                  },
                  {
                      name: "Breast Invasive Mixed Mucinous Carcinoma (IMMC)",
                      type: "Breast Cancer",
                      color: "HotPink",
                      code: "C9131",
                      umls: "C1334807",
                  },
                  {
                      name: "Breast Mixed Ductal and Lobular Carcinoma (MDLC)",
                      type: "Breast Cancer",
                      color: "HotPink",
                      code: "C5160",
                      umls: "CL007210",
                  },
                  {
                      name: "Solid Papillary Carcinoma of the Breast (SPC)",
                      type: "Breast Cancer",
                      color: "HotPink",
                      code: "C6870",
                      umls: "C1336027",
                  }
              ]
          },
          {
              name: "Juvenile Secretory Carcinoma of the Breast (JSCB)",
              type: "Breast Cancer",
              color: "HotPink",
              code: "",
              umls: "",
          },
          {
              name: "Metaplastic Breast Cancer (MBC)",
              type: "Breast Cancer",
              color: "HotPink",
              code: "C5164",
              umls: "C1334708",
              children: [
                  {
                      name: "Epithelial Type Metaplastic Breast Cancer (EMBC)",
                      type: "Breast Cancer",
                      color: "HotPink",
                      code: "",
                      umls: "",
                      children: [
                          {
                              name: "Metaplastic Adenocarcinoma with Spindle Cell Differentiation (MASCC)",
                              type: "Breast Cancer",
                              color: "HotPink",
                              code: "C40358",
                              umls: "C1519487",
                          },
                          {
                              name: "Metaplastic Adenosquamous Carcinoma (MASC)",
                              type: "Breast Cancer",
                              color: "HotPink",
                              code: "C40361",
                              umls: "C1510796",
                          },
                          {
                              name: "Metaplastic Squamous Cell Carcinoma (MSCC)",
                              type: "Breast Cancer",
                              color: "HotPink",
                              code: "C5177",
                              umls: "C1336079",
                          }
                      ]
                  },
                  {
                      name: "Mixed Type Metaplastic Breast Cancer (MMBC)",
                      type: "Breast Cancer",
                      color: "HotPink",
                      code: "C40364",
                      umls: "C1513365",
                      children: [
                          {
                              name: "Carcinoma with Chondroid Metaplasia (CCHM)",
                              type: "Breast Cancer",
                              color: "HotPink",
                              code: "C47847",
                              umls: "C1707042",
                          },
                          {
                              name: "Carcinoma with Osseous Metaplasia (COM)",
                              type: "Breast Cancer",
                              color: "HotPink",
                              code: "C47848",
                              umls: "C1711312",
                          },
                          {
                              name: "Metaplastic Carcinosarcoma (MCS)",
                              type: "Breast Cancer",
                              color: "HotPink",
                              code: "",
                              umls: "",
                          }
                      ]
                  }
              ]
          }
      ]
    },
    {
      name: "CNS/Brain (BRAIN)",
      type: "CNS/Brain Cancer",
      color: "Gray",
      code: "C12438",
      umls: "C3714787",
      children: [
          {
              name: "Choroid Plexus Tumor (CPT)",
              type: "Choroid Plexus Tumor",
              color: "Gray",
              code: "C3473",
              umls: "C0085138",
              children: [
                  {
                      name: "Atypical Choroid Plexus Papilloma (ACPP)",
                      type: "Choroid Plexus Tumor",
                      color: "Gray",
                      code: "C53686",
                      umls: "C1266176",
                  },
                  {
                      name: "Choroid Plexus Carcinoma (CPC)",
                      type: "Choroid Plexus Tumor",
                      color: "Gray",
                      code: "C4715",
                      umls: "C0431109",
                  },
                  {
                      name: "Choroid Plexus Papilloma (CPP)",
                      type: "Choroid Plexus Tumor",
                      color: "Gray",
                      code: "C3698",
                      umls: "C0205770",
                  }
              ]
          },
          {
              name: "Diffuse Glioma (DIFG)",
              type: "Glioma",
              color: "Gray",
              code: "",
              umls: "",
              children: [
                  {
                      name: "Anaplastic Astrocytoma (AASTR)",
                      type: "Glioma",
                      color: "Gray",
                      code: "C9477",
                      umls: "C0334579",
                  },
                  {
                      name: "Anaplastic Oligoastrocytoma (AOAST)",
                      type: "Glioma",
                      color: "Gray",
                      code: "C6959",
                      umls: "C0431108",
                  },
                  {
                      name: "Anaplastic Oligodendroglioma (AODG)",
                      type: "Glioma",
                      color: "Gray",
                      code: "C4326",
                      umls: "C0334590",
                  },
                  {
                      name: "Astrocytoma (ASTR)",
                      type: "Glioma",
                      color: "Gray",
                      code: "C60781",
                      umls: "C0004114",
                  },
                  {
                      name: "Diffuse Astrocytoma (DASTR)",
                      type: "Glioma",
                      color: "Gray",
                      code: "C7173",
                      umls: "C0280785",
                  },
                  {
                      name: "Diffuse Intrinsic Pontine Glioma (DIPG)",
                      type: "Glioma",
                      color: "Gray",
                      code: "C94764",
                      umls: "C2986658",
                  },
                  {
                      name: "Glioblastoma (GB)",
                      type: "Glioma",
                      color: "Gray",
                      code: "C3058",
                      umls: "C0017636",
                      children: [
                          {
                              name: "Glioblastoma Multiforme (GBM)",
                              type: "Glioma",
                              color: "Gray",
                              code: "",
                              umls: "",
                          },
                          {
                              name: "Gliosarcoma (GSARC)",
                              type: "Glioma",
                              color: "Gray",
                              code: "C3796",
                              umls: "C0206726",
                          },
                          {
                              name: "Small Cell Glioblastoma (SCGBM)",
                              type: "Glioma",
                              color: "Gray",
                              code: "C125890",
                              umls: "C1272516",
                          }
                      ]
                  },
                  {
                      name: "Glioma, NOS (GNOS)",
                      type: "Glioma",
                      color: "Gray",
                      code: "",
                      umls: "",
                  },
                  {
                      name: "High-Grade Glioma, NOS (HGGNOS)",
                      type: "Glioma",
                      color: "Gray",
                      code: "",
                      umls: "",
                  },
                  {
                      name: "Oligoastrocytoma (OAST)",
                      type: "Glioma",
                      color: "Gray",
                      code: "C4050",
                      umls: "C0280793",
                  },
                  {
                      name: "Oligodendroglioma (ODG)",
                      type: "Glioma",
                      color: "Gray",
                      code: "C3288",
                      umls: "C0751396",
                  }
              ]
          },
          {
              name: "Embryonal Tumor (EMBT)",
              type: "Embryonal Tumor",
              color: "Gray",
              code: "C3264",
              umls: "C0027654",
              children: [
                  {
                      name: "Atypical Teratoid/Rhabdoid Tumor (ATRT)",
                      type: "Embryonal Tumor",
                      color: "Gray",
                      code: "C6906",
                      umls: "C1266184",
                  },
                  {
                      name: "Desmoplastic/Nodular Medulloblastoma (DMBL)",
                      type: "Embryonal Tumor",
                      color: "Gray",
                      code: "C4956",
                      umls: "C0751291",
                      children: [
                          {
                              name: "Desmoplastic/Nodular Medulloblastoma, NOS (DMBLNOS)",
                              type: "Desmoplastic/Nodular Medulloblastoma",
                              color: "Gray",
                              code: "",
                              umls: "",
                          },
                          {
                              name: "Desmoplastic/Nodular Medulloblastoma, SHH Subtype (DMBLSHH)",
                              type: "Desmoplastic/Nodular Medulloblastoma",
                              color: "Gray",
                              code: "",
                              umls: "",
                          }
                      ]
                  },
                  {
                      name: "Embryonal Tumor with Abundant Neuropil and True Rosettes (ETANTR)",
                      type: "Embryonal Tumor",
                      color: "Gray",
                      code: "C4915",
                      umls: "C0700367",
                  },
                  {
                      name: "Large Cell/Anaplastic Medulloblastoma (AMBL)",
                      type: "Embryonal Tumor",
                      color: "Gray",
                      code: "C6904",
                      umls: "C1266180",
                      children: [
                          {
                              name: "Anaplastic Medulloblastoma, NOS (AMBLNOS)",
                              type: "Large Cell/Anaplastic Medulloblastoma",
                              color: "Gray",
                              code: "",
                              umls: "",
                          },
                          {
                              name: "Anaplastic Medulloblastoma, Non-WNT, Non-SHH (AMBLNWS)",
                              type: "Large Cell/Anaplastic Medulloblastoma",
                              color: "Gray",
                              code: "",
                              umls: "",
                              children: [
                                  {
                                      name: "Anaplastic Medulloblastoma, Group 3 (AMBLNWSG3)",
                                      type: "Large Cell/Anaplastic Medulloblastoma",
                                      color: "Gray",
                                      code: "",
                                      umls: "",
                                  },
                                  {
                                      name: "Anaplastic Medulloblastoma, Group 4 (AMBLNWSG4)",
                                      type: "Large Cell/Anaplastic Medulloblastoma",
                                      color: "Gray",
                                      code: "",
                                      umls: "",
                                  }
                              ]
                          },
                          {
                              name: "Anaplastic Medulloblastoma, SHH Subtype (AMBLSHH)",
                              type: "Large Cell/Anaplastic Medulloblastoma",
                              color: "Gray",
                              code: "",
                              umls: "",
                          }
                      ]
                  },
                  {
                      name: "Medulloblastoma (MBL)",
                      type: "Embryonal Tumor",
                      color: "Gray",
                      code: "C3222",
                      umls: "C0025149",
                      children: [
                          {
                              name: "Medulloblastoma, NOS (MBLNOS)",
                              type: "Medulloblastoma",
                              color: "Gray",
                              code: "",
                              umls: "",
                          },
                          {
                              name: "Medulloblastoma, Non-WNT, Non-SHH (MBLNWS)",
                              type: "Medulloblastoma",
                              color: "Gray",
                              code: "",
                              umls: "",
                              children: [
                                  {
                                      name: "Medulloblastoma, Group 3 (MBLG3)",
                                      type: "Medulloblastoma",
                                      color: "Gray",
                                      code: "",
                                      umls: "",
                                  },
                                  {
                                      name: "Medulloblastoma, Group 4 (MBLG4)",
                                      type: "Medulloblastoma",
                                      color: "Gray",
                                      code: "",
                                      umls: "",
                                  }
                              ]
                          },
                          {
                              name: "Medulloblastoma, SHH Subtype (MBLSHH)",
                              type: "Medulloblastoma",
                              color: "Gray",
                              code: "",
                              umls: "",
                          },
                          {
                              name: "Medulloblastoma, WNT Subtype (MBLWNT)",
                              type: "Medulloblastoma",
                              color: "Gray",
                              code: "",
                              umls: "",
                          }
                      ]
                  },
                  {
                      name: "Medulloblastoma with Extensive Nodularity (MBEN)",
                      type: "Embryonal Tumor",
                      color: "Gray",
                      code: "C5407",
                      umls: "C1334970",
                      children: [
                          {
                              name: "Medulloblastoma with Extensive Nodularity, NOS (MBENNOS)",
                              type: "Medulloblastoma with Extensive Nodularity",
                              color: "Gray",
                              code: "",
                              umls: "",
                          },
                          {
                              name: "Medulloblastoma with Extensive Nodularity, SHH Subtype (MBENSHH)",
                              type: "Medulloblastoma with Extensive Nodularity",
                              color: "Gray",
                              code: "",
                              umls: "",
                          }
                      ]
                  },
                  {
                      name: "Medulloepithelioma (MDEP)",
                      type: "Embryonal Tumor",
                      color: "Gray",
                      code: "C4327",
                      umls: "C0334596",
                  },
                  {
                      name: "Medullomyoblastoma (MMB)",
                      type: "Embryonal Tumor",
                      color: "Gray",
                      code: "C3706",
                      umls: "C0205833",
                  },
                  {
                      name: "Melanotic Medulloblastoma (MMBL)",
                      type: "Embryonal Tumor",
                      color: "Gray",
                      code: "C9497",
                      umls: "C1275668",
                  },
                  {
                      name: "Olfactory Neuroblastoma (ONBL)",
                      type: "Embryonal Tumor",
                      color: "Gray",
                      code: "C3789",
                      umls: "C0206717",
                  },
                  {
                      name: "Primitive Neuroectodermal Tumor (PNET)",
                      type: "Embryonal Tumor",
                      color: "Gray",
                      code: "C3716",
                      umls: "C0206663",
                  }
              ]
          },
          {    
                name: "Encapsulated Glioma (ENCG)",
                type: "Glioma",
                color: "Gray",
                code: "",
                umls: "",
                children: [
                    {
                        name: "Anaplastic Ganglioglioma (AGNG)",
                        type: "Glioma",
                        color: "Gray",
                        code: "C4717",
                        umls: "C0431112",
                    },
                    {
                        name: "Anaplastic Pleomorphic Xanthoastrocytoma (APXA)",
                        type: "Glioma",
                        color: "Gray",
                        code: "",
                        umls: "",
                    },
                    {
                        name: "Dysembryoplastic Neuroepithelial Tumor (DNT)",
                        type: "Glioma",
                        color: "Gray",
                        code: "C9505",
                        umls: "C1266177",
                    },
                    {
                        name: "Gangliocytoma (GNC)",
                        type: "Glioma",
                        color: "Gray",
                        code: "C6934",
                        umls: "CL378224",
                    },
                    {
                        name: "Ganglioglioma (GNG)",
                        type: "Glioma",
                        color: "Gray",
                        code: "C3788",
                        umls: "C0206716",
                    },
                    {
                        name: "Low-Grade Glioma, NOS (LGGNOS)",
                        type: "Glioma",
                        color: "Gray",
                        code: "",
                        umls: "",
                    },
                    {
                        name: "Pilocytic Astrocytoma (PAST)",
                        type: "Glioma",
                        color: "Gray",
                        code: "C4047",
                        umls: "C0334583",
                    },
                    {
                        name: "Pilomyxoid Astrocytoma (PMA)",
                        type: "Glioma",
                        color: "Gray",
                        code: "C40315",
                        umls: "C1519086",
                    },
                    {
                        name: "Pleomorphic Xanthoastrocytoma (PXA)",
                        type: "Glioma",
                        color: "Gray",
                        code: "C4323",
                        umls: "C0334586",
                    }
                ]
          },
          {    
              name: "Ependymomal Tumor (EPMT)",
              type: "CNS Cancer",
              color: "Gray",
              code: "C6770",
              umls: "C1333407",
              children: [
                  {
                      name: "Anaplastic Ependymoma (APE)",
                      type: "CNS Cancer",
                      color: "Gray",
                      code: "C4049",
                      umls: "C0280788",
                  },
                  {
                      name: "Clear Cell Ependymoma (CCE)",
                      type: "CNS Cancer",
                      color: "Gray",
                      code: "C4714",
                      umls: "C1384404",
                  },
                  {
                      name: "Ependymoma (EPM)",
                      type: "Glioma",
                      color: "Gray",
                      code: "C3017",
                      umls: "C0014474",
                  },
                  {
                      name: "Myxopapillary Ependymoma (MPE)",
                      type: "CNS Cancer",
                      color: "Gray",
                      code: "C3697",
                      umls: "C0205769",
                  },
                  {
                      name: "Subependymoma (SUBE)",
                      type: "CNS Cancer",
                      color: "Gray",
                      code: "C3795",
                      umls: "C0206725",
                  }
              ]
          },
          {
             name: "Germ Cell Tumor, Brain (BGCT)",
             type: "Germ Cell Tumor",
             color: "Gray",
             code: "",
             umls: "",
             children: [
                 {
                     name: "Choriocarcinoma (BCCA)",
                     type: "Germ Cell Tumor",
                     color: "Gray",
                     code: "C2948",
                     umls: "C0008497",
                 },
                 {
                     name: "Embryonal Carcinoma (BEC)",
                     type: "Germ Cell Tumor",
                     color: "Gray",
                     code: "C7010",
                     umls: "C1333377",
                 },
                 {
                     name: "Germinoma (GMN)",
                     type: "Germ Cell Tumor",
                     color: "Gray",
                     code: "C3753",
                     umls: "C0206660",
                 },
                 {
                     name: "Immature Teratoma (BIMT)",
                     type: "Germ Cell Tumor",
                     color: "Gray",
                     code: "C7014",
                     umls: "C1332883",
                 },
                 {
                     name: "Malignant Teratoma (BMGT)",
                     type: "Germ Cell Tumor",
                     color: "Gray",
                     code: "C7015",
                     umls: "C1336704",
                 },
                 {
                     name: "Mature Teratoma (BMT)",
                     type: "Germ Cell Tumor",
                     color: "Gray",
                     code: "C7013",
                     umls: "C1332886",
                 },
                 {
                     name: "Mixed Germ Cell Tumor (BMGCT)",
                     type: "Germ Cell Tumor",
                     color: "Gray",
                     code: "C4290",
                     umls: "C0334524",
                 },
                 {
                     name: "Yolk Sac Tumor (BYST)",
                     type: "Germ Cell Tumor",
                     color: "Gray",
                     code: "",
                     umls: "",
                 }
             ]
          },
          {   
               name: "Meningothelial Tumor (MNGT)",
               type: "CNS Cancer",
               color: "Gray",
               code: "C3229",
               umls: "C0025284",
               children: [
                   {
                       name: "Anaplastic Meningioma (ANM)",
                       type: "CNS Cancer",
                       color: "Gray",
                       code: "C4051",
                       umls: "C0259785",
                   },
                   {
                       name: "Atypical Meningioma (ATM)",
                       type: "CNS Cancer",
                       color: "Gray",
                       code: "C4723",
                       umls: "C0431122",
                   },
                   {
                       name: "Chordoid Meningioma (CHOM)",
                       type: "CNS Cancer",
                       color: "Gray",
                       code: "C6908",
                       umls: "C1370510",
                   },
                   {
                       name: "Clear cell Meningioma (CCM)",
                       type: "CNS Cancer",
                       color: "Gray",
                       code: "C4722",
                       umls: "C0431121",
                   },
                   {
                       name: "Hemangiopericytoma of the Central Nervous System (HPCCNS)",
                       type: "CNS Cancer",
                       color: "Gray",
                       code: "C4660",
                       umls: "C0349622",
                   },
                   {
                       name: "Meningioma (MNG)",
                       type: "CNS Cancer",
                       color: "Gray",
                       code: "C3230",
                       umls: "C0025286",
                   },
                   {
                       name: "Papillary Meningioma (PPM)",
                       type: "CNS Cancer",
                       color: "Gray",
                       code: "C3904",
                       umls: "C3163622",
                   },
                   {
                       name: "Rhabdoid Meningioma (RHM)",
                       type: "CNS Cancer",
                       color: "Gray",
                       code: "C6909",
                       umls: "C0259786",
                   },
                   {
                       name: "Solitary Fibrous Tumor of the Central Nervous System (SFTCNS)",
                       type: "CNS Cancer",
                       color: "Gray",
                       code: "",
                       umls: "",
                   }
               ]
            },  
            { 
                name: "Miscellaneous Brain Tumor (MBT)",
                type: "Miscellaneous Brain Tumor",
                color: "Gray",
                code: "C6974",
                umls: "C1334936",
                children: [
                    {
                        name: "Hemangioblastoma (HMBL)",
                        type: "Miscellaneous Brain Tumor",
                        color: "Gray",
                        code: "C3801",
                        umls: "C0206734",
                    },
                    {
                        name: "High-Grade Neuroepithelial Tumor (HGNET)",
                        type: "Miscellaneous Brain Tumor",
                        color: "Gray",
                        code: "",
                        umls: "",
                    },
                    {
                        name: "Low-Grade Neuroepithelial Tumor (LGNET)",
                        type: "Miscellaneous Brain Tumor",
                        color: "Gray",
                        code: "",
                        umls: "",
                    },
                    {
                        name: "Malignant Lymphoma (MLYM)",
                        type: "Miscellaneous Brain Tumor",
                        color: "Gray",
                        code: "C3208",
                        umls: "C0024299",
                    },
                    {
                        name: "Malignant Tumor (MT)",
                        type: "Miscellaneous Brain Tumor",
                        color: "Gray",
                        code: "C9305",
                        umls: "C0006826",
                    },
                    {
                        name: "Mesenchymal Chondrosarcoma of the CNS (MCHSCNS)",
                        type: "Miscellaneous Brain Tumor",
                        color: "Gray",
                        code: "C3737",
                        umls: "C0206637",
                    },
                    {
                        name: "Primary Brain Tumor (PBT)",
                        type: "Miscellaneous Brain Tumor",
                        color: "Gray",
                        code: "C4952",
                        umls: "C0750974",
                    },
                    {
                        name: "Primary Neuroepithelial Tumor (PRNET)",
                        type: "Miscellaneous Brain Tumor",
                        color: "Gray",
                        code: "C3787",
                        umls: "C0206715",
                    }
                ]
            },
            {
                name: "Miscellaneous Neuroepithelial Tumor (MNET)",
                type: "Miscellaneous Neuroepithelial Tumor",
                color: "Gray",
                code: "C7172",
                umls: "C1332889",
                children: [
                    {
                        name: "Angiocentric Glioma (ANGL)",
                        type: "Miscellaneous Neuroepithelial Tumor",
                        color: "Gray",
                        code: "C92552",
                        umls: "C2363903",
                    },
                    {
                        name: "Astroblastoma (ASTB)",
                        type: "Miscellaneous Neuroepithelial Tumor",
                        color: "Gray",
                        code: "C4324",
                        umls: "C0334587",
                    },
                    {
                        name: "Central Neurocytoma (CNC)",
                        type: "Miscellaneous Neuroepithelial Tumor",
                        color: "Gray",
                        code: "C3791",
                        umls: "C0206719",
                    },
                    {
                        name: "Cerebellar Liponeurocytoma (CLNC)",
                        type: "Miscellaneous Neuroepithelial Tumor",
                        color: "Gray",
                        code: "C6905",
                        umls: "C1370507",
                    },
                    {
                        name: "Chordoid Glioma of the Third Ventricle (CHGL)",
                        type: "Miscellaneous Neuroepithelial Tumor",
                        color: "Gray",
                        code: "C5592",
                        umls: "C1322252",
                    },
                    {
                        name: "Desmoplastic Infantile Astrocytoma (DIA)",
                        type: "Miscellaneous Neuroepithelial Tumor",
                        color: "Gray",
                        code: "C9476",
                        umls: "C0457179",
                    },
                    {
                        name: "Desmoplastic Infantile Ganglioglioma (DIG)",
                        type: "Miscellaneous Neuroepithelial Tumor",
                        color: "Gray",
                        code: "C4738",
                        umls: "C1321878",
                    },
                    {
                        name: "Dysplastic Gangliocytoma of the Cerebellum/Lhermitte-Duclos Disease (LDD)",
                        type: "Miscellaneous Neuroepithelial Tumor",
                        color: "Gray",
                        code: "C8419",
                        umls: "C0391826",
                    },
                    {
                        name: "Extraventricular Neurocytoma (EVN)",
                        type: "Miscellaneous Neuroepithelial Tumor",
                        color: "Gray",
                        code: "C92555",
                        umls: "C2985175",
                    },
                    {
                        name: "Papillary Glioneuronal Tumor (PGNT)",
                        type: "Miscellaneous Neuroepithelial Tumor",
                        color: "Gray",
                        code: "C92554",
                        umls: "C2985174",
                    },
                    {
                        name: "Rosette-forming Glioneuronal Tumor of the Fourth Ventricle (RGNT)",
                        type: "Miscellaneous Neuroepithelial Tumor",
                        color: "Gray",
                        code: "C67559",
                        umls: "C2347979",
                    }
                ]
            },
            {
                name: "Pineal Tumor (PINT)",
                type: "Pineal Tumor",
                color: "Gray",
                code: "C3328",
                umls: "C1412004",
                children: [
                    {
                        name: "Papillary Tumor of the Pineal Region (PTPR)",
                        type: "Pineal Tumor",
                        color: "Gray",
                        code: "C92624",
                        umls: "C2985219",
                    },
                    {
                        name: "Pineal Parenchymal Tumor of Intermediate Differentiation (PPTID)",
                        type: "Pineal Tumor",
                        color: "Gray",
                        code: "C6967",
                        umls: "C1367859",
                    },
                    {
                        name: "Pineoblastoma (PBL)",
                        type: "Pineal Tumor",
                        color: "Gray",
                        code: "C9344",
                        umls: "C0205898",
                    },
                    {
                        name: "Pineocytoma (PINC)",
                        type: "Pineal Tumor",
                        color: "Gray",
                        code: "C6966",
                        umls: "C0917890",
                    }
                ]
            },
            {
                name: "Primary CNS Melanocytic Tumors (PCNSMT)",
                type: "Primary CNS Melanocytic Tumors",
                color: "Gray",
                code: "",
                umls: "",
                children: [
                    {
                        name: "Melanocytoma (MELC)",
                        type: "Melanocytoma",
                        color: "Gray",
                        code: "",
                        umls: "",
                    },
                    {
                        name: "Primary CNS Melanoma (PCNSM)",
                        type: "Melanoma",
                        color: "LightSkyBlue",
                        code: "C5505",
                        umls: "C1332888",
                    }
                ]
            },
            {
                name: "Sellar Tumor (SELT)",
                type: "Sellar Tumor",
                color: "Gray",
                code: "C4944",
                umls: "C0748616",
                children: [
                    {
                        name: "Atypical Pituitary Adenoma (APTAD)",
                        type: "Sellar Tumor",
                        color: "Gray",
                        code: "",
                        umls: "",
                    },
                    {
                        name: "Craniopharyngioma, Adamantinomatous Type (ACPG)",
                        type: "Sellar Tumor",
                        color: "Gray",
                        code: "",
                        umls: "",
                    },
                    {
                        name: "Craniopharyngioma, Papillary Type (PCGP)",
                        type: "Sellar Tumor",
                        color: "Gray",
                        code: "",
                        umls: "",
                    },
                    {
                        name: "Granular Cell Tumor (GCT)",
                        type: "Sellar Tumor",
                        color: "Gray",
                        code: "C3474",
                        umls: "C0085167",
                    },
                    {
                        name: "Pituicytoma (PTCY)",
                        type: "Sellar Tumor",
                        color: "Gray",
                        code: "C94524",
                        umls: "C2986550",
                    },
                    {
                        name: "Pituitary Adenoma (PTAD)",
                        type: "Sellar Tumor",
                        color: "Gray",
                        code: "C3329",
                        umls: "C0032000",
                    },
                    {
                        name: "Pituitary Carcinoma (PTCA)",
                        type: "Sellar Tumor",
                        color: "Gray",
                        code: "C4536",
                        umls: "C0346300",
                    },
                    {
                        name: "Spindle Cell Oncocytoma of the Adenohypophysis (SCOAH)",
                        type: "Sellar Tumor",
                        color: "Gray",
                        code: "C94537",
                        umls: "C2986561",
                    }
                ]
            }
        ]
      },
    {
      name: "Cervix (CERVIX)",
      type: "Cervical Cancer",
      color: "Teal",
      code: "C12311",
      umls: "C0007874",
      children: [
          {
              name: "Cervical Adenocarcinoma (CEAD)",
              type: "Cervical Cancer",
              color: "Teal",
              code: "C4029",
              umls: "C0279672",
              children: [
                  {
                      name: "Cervical Clear Cell Carcinoma (CECC)",
                      type: "Cervical Cancer",
                      color: "Teal",
                      code: "C6344",
                      umls: "C1332912",
                  },
                  {
                      name: "Cervical Endometrioid Carcinoma (CEEN)",
                      type: "Cervical Cancer",
                      color: "Teal",
                      code: "C3769",
                      umls: "C0206687",
                  },
                  {
                      name: "Cervical Serous Carcinoma (CESE)",
                      type: "Cervical Cancer",
                      color: "Teal",
                      code: "",
                      umls: "",
                  },
                  {
                      name: "Endocervical Adenocarcinoma (ECAD)",
                      type: "Cervical Cancer",
                      color: "Teal",
                      code: "C28327",
                      umls: "C1299237",
                  },
                  {
                      name: "Mesonephric Carcinoma (CEMN)",
                      type: "Cervical Cancer",
                      color: "Teal",
                      code: "",
                      umls: "CL329978",
                  },
                  {
                      name: "Mucinous Carcinoma (CEMU)",
                      type: "Cervical Cancer",
                      color: "Teal",
                      code: "C26712",
                      umls: "C0007130",
                      children: [
                          {
                              name: "Gastric Type Mucinous Carcinoma (GCEMU)",
                              type: "Cervical Cancer",
                              color: "Teal",
                              code: "",
                              umls: "",
                          },
                          {
                              name: "Intestinal Type Mucinous Carcinoma (ICEMU)",
                              type: "Cervical Cancer",
                              color: "Teal",
                              code: "C40203",
                              umls: "C1516422",
                          },
                          {
                              name: "Signet Ring Mucinous Carcinoma (SCEMU)",
                              type: "Cervical Cancer",
                              color: "Teal",
                              code: "C40205",
                              umls: "C1516424",
                          }
                      ]
                  },
                  {
                      name: "Villoglandular Carcinoma (CEVG)",
                      type: "Cervical Cancer",
                      color: "Teal",
                      code: "C40208",
                      umls: "C1516425",
                  }
              ]
          },
          {
              name: "Cervical Adenocarcinoma In Situ (CEAIS)",
              type: "Cervical Cancer",
              color: "Teal",
              code: "C4520",
              umls: "C0346203",
          },
          {
              name: "Cervical Adenoid Basal Carcinoma (CABC)",
              type: "Cervical Cancer",
              color: "Teal",
              code: "C40213",
              umls: "C1516403",
          },
          {
              name: "Cervical Adenoid Cystic Carcinoma (CACC)",
              type: "Cervical Cancer",
              color: "Teal",
              code: "C6346",
              umls: "C1332911",
          },
          {
              name: "Cervical Adenosquamous Carcinoma (CEAS)",
              type: "Cervical Cancer",
              color: "Teal",
              code: "C4519",
              umls: "C0346202",
          },
          {
              name: "Cervical Leiomyosarcoma (CELI)",
              type: "Cervical Cancer",
              color: "Teal",
              code: "",
              umls: "",
          },
          {
              name: "Cervical Neuroendocrine Tumor (CENE)",
              type: "Cervical Cancer",
              color: "Teal",
              code: "C40214",
              umls: "C1516417",
          },
          {
              name: "Cervical Rhabdomyosarcoma (CERMS)",
              type: "Cervical Cancer",
              color: "Teal",
              code: "",
              umls: "",
          },
          {
              name: "Cervical Squamous Cell Carcinoma (CESC)",
              type: "Cervical Cancer",
              color: "Teal",
              code: "C4028",
              umls: "C0279671",
          },
          {
              name: "Glassy Cell Carcinoma of the Cervix (CEGCC)",
              type: "Cervical Cancer",
              color: "Teal",
              code: "C40212",
              umls: "C1516407",
          },
          {
              name: "Mixed Cervical Carcinoma (MCCE)",
              type: "Cervical Cancer",
              color: "Teal",
              code: "",
              umls: "",
          },
          {
              name: "Small Cell Carcinoma of the Cervix (SCCE)",
              type: "Cervical Cancer",
              color: "Teal",
              code: "C7982",
              umls: "C0279674",
          },
          {
              name: "Villoglandular Adenocarcinoma of the Cervix (VGCE)",
              type: "Cervical Cancer",
              color: "Teal",
              code: "C40208",
              umls: "C1516425",
          }
      ]
    },
    {
      name: "Esophagus/Stomach (STOMACH)",
      type: "Esophageal/Stomach Cancer",
      color: "LightSkyBlue",
      code: "C12391",
      umls: "C0038351",
      children: [
          {
              name: "Esophageal Poorly Differentiated Carcinoma (EPDCA)",
              type: "Esophagogastric Cancer",
              color: "LightSkyBlue",
              code: "",
              umls: "",
          },
          {
              name: "Esophageal Squamous Cell Carcinoma (ESCC)",
              type: "Esophagogastric Cancer",
              color: "LightSkyBlue",
              code: "C4024",
              umls: "C0279626",
          },
          {
              name: "Esophagogastric Adenocarcinoma (EGC)",
              type: "Esophagogastric Cancer",
              color: "LightSkyBlue",
              code: "C9296",
              umls: "C1332166",
              children: [
                  {
                      name: "Adenocarcinoma of the Gastroesophageal Junction (GEJ)",
                      type: "Esophagogastric Cancer",
                      color: "LightSkyBlue",
                      code: "C9296",
                      umls: "C1332166",
                  },
                  {
                      name: "Adenosquamous Carcinoma of the Stomach (STAS)",
                      type: "Esophagogastric Cancer",
                      color: "LightSkyBlue",
                      code: "C5474",
                      umls: "C1333761",
                  },
                  {
                      name: "Esophageal Adenocarcinoma (ESCA)",
                      type: "Esophagogastric Cancer",
                      color: "LightSkyBlue",
                      code: "C4025",
                      umls: "C0279628",
                  },
                  {
                      name: "Gastric Remnant Adenocarcinoma (GRC)",
                      type: "Esophagogastric Cancer",
                      color: "LightSkyBlue",
                      code: "",
                      umls: "",
                  },
                  {
                      name: "Small Cell Carcinoma of the Stomach (STSC)",
                      type: "Esophagogastric Cancer",
                      color: "LightSkyBlue",
                      code: "C6764",
                      umls: "C1333788",
                  },
                  {
                      name: "Stomach Adenocarcinoma (STAD)",
                      type: "Esophagogastric Cancer",
                      color: "LightSkyBlue",
                      code: "C4004",
                      umls: "C0278701",
                      children: [
                          {
                              name: "Diffuse Type Stomach Adenocarcinoma (DSTAD)",
                              type: "Esophagogastric Cancer",
                              color: "LightSkyBlue",
                              code: "C9159",
                              umls: "C0279635",
                          },
                          {
                              name: "Intestinal Type Stomach Adenocarcinoma (ISTAD)",
                              type: "Esophagogastric Cancer",
                              color: "LightSkyBlue",
                              code: "C9157",
                              umls: "C0279633",
                          },
                          {
                              name: "Mucinous Stomach Adenocarcinoma (MSTAD)",
                              type: "Esophagogastric Cancer",
                              color: "LightSkyBlue",
                              code: "C5248",
                              umls: "C1334809",
                          },
                          {
                              name: "Papillary Stomach Adenocarcinoma (PSTAD)",
                              type: "Esophagogastric Cancer",
                              color: "LightSkyBlue",
                              code: "C5472",
                              umls: "C1333785",
                          },
                          {
                              name: "Tubular Stomach Adenocarcinoma (TSTAD)",
                              type: "Esophagogastric Cancer",
                              color: "LightSkyBlue",
                              code: "C5473",
                              umls: "C1333791",
                          }
                      ]
                  },
                  {
                      name: "Undifferentiated Stomach Adenocarcinoma (USTAD)",
                      type: "Esophagogastric Cancer",
                      color: "LightSkyBlue",
                      code: "C5476",
                      umls: "C1336858",
                      children: [
                          {
                              name: "Poorly Differentiated Carcinoma of the Stomach (SPDAC)",
                              type: "Esophagogastric Cancer",
                              color: "LightSkyBlue",
                              code: "",
                              umls: "",
                          },
                          {
                              name: "Signet Ring Cell Carcinoma of the Stomach (SSRCC)",
                              type: "Esophagogastric Cancer",
                              color: "LightSkyBlue",
                              code: "C5250",
                              umls: "C1335965",
                          }
                      ]
                  }
              ]
          },
          {
              name: "Gastrointestinal Neuroendocrine Tumors of the Esophagus/Stomach (GINETES)",
              type: "Esophagogastric Cancer",
              color: "LightSkyBlue",
              code: "",
              umls: "",
              children: [
                  {
                      name: "High-Grade Neuroendocrine Carcinoma of the Esophagus (HGNEE)",
                      type: "Gastrointestinal Neuroendocrine Tumors of the Esophagus/Stomach",
                      color: "LightSkyBlue",
                      code: "",
                      umls: "",
                  },
                  {
                      name: "High-Grade Neuroendocrine Carcinoma of the Stomach (HGNES)",
                      type: "Gastrointestinal Neuroendocrine Tumors of the Esophagus/Stomach",
                      color: "LightSkyBlue",
                      code: "",
                      umls: "",
                  },
                  {
                      name: "Well-Differentiated Neuroendocrine Tumors of the Stomach (SWDNET)",
                      type: "Gastrointestinal Neuroendocrine Tumor",
                      color: "LightSkyBlue",
                      code: "C95871",
                      umls: "C3272399",
                  }
              ]
          },
          {
              name: "Mucosal Melanoma of the Esophagus (ESMM)",
              type: "Melanoma",
              color: "LightSkyBlue",
              code: "C5707",
              umls: "C1333460",
          },
          {
              name: "Smooth Muscle Neoplasm, NOS (SMN)",
              type: "Esophagogastric Cancer",
              color: "LightSkyBlue",
              code: "",
              umls: "",
          }
      ]
    },
    {
    name: "Eye (EYE)",
    type: "Eye Cancer",
    color: "Green",
    code: "C12401",
    umls: "C0015392",
    children: [
        {
            name: "Lacrimal Gland Tumor (LGT)",
            type: "Lacrimal Gland Tumor",
            color: "Green",
            code: "",
            umls: "",
            children: [
                {
                    name: "Adenoid Cystic Carcinoma of the Lacrimal Gland (ACLG)",
                    type: "Lacrimal Gland Tumor",
                    color: "Green",
                    code: "",
                    umls: "",
                },
                {
                    name: "Squamous Cell Carcinoma of the Lacrimal Gland (SCLG)",
                    type: "Lacrimal Gland Tumor",
                    color: "Green",
                    code: "",
                    umls: "",
                }
            ]
        },
        {
            name: "Ocular Melanoma (OM)",
            type: "Melanoma",
            color: "Green",
            code: "C8562",
            umls: "C0558356",
            children: [
                {
                    name: "Conjunctival Melanoma (CM)",
                    type: "Melanoma",
                    color: "Green",
                    code: "C4550",
                    umls: "C0346360",
                },
                {
                    name: "Uveal Melanoma (UM)",
                    type: "Melanoma",
                    color: "Green",
                    code: "C7712",
                    umls: "C0220633",
                }
            ]
        },
        {
            name: "Retinoblastoma (RBL)",
            type: "Retinoblastoma",
            color: "Green",
            code: "C7541",
            umls: "C0035335",
        }
    ]
    },
    {
    name: "Head and Neck (HEAD_NECK)",
    type: "Head and Neck Cancer",
    color: "DarkRed",
    code: "C12418",
    umls: "C0460004",
    children: [
        {
            name: "Head and Neck Carcinoma, Other (OHNCA)",
            type: "Head and Neck Cancer",
            color: "DarkRed",
            code: "",
            umls: "",
            children: [
                {
                    name: "Adenosquamous Carcinoma of the Tongue (ASCT)",
                    type: "Head and Neck Cancer",
                    color: "DarkRed",
                    code: "",
                    umls: "",
                },
                {
                    name: "Epithelial-Myoepithelial Carcinoma (EMYOCA)",
                    type: "Head and Neck Cancer",
                    color: "DarkRed",
                    code: "C4199",
                    umls: "C0334392",
                },
                {
                    name: "Head and Neck Neuroendocrine Carcinoma (HNNE)",
                    type: "Head and Neck Cancer",
                    color: "DarkRed",
                    code: "",
                    umls: "",
                },
                {
                    name: "NUT Midline Carcinoma of the Head and Neck (NMCHN)",
                    type: "Head and Neck Cancer",
                    color: "DarkRed",
                    code: "C45716",
                    umls: "C1707291",
                },
                {
                    name: "Odontogenic Carcinoma (ODGC)",
                    type: "Head and Neck Cancer",
                    color: "DarkRed",
                    code: "C4812",
                    umls: "C0334558",
                    children: [
                        {
                            name: "Clear Cell Odontogenic Carcinoma (CCOC)",
                            type: "Head and Neck Cancer",
                            color: "DarkRed",
                            code: "C54300",
                            umls: "C0475829",
                        }
                    ]
                },
                {
                    name: "Sinonasal Adenocarcinoma (SNA)",
                    type: "Head and Neck Cancer",
                    color: "DarkRed",
                    code: "",
                    umls: "CL473651",
                },
                {
                    name: "Sinonasal Undifferentiated Carcinoma (SNUC)",
                    type: "Head and Neck Cancer",
                    color: "DarkRed",
                    code: "C54294",
                    umls: "C1710096",
                }
            ]
        },
        {
            name: "Head and Neck Mucosal Melanoma (HNMUCM)",
            type: "Melanoma",
            color: "DarkRed",
            code: "",
            umls: "",
        },
        {
            name: "Head and Neck Squamous Cell Carcinoma (HNSC)",
            type: "Head and Neck Cancer",
            color: "DarkRed",
            code: "C34447",
            umls: "C1168401",
            children: [
                {
                    name: "Head and Neck Squamous Cell Carcinoma of Unknown Primary (HNSCUP)",
                    type: "Head and Neck Cancer",
                    color: "DarkRed",
                    code: "",
                    umls: "",
                },
                {
                    name: "Hypopharynx Squamous Cell Carcinoma (HPHSC)",
                    type: "Head and Neck Cancer",
                    color: "DarkRed",
                    code: "C4043",
                    umls: "C0280321",
                },
                {
                    name: "Larynx Squamous Cell Carcinoma (LXSC)",
                    type: "Head and Neck Cancer",
                    color: "DarkRed",
                    code: "C4044",
                    umls: "C0280324",
                },
                {
                    name: "Oral Cavity Squamous Cell Carcinoma (OCSC)",
                    type: "Head and Neck Cancer",
                    color: "DarkRed",
                    code: "C4833",
                    umls: "C0585362",
                },
                {
                    name: "Oropharynx Squamous Cell Carcinoma (OPHSC)",
                    type: "Head and Neck Cancer",
                    color: "DarkRed",
                    code: "",
                    umls: "C0280313",
                },
                {
                    name: "Sinonasal Squamous Cell Carcinoma (SNSC)",
                    type: "Head and Neck Cancer",
                    color: "DarkRed",
                    code: "C54287",
                    umls: "C0334270",
                }
            ]
        },
        {
            name: "Nasopharyngeal Carcinoma (NPC)",
            type: "Head and Neck Cancer",
            color: "DarkRed",
            code: "C3871",
            umls: "C2931822",
        },
        {
            name: "Parathyroid Cancer (PTH)",
            type: "Parathyroid Cancer",
            color: "DarkRed",
            code: "",
            umls: "",
            children: [
                {
                    name: "Parathyroid Carcinoma (PTHC)",
                    type: "Parathyroid Cancer",
                    color: "DarkRed",
                    code: "",
                    umls: "",
                }
            ]
        },
        {
            name: "Salivary Carcinoma (SACA)",
            type: "Salivary Gland Cancer",
            color: "DarkRed",
            code: "C9272",
            umls: "C0948750",
            children: [
                {
                    name: "Acinic Cell Carcinoma (ACCC)",
                    type: "Salivary Gland Cancer",
                    color: "DarkRed",
                    code: "C3768",
                    umls: "C0206685",
                },
                {
                    name: "Adenoid Cystic Carcinoma (ACYC)",
                    type: "Salivary Gland Cancer",
                    color: "DarkRed",
                    code: "C2970",
                    umls: "C0010606",
                },
                {
                    name: "Basal Cell Adenocarcinoma (BCAC)",
                    type: "Salivary Gland Cancer",
                    color: "DarkRed",
                    code: "",
                    umls: "",
                },
                {
                    name: "Carcinoma ex Pleomorphic Adenoma (CAEXPA)",
                    type: "Salivary Gland Cancer",
                    color: "DarkRed",
                    code: "",
                    umls: "",
                },
                {
                    name: "Mammary Analogue Secretory Carcinoma of Salivary Gland Origin (HNMASC)",
                    type: "Salivary Gland Cancer",
                    color: "DarkRed",
                    code: "",
                    umls: "",
                },
                {
                    name: "Mucoepidermoid Carcinoma (MUCC)",
                    type: "Salivary Gland Cancer",
                    color: "DarkRed",
                    code: "C3772",
                    umls: "C0206694",
                },
                {
                    name: "Myoepithelial Carcinoma (MYEC)",
                    type: "Salivary Gland Cancer",
                    color: "DarkRed",
                    code: "C35700",
                    umls: "C1335904",
                },
                {
                    name: "Pleomorphic Adenoma (PADA)",
                    type: "Salivary Gland Cancer",
                    color: "DarkRed",
                    code: "",
                    umls: "",
                },
                {
                    name: "Polymorphous Adenocarcinoma (PAC)",
                    type: "Salivary Gland Cancer",
                    color: "DarkRed",
                    code: "",
                    umls: "",
                },
                {
                    name: "Salivary Adenocarcinoma (SAAD)",
                    type: "Salivary Gland Cancer",
                    color: "DarkRed",
                    code: "C8021",
                    umls: "C0279746",
                },
                {
                    name: "Salivary Carcinoma, Other (OSACA)",
                    type: "Salivary Gland Cancer",
                    color: "DarkRed",
                    code: "",
                    umls: "",
                },
                {
                    name: "Salivary Duct Carcinoma (SDCA)",
                    type: "Salivary Gland Cancer",
                    color: "DarkRed",
                    code: "C5904",
                    umls: "C1301194",
                },
                {
                    name: "Salivary Gland Oncocytoma (SGO)",
                    type: "Salivary Gland Cancer",
                    color: "DarkRed",
                    code: "C5932",
                    umls: "C1335906",
                }
            ]
        },
        {
            name: "Sialoblastoma (SBL)",
            type: "Sialoblastoma",
            color: "DarkRed",
            code: "",
            umls: "",
        }
    ]
    },
    {
    name: "Kidney (KIDNEY)",
    type: "Kidney Cancer",
    color: "Orange",
    code: "C12415",
    umls: "C0022646",
    children: [
        {
            name: "Clear Cell Sarcoma of Kidney (CCSK)",
            type: "Clear Cell Sarcoma of Kidney",
            color: "Orange",
            code: "",
            umls: "",
        },
        {
            name: "Renal Cell Carcinoma (RCC)",
            type: "Renal Cell Carcinoma",
            color: "Orange",
            code: "C9385",
            umls: "C0007134",
            children: [
                {
                    name: "Renal Clear Cell Carcinoma (CCRCC)",
                    type: "Renal Cell Carcinoma",
                    color: "Orange",
                    code: "C4033",
                    umls: "C0279702",
                    children: [
                        {
                            name: "Renal Clear Cell Carcinoma with Sarcomatoid Features (SCCRCC)",
                            type: "Renal Cell Carcinoma",
                            color: "Orange",
                            code: "",
                            umls: "",
                        }
                    ]
                },
                {
                    name: "Renal Non-Clear Cell Carcinoma (NCCRCC)",
                    type: "Renal Cell Carcinoma",
                    color: "Orange",
                    code: "",
                    umls: "",
                    children: [
                        {
                            name: "Chromophobe Renal Cell Carcinoma (CHRCC)",
                            type: "Renal Cell Carcinoma",
                            color: "Orange",
                            code: "C4146",
                            umls: "C1266042",
                        },
                        {
                            name: "Clear Cell Papillary Renal Cell Carcinoma (CCPRC)",
                            type: "Renal Cell Carcinoma",
                            color: "Orange",
                            code: "",
                            umls: "",
                        },
                        {
                            name: "Collecting Duct Renal Cell Carcinoma (CDRCC)",
                            type: "Renal Cell Carcinoma",
                            color: "Orange",
                            code: "C6194",
                            umls: "C1266044",
                        },
                        {
                            name: "FH-Deficient Renal Cell Carcinoma (FHRCC)",
                            type: "Renal Cell Carcinoma",
                            color: "Orange",
                            code: "",
                            umls: "",
                        },
                        {
                            name: "Papillary Renal Cell Carcinoma (PRCC)",
                            type: "Renal Cell Carcinoma",
                            color: "Orange",
                            code: "C6975",
                            umls: "C1306837",
                        },
                        {
                            name: "Renal Angiomyolipoma (RAML)",
                            type: "Renal Cell Carcinoma",
                            color: "Orange",
                            code: "C3888",
                            umls: "C0241961",
                        },
                        {
                            name: "Renal Medullary Carcinoma (MRC)",
                            type: "Renal Cell Carcinoma",
                            color: "Orange",
                            code: "",
                            umls: "CL448379",
                        },
                        {
                            name: "Renal Mucinous Tubular Spindle Cell Carcinoma (MTSCC)",
                            type: "Renal Cell Carcinoma",
                            color: "Orange",
                            code: "C39807",
                            umls: "C1513719",
                        },
                        {
                            name: "Renal Oncocytoma (ROCY)",
                            type: "Renal Cell Carcinoma",
                            color: "Orange",
                            code: "C4526",
                            umls: "C0346255",
                        },
                        {
                            name: "Renal Small Cell Carcinoma (RSCC)",
                            type: "Renal Cell Carcinoma",
                            color: "Orange",
                            code: "",
                            umls: "CL473652",
                        },
                        {
                            name: "Sarcomatoid Renal Cell Carcinoma (SRCC)",
                            type: "Renal Cell Carcinoma",
                            color: "Orange",
                            code: "C27893",
                            umls: "C1266043",
                        },
                        {
                            name: "Translocation-Associated Renal Cell Carcinoma (TRCC)",
                            type: "Renal Cell Carcinoma",
                            color: "Orange",
                            code: "C27891",
                            umls: "C1337036",
                        },
                        {
                            name: "Unclassified Renal Cell Carcinoma (URCC)",
                            type: "Renal Cell Carcinoma",
                            color: "Orange",
                            code: "C27892",
                            umls: "C1336853",
                        }
                    ]
                }
            ]
        },
        {
            name: "Renal Neuroendocrine Tumor (RNET)",
            type: "Renal Neuroendocrine Tumor",
            color: "Orange",
            code: "",
            umls: "",
        },
        {
            name: "Rhabdoid Cancer (MRT)",
            type: "Rhabdoid Cancer",
            color: "Orange",
            code: "C3808",
            umls: "C0206743",
        },
        {
            name: "Wilms' Tumor (WT)",
            type: "Wilms Tumor",
            color: "Orange",
            code: "",
            umls: "CL343552",
        }
    ]
    },
    {
    name: "Liver (LIVER)",
    type: "Liver Cancer",
    color: "MediumSeaGreen",
    code: "C12392",
    umls: "C0023884",
    children: [
        {
            name: "Fibrolamellar Carcinoma (FLC)",
            type: "Hepatobiliary Cancer",
            color: "MediumSeaGreen",
            code: "C4131",
            umls: "C0334287",
        },
        {
            name: "Hepatoblastoma (LIHB)",
            type: "Hepatobiliary Cancer",
            color: "MediumSeaGreen",
            code: "C3728",
            umls: "C0206624",
        },
        {
            name: "Hepatocellular Adenoma (LIAD)",
            type: "Hepatobiliary Cancer",
            color: "MediumSeaGreen",
            code: "C3758",
            umls: "C0206669",
        },
        {
            name: "Hepatocellular Carcinoma (HCC)",
            type: "Hepatobiliary Cancer",
            color: "MediumSeaGreen",
            code: "C3099",
            umls: "C0019204",
        },
        {
            name: "Hepatocellular Carcinoma plus Intrahepatic Cholangiocarcinoma (HCCIHCH)",
            type: "Hepatobiliary Cancer",
            color: "MediumSeaGreen",
            code: "C3828",
            umls: "C0221287",
        },
        {
            name: "Liver Angiosarcoma (LIAS)",
            type: "Hepatobiliary Cancer",
            color: "MediumSeaGreen",
            code: "C4438",
            umls: "C0345907",
        },
        {
            name: "Malignant Nonepithelial Tumor of the Liver (LIMNET)",
            type: "Hepatobiliary Cancer",
            color: "MediumSeaGreen",
            code: "",
            umls: "",
        },
        {
            name: "Malignant Rhabdoid Tumor of the Liver (MRTL)",
            type: "Malignant Rhabdoid Tumor of the Liver",
            color: "MediumSeaGreen",
            code: "",
            umls: "",
        },
        {
            name: "Undifferentiated Embryonal Sarcoma of the Liver (UESL)",
            type: "Undifferentiated Embryonal Sarcoma of the Liver",
            color: "MediumSeaGreen",
            code: "",
            umls: "",
        }
    ]
    },
    {
    name: "Lung (LUNG)",
    type: "Lung Cancer",
    color: "Gainsboro",
    code: "C12468",
    umls: "C0024109",
    children: [
        {
            name: "Combined Small Cell Lung Carcinoma (CSCLC)",
            type: "Small Cell Lung Cancer",
            color: "Gainsboro",
            code: "C9137",
            umls: "C0334240",
        },
        {
            name: "Inflammatory Myofibroblastic Lung Tumor (IMTL)",
            type: "Non-Small Cell Lung Cancer",
            color: "Gainsboro",
            code: "C39740",
            umls: "C1518038",
        },
        {
            name: "Lung Adenocarcinoma In Situ (LAIS)",
            type: "Non-Small Cell Lung Cancer",
            color: "Gainsboro",
            code: "",
            umls: "",
        },
        {
            name: "Lung Neuroendocrine Tumor (LNET)",
            type: "Non-Small Cell Lung Cancer",
            color: "Gainsboro",
            code: "C5670",
            umls: "C1334452",
            children: [
                {
                    name: "Atypical Lung Carcinoid (ALUCA)",
                    type: "Non-Small Cell Lung Cancer",
                    color: "Gainsboro",
                    code: "C45551",
                    umls: "C1708766",
                },
                {
                    name: "Large Cell Neuroendocrine Carcinoma (LUNE)",
                    type: "Non-Small Cell Lung Cancer",
                    color: "Gainsboro",
                    code: "C6875",
                    umls: "C1265996",
                },
                {
                    name: "Lung Carcinoid (LUCA)",
                    type: "Non-Small Cell Lung Cancer",
                    color: "Gainsboro",
                    code: "C4038",
                    umls: "C0280089",
                },
                {
                    name: "Small Cell Lung Cancer (SCLC)",
                    type: "Small Cell Lung Cancer",
                    color: "Gainsboro",
                    code: "C4917",
                    umls: "C0149925",
                }
            ]
        },
        {
            name: "Non-Small Cell Lung Cancer (NSCLC)",
            type: "Non-Small Cell Lung Cancer",
            color: "Gainsboro",
            code: "C2926",
            umls: "C0007131",
            children: [
                {
                    name: "Ciliated Muconodular Papillary Tumor of the Lung (CMPT)",
                    type: "Non-Small Cell Lung Cancer",
                    color: "Gainsboro",
                    code: "",
                    umls: "",
                },
                {
                    name: "Large Cell Lung Carcinoma (LCLC)",
                    type: "Non-Small Cell Lung Cancer",
                    color: "Gainsboro",
                    code: "C4450",
                    umls: "C0345958",
                    children: [
                        {
                            name: "Basaloid Large Cell Carcinoma of the Lung (BLCLC)",
                            type: "Non-Small Cell Lung Cancer",
                            color: "Gainsboro",
                            code: "C7266",
                            umls: "C1332463",
                        },
                        {
                            name: "Clear Cell Carcinoma of the Lung (CCLC)",
                            type: "Non-Small Cell Lung Cancer",
                            color: "Gainsboro",
                            code: "C4451",
                            umls: "C1707407",
                        },
                        {
                            name: "Giant Cell Carcinoma of the Lung (GCLC)",
                            type: "Non-Small Cell Lung Cancer",
                            color: "Gainsboro",
                            code: "C4452",
                            umls: "C0345960",
                        },
                        {
                            name: "Large Cell Lung Carcinoma With Rhabdoid Phenotype (RLCLC)",
                            type: "Non-Small Cell Lung Cancer",
                            color: "Gainsboro",
                            code: "C6876",
                            umls: "C1265997",
                        },
                        {
                            name: "Lymphoepithelioma-like Carcinoma of the Lung (LECLC)",
                            type: "Non-Small Cell Lung Cancer",
                            color: "Gainsboro",
                            code: "C45519",
                            umls: "C1708792",
                        }
                    ]
                },
                {
                    name: "Lung Adenocarcinoma (LUAD)",
                    type: "Non-Small Cell Lung Cancer",
                    color: "Gainsboro",
                    code: "C3512",
                    umls: "C0152013",
                },
                {
                    name: "Lung Adenosquamous Carcinoma (LUAS)",
                    type: "Non-Small Cell Lung Cancer",
                    color: "Gainsboro",
                    code: "C9133",
                    umls: "C0279557",
                },
                {
                    name: "Lung Squamous Cell Carcinoma (LUSC)",
                    type: "Non-Small Cell Lung Cancer",
                    color: "Gainsboro",
                    code: "C3493",
                    umls: "C0149782",
                },
                {
                    name: "NUT Carcinoma of the Lung (NUTCL)",
                    type: "Non-Small Cell Lung Cancer",
                    color: "Gainsboro",
                    code: "",
                    umls: "",
                },
                {
                    name: "Pleomorphic Carcinoma of the Lung (LUPC)",
                    type: "Non-Small Cell Lung Cancer",
                    color: "Gainsboro",
                    code: "C45542",
                    umls: "C1711397",
                },
                {
                    name: "Poorly Differentiated Non-Small Cell Lung Cancer (NSCLCPD)",
                    type: "Non-Small Cell Lung Cancer",
                    color: "Gainsboro",
                    code: "",
                    umls: "",
                },
                {
                    name: "Salivary Gland-Type Tumor of the Lung (SGTTL)",
                    type: "Non-Small Cell Lung Cancer",
                    color: "Gainsboro",
                    code: "",
                    umls: "",
                    children: [
                        {
                            name: "Adenoid Cystic Carcinoma of the Lung (LUACC)",
                            type: "Non-Small Cell Lung Cancer",
                            color: "Gainsboro",
                            code: "C5666",
                            umls: "C1334439",
                        },
                        {
                            name: "Mucoepidermoid Carcinoma of the Lung (LUMEC)",
                            type: "Non-Small Cell Lung Cancer",
                            color: "Gainsboro",
                            code: "C45544",
                            umls: "C1708778",
                        }
                    ]
                },
                {
                    name: "Spindle Cell Carcinoma of the Lung (SPCC)",
                    type: "Non-Small Cell Lung Cancer",
                    color: "Gainsboro",
                    code: "C45541",
                    umls: "C1708784",
                }
            ]
        },
        {
            name: "Pleuropulmonary Blastoma (PPB)",
            type: "Non-Small Cell Lung Cancer",
            color: "Gainsboro",
            code: "C5669",
            umls: "C1266144",
        },
        {
            name: "Pulmonary Lymphangiomyomatosis (LAM)",
            type: "Non-Small Cell Lung Cancer",
            color: "Gainsboro",
            code: "C38153",
            umls: "C0349649",
        },
        {
            name: "Sarcomatoid Carcinoma of the Lung (SARCL)",
            type: "Non-Small Cell Lung Cancer",
            color: "Gainsboro",
            code: "C45540",
            umls: "C1708781",
        }
    ]
    },
    {
        name: "Lymphoid (LYMPH)",
        type: "Lymphatic Cancer",
        color: "LimeGreen",
        code: "C13252",
        umls: "C0024202",
        children: [
            {
                name: "Lymphoid Atypical (LATL)",
                type: "Lymphatic Cancer, NOS",
                color: "LimeGreen",
                code: "",
                umls: "",
            },
            {
                name: "Lymphoid Benign (LBGN)",
                type: "Lymphatic Cancer, NOS",
                color: "LimeGreen",
                code: "",
                umls: "",
            },
            {
                name: "Lymphoid Neoplasm (LNM)",
                type: "Lymphatic Cancer, NOS",
                color: "LimeGreen",
                code: "",
                umls: "",
                children: [
                    {
                        name: "B-Lymphoblastic Leukemia/Lymphoma (BLL)",
                        type: "B-Lymphoblastic Leukemia/Lymphoma",
                        color: "LimeGreen",
                        code: "",
                        umls: "",
                        children: [
                            {
                                name: "B-Lymphoblastic Leukemia/Lymphoma with Recurrent Genetic Abnormalities (BLLRGA)",
                                type: "B-Lymphoblastic Leukemia/Lymphoma",
                                color: "LimeGreen",
                                code: "",
                                umls: "",
                                children: [
                                    {
                                        name: "B-Lymphoblastic Leukemia/Lymphoma with Hyperdiploidy (BLLHYPER)",
                                        type: "B-Lymphoblastic Leukemia/Lymphoma",
                                        color: "LimeGreen",
                                        code: "",
                                        umls: "",
                                    },
                                    {
                                        name: "B-Lymphoblastic Leukemia/Lymphoma with Hypodiploidy (BLLHYPO)",
                                        type: "B-Lymphoblastic Leukemia/Lymphoma",
                                        color: "LimeGreen",
                                        code: "",
                                        umls: "",
                                    },
                                    {
                                        name: "B-Lymphoblastic Leukemia/Lymphoma with iAMP21 (BLLIAMP21)",
                                        type: "B-Lymphoblastic Leukemia/Lymphoma",
                                        color: "LimeGreen",
                                        code: "",
                                        umls: "",
                                    },
                                    {
                                        name: "B-Lymphoblastic Leukemia/Lymphoma with t(12;21)(p13.2;q22.1); ETV6-RUNX1 (BLLETV6RUNX1)",
                                        type: "B-Lymphoblastic Leukemia/Lymphoma",
                                        color: "LimeGreen",
                                        code: "",
                                        umls: "",
                                    },
                                    {
                                        name: "B-Lymphoblastic Leukemia/Lymphoma with t(1;19)(q23;p13.3);TCF3-PBX1 (BLLTCF3PBX1)",
                                        type: "B-Lymphoblastic Leukemia/Lymphoma",
                                        color: "LimeGreen",
                                        code: "",
                                        umls: "",
                                    },
                                    {
                                        name: "B-Lymphoblastic Leukemia/Lymphoma with t(5;14)(q31.1;q32.3) IL3-IGH (BLLIL3IGH)",
                                        type: "B-Lymphoblastic Leukemia/Lymphoma",
                                        color: "LimeGreen",
                                        code: "",
                                        umls: "",
                                    },
                                    {
                                        name: "B-Lymphoblastic Leukemia/Lymphoma with t(9;22)(q34.1;q11.2);BCR-ABL1 (BLLBCRABL1)",
                                        type: "B-Lymphoblastic Leukemia/Lymphoma",
                                        color: "LimeGreen",
                                        code: "",
                                        umls: "",
                                    },
                                    {
                                        name: "B-Lymphoblastic Leukemia/Lymphoma with t(v;11q23.3);KMT2A Rearranged (BLLKMT2A)",
                                        type: "B-Lymphoblastic Leukemia/Lymphoma",
                                        color: "LimeGreen",
                                        code: "",
                                        umls: "",
                                    },
                                    {
                                        name: "B-Lymphoblastic Leukemia/Lymphoma, BCR-ABL1 Like (BLLBCRABL1L)",
                                        type: "B-Lymphoblastic Leukemia/Lymphoma",
                                        color: "LimeGreen",
                                        code: "",
                                        umls: "",
                                    }
                                ]
                            },
                            {
                                name: "B-Lymphoblastic Leukemia/Lymphoma, NOS (BLLNOS)",
                                type: "B-Lymphoblastic Leukemia/Lymphoma",
                                color: "LimeGreen",
                                code: "",
                                umls: "",
                            }
                        ]
                    },
                    {
                        name: "Hodgkin Lymphoma (HL)",
                        type: "Hodgkin Lymphoma",
                        color: "LimeGreen",
                        code: "C9357",
                        umls: "C0019829",
                        children: [
                            {
                                name: "Classical Hodgkin Lymphoma (CHL)",
                                type: "Hodgkin Lymphoma",
                                color: "LimeGreen",
                                code: "C7164",
                                umls: "C1333064",
                                children: [
                                    {
                                        name: "Lymphocyte-Depleted Classical Hodgkin Lymphoma (LDCHL)",
                                        type: "Hodgkin Lymphoma",
                                        color: "LimeGreen",
                                        code: "",
                                        umls: "",
                                    },
                                    {
                                        name: "Lymphocyte-Rich Classical Hodgkin Lymphoma (LRCHL)",
                                        type: "Hodgkin Lymphoma",
                                        color: "LimeGreen",
                                        code: "",
                                        umls: "",
                                    },
                                    {
                                        name: "Mixed Cellularity Classical Hodgkin Lymphoma (MCCHL)",
                                        type: "Hodgkin Lymphoma",
                                        color: "LimeGreen",
                                        code: "",
                                        umls: "",
                                    },
                                    {
                                        name: "Nodular Sclerosis Classical Hodgkin Lymphoma (NSCHL)",
                                        type: "Hodgkin Lymphoma",
                                        color: "LimeGreen",
                                        code: "",
                                        umls: "",
                                    }
                                ]
                            },
                            {
                                name: "Nodular Lymphocyte-Predominant Hodgkin Lymphoma (NLPHL)",
                                type: "Hodgkin Lymphoma",
                                color: "LimeGreen",
                                code: "C7258",
                                umls: "C1334968",
                            }
                        ]
                    },
                    {
                        name: "Non-Hodgkin Lymphoma (NHL)",
                        type: "Non-Hodgkin Lymphoma",
                        color: "LimeGreen",
                        code: "C3211",
                        umls: "C0024305",
                        children: [
                            {
                                name: "Mature B-Cell Neoplasms (MBN)",
                                type: "Mature B-Cell Neoplasms",
                                color: "LimeGreen",
                                code: "C3457",
                                umls: "CL448793",
                                children: [
                                    {
                                        name: "ALK Positive Large B-Cell Lymphoma (ALKLBCL)",
                                        type: "Mature B-Cell Neoplasms",
                                        color: "LimeGreen",
                                        code: "",
                                        umls: "",
                                    },
                                    {
                                        name: "Burkitt Lymphoma (BL)",
                                        type: "Mature B-Cell Neoplasms",
                                        color: "LimeGreen",
                                        code: "C2912",
                                        umls: "C0006413",
                                    },
                                    {
                                        name: "Chronic Lymphocytic Leukemia/Small Lymphocytic Lymphoma (CLLSLL)",
                                        type: "Mature B-Cell Neoplasms",
                                        color: "LimeGreen",
                                        code: "C7540",
                                        umls: "C0855095",
                                    },
                                    {
                                        name: "Diffuse Large B-Cell Lymphoma, NOS (DLBCLNOS)",
                                        type: "Mature B-Cell Neoplasms",
                                        color: "LimeGreen",
                                        code: "",
                                        umls: "",
                                        children: [
                                            {
                                                name: "Activated B-cell Type (ABC)",
                                                type: "Mature B-Cell Neoplasms",
                                                color: "LimeGreen",
                                                code: "",
                                                umls: "",
                                            },
                                            {
                                                name: "Germinal Center B-Cell Type (GCB)",
                                                type: "Mature B-Cell Neoplasms",
                                                color: "LimeGreen",
                                                code: "",
                                                umls: "",
                                            }
                                        ]
                                    },
                                    {
                                        name: "EBV Positive DLBCL, NOS (EBVDLBCLNOS)",
                                        type: "Mature B-Cell Neoplasms",
                                        color: "LimeGreen",
                                        code: "",
                                        umls: "",
                                    },
                                    {
                                        name: "EBV Positive Mucocutaneous Ulcer (EBVMCU)",
                                        type: "Mature B-Cell Neoplasms",
                                        color: "LimeGreen",
                                        code: "",
                                        umls: "",
                                    },
                                    {
                                        name: "Extraosseous Plasmacytoma (EP)",
                                        type: "Mature B-Cell Neoplasms",
                                        color: "LimeGreen",
                                        code: "",
                                        umls: "",
                                    },
                                    {
                                        name: "Follicular Lymphoma (FL)",
                                        type: "Mature B-Cell Neoplasms",
                                        color: "LimeGreen",
                                        code: "C3209",
                                        umls: "C0024301",
                                        children: [
                                            {
                                                name: "Duodenal-Type Follicular Lymphoma (DFL)",
                                                type: "Mature B-Cell Neoplasms",
                                                color: "LimeGreen",
                                                code: "",
                                                umls: "",
                                            },
                                            {
                                                name: "In Situ Follicular Neoplasia (ISFN)",
                                                type: "Mature B-Cell Neoplasms",
                                                color: "LimeGreen",
                                                code: "",
                                                umls: "",
                                            }
                                        ]
                                    },
                                    {
                                        name: "Gamma Heavy-Chain Disease (GHCD)",
                                        type: "Mature B-Cell Neoplasms",
                                        color: "LimeGreen",
                                        code: "",
                                        umls: "",
                                    },
                                    {
                                        name: "HHV8 Positive DLBCL, NOS (HHV8DLBCL)",
                                        type: "Mature B-Cell Neoplasms",
                                        color: "LimeGreen",
                                        code: "",
                                        umls: "",
                                    },
                                    {
                                        name: "Hairy Cell Leukemia (HCL)",
                                        type: "Mature B-Cell Neoplasms",
                                        color: "LimeGreen",
                                        code: "C7402",
                                        umls: "C0023443",
                                    },
                                    {
                                        name: "High-Grade B-Cell Lymphoma, NOS (HGBCL)",
                                        type: "Mature B-Cell Neoplasms",
                                        color: "LimeGreen",
                                        code: "",
                                        umls: "",
                                    },
                                    {
                                        name: "High-Grade B-Cell Lymphoma, with MYC and BCL2 and/or BCL6 Rearrangements (HGBCLMYCBCL2)",
                                        type: "Mature B-Cell Neoplasms",
                                        color: "LimeGreen",
                                        code: "",
                                        umls: "",
                                    },
                                    {
                                        name: "Intravascular Large B-Cell Lymphoma (IVBCL)",
                                        type: "Mature B-Cell Neoplasms",
                                        color: "LimeGreen",
                                        code: "",
                                        umls: "",
                                    },
                                    {
                                        name: "Large B-Cell Lymphoma with IRF4 Rearrangement (LBLIRF4)",
                                        type: "Mature B-Cell Neoplasms",
                                        color: "LimeGreen",
                                        code: "",
                                        umls: "",
                                    },
                                    {
                                        name: "Lymphomatoid Granulomatosis (LYG)",
                                        type: "Mature B-Cell Neoplasms",
                                        color: "LimeGreen",
                                        code: "",
                                        umls: "",
                                    },
                                    {
                                        name: "Lymphoplasmacytic Lymphoma (LPL)",
                                        type: "Mature B-Cell Neoplasms",
                                        color: "LimeGreen",
                                        code: "",
                                        umls: "",
                                        children: [
                                            {
                                                name: "Waldenstrom Macroglobulinemia (WM)",
                                                type: "Mature B-Cell Neoplasms",
                                                color: "LimeGreen",
                                                code: "C80307",
                                                umls: "C0024419",
                                            }
                                        ]
                                    },
                                    {
                                        name: "Mantle Cell Lymphoma (MCL)",
                                        type: "Mature B-Cell Neoplasms",
                                        color: "LimeGreen",
                                        code: "C4337",
                                        umls: "C0334634",
                                        children: [
                                            {
                                                name: "In Situ Mantle Cell Neoplasia (ISMCL)",
                                                type: "Mature B-Cell Neoplasms",
                                                color: "LimeGreen",
                                                code: "",
                                                umls: "",
                                            }
                                        ]
                                    },
                                    {
                                        name: "Marginal Zone Lymphoma (MZL)",
                                        type: "Mature B-Cell Neoplasms",
                                        color: "LimeGreen",
                                        code: "C4341",
                                        umls: "C1367654",
                                        children: [
                                            {
                                                name: "Extranodal Marginal Zone Lymphoma of Mucosa-Associated Lymphoid Tissue (MALT lymphoma) (EMALT)",
                                                type: "Mature B-Cell Neoplasms",
                                                color: "LimeGreen",
                                                code: "C3898",
                                                umls: "C0242647",
                                            },
                                            {
                                                name: "Nodal Marginal Zone Lymphoma (NMZL)",
                                                type: "Mature B-Cell Neoplasms",
                                                color: "LimeGreen",
                                                code: "C8863",
                                                umls: "C0855139",
                                            },
                                            {
                                                name: "Splenic Marginal Zone Lymphoma (SMZL)",
                                                type: "Mature B-Cell Neoplasms",
                                                color: "LimeGreen",
                                                code: "C4663",
                                                umls: "C0349632",
                                            }
                                        ]
                                    },
                                    {
                                        name: "Monoclonal B-Cell Lymphocytosis (MCBCL)",
                                        type: "Mature B-Cell Neoplasms",
                                        color: "LimeGreen",
                                        code: "",
                                        umls: "",
                                    },
                                    {
                                        name: "Monoclonal Gammopathy of Undetermined Significance (MGUS)",
                                        type: "Mature B-Cell Neoplasms",
                                        color: "LimeGreen",
                                        code: "",
                                        umls: "",
                                        children: [
                                            {
                                                name: "IgA (MGUSIGA)",
                                                type: "Mature B-Cell Neoplasms",
                                                color: "LimeGreen",
                                                code: "",
                                                umls: "",
                                            },
                                            {
                                                name: "IgG (MGUSIGG)",
                                                type: "Mature B-Cell Neoplasms",
                                                color: "LimeGreen",
                                                code: "",
                                                umls: "",
                                            },
                                            {
                                                name: "IgM (MGUSIGM)",
                                                type: "Mature B-Cell Neoplasms",
                                                color: "LimeGreen",
                                                code: "",
                                                umls: "",
                                            }
                                        ]
                                    },
                                    {
                                        name: "Monoclonal Immunoglobulin Deposition Diseases (MIDD)",
                                        type: "Mature B-Cell Neoplasms",
                                        color: "LimeGreen",
                                        code: "",
                                        umls: "",
                                        children: [
                                            {
                                                name: "Amyloidosis (MIDDA)",
                                                type: "Mature B-Cell Neoplasms",
                                                color: "LimeGreen",
                                                code: "",
                                                umls: "",
                                            },
                                            {
                                                name: "Monoclonal Immunoglobulin Deposition Diseases, Other (MIDDO)",
                                                type: "Mature B-Cell Neoplasms",
                                                color: "LimeGreen",
                                                code: "",
                                                umls: "",
                                            }
                                        ]
                                    },
                                    {
                                        name: "Mu Heavy-Chain Disease (MHCD)",
                                        type: "Mature B-Cell Neoplasms",
                                        color: "LimeGreen",
                                        code: "",
                                        umls: "",
                                    },
                                    {
                                        name: "Pediatric-Type Follicular Lymphoma (PTFL)",
                                        type: "Mature B-Cell Neoplasms",
                                        color: "LimeGreen",
                                        code: "",
                                        umls: "",
                                    },
                                    {
                                        name: "Plasma Cell Myeloma (PCM)",
                                        type: "Mature B-Cell Neoplasms",
                                        color: "LimeGreen",
                                        code: "C3242",
                                        umls: "C0026764",
                                    },
                                    {
                                        name: "Plasmablastic Lymphoma (PLBL)",
                                        type: "Mature B-Cell Neoplasms",
                                        color: "LimeGreen",
                                        code: "",
                                        umls: "",
                                    },
                                    {
                                        name: "Primary Cutaneous DLBCL, Leg Type (PCLBCLLT)",
                                        type: "Mature B-Cell Neoplasms",
                                        color: "LimeGreen",
                                        code: "",
                                        umls: "",
                                    },
                                    {
                                        name: "Primary Cutaneous Follicle Center Lymphoma (PCFCL)",
                                        type: "Mature B-Cell Neoplasms",
                                        color: "LimeGreen",
                                        code: "",
                                        umls: "",
                                    },
                                    {
                                        name: "Primary DLBCL of the central nervous system (PCNSL)",
                                        type: "Mature B-Cell Neoplasms",
                                        color: "LimeGreen",
                                        code: "C9301",
                                        umls: "C0280803",
                                    },
                                    {
                                        name: "Primary Effusion Lymphoma (PEL)",
                                        type: "Mature B-Cell Neoplasms",
                                        color: "LimeGreen",
                                        code: "C6915",
                                        umls: "C1292753",
                                    },
                                    {
                                        name: "Primary Mediastinal (Thymic) Large B-Cell Lymphoma (PMBL)",
                                        type: "Mature B-Cell Neoplasms",
                                        color: "LimeGreen",
                                        code: "C9280",
                                        umls: "C1292754",
                                    },
                                    {
                                        name: "Solitary Plasmacytoma of Bone (SPB)",
                                        type: "Mature B-Cell Neoplasms",
                                        color: "LimeGreen",
                                        code: "",
                                        umls: "",
                                    },
                                    {
                                        name: "Splenic B-Cell Lymphoma/Leukemia, Unclassifiable (SBLU)",
                                        type: "Mature B-Cell Neoplasms",
                                        color: "LimeGreen",
                                        code: "",
                                        umls: "",
                                        children: [
                                            {
                                                name: "Hairy Cell Leukemia-Variant (HCL-V)",
                                                type: "Mature B-Cell Neoplasms",
                                                color: "LimeGreen",
                                                code: "",
                                                umls: "",
                                            },
                                            {
                                                name: "Splenic Diffuse Red Pulp Small B-Cell Lymphoma (SDRPL)",
                                                type: "Mature B-Cell Neoplasms",
                                                color: "LimeGreen",
                                                code: "",
                                                umls: "",
                                            }
                                        ]
                                    },
                                ]
                            },
                            {
                                name: "T-Cell/Histiocyte-Rich Large B-Cell Lymphoma (THRLBCL)",
                                type: "Mature B-Cell Neoplasms",
                                color: "LimeGreen",
                                code: "",
                                umls: "",
                            }
                        ]
                    },
                    {
                        name: "Mature T and NK Neoplasms (MTNN)",
                        type: "Mature T and NK Neoplasms",
                        color: "LimeGreen",
                        code: "C3466",
                        umls: "C0079772",
                        children: [
                            {
                                name: "Adult T-Cell Leukemia/Lymphoma (ATLL)",
                                type: "Mature T and NK Neoplasms",
                                color: "LimeGreen",
                                code: "",
                                umls: "",
                            },
                            {
                                name: "Aggressive NK-Cell Leukemia (ANKL)",
                                type: "Mature T and NK Neoplasms",
                                color: "LimeGreen",
                                code: "",
                                umls: "",
                            },
                            {
                                name: "Anaplastic Large Cell Lymphoma (ALCL)",
                                type: "Mature T and NK Neoplasms",
                                color: "LimeGreen",
                                code: "C3720",
                                umls: "C0206180",
                                children: [
                                    {
                                        name: "Anaplastic Large-Cell Lymphoma ALK Negative (ALCLALKN)",
                                        type: "Mature T and NK Neoplasms",
                                        color: "LimeGreen",
                                        code: "",
                                        umls: "",
                                    },
                                    {
                                        name: "Anaplastic Large-Cell Lymphoma ALK Positive (ALCLALKP)",
                                        type: "Mature T and NK Neoplasms",
                                        color: "LimeGreen",
                                        code: "",
                                        umls: "",
                                    },
                                    {
                                        name: "Breast Implant-Associated Anaplastic Large-Cell Lymphoma (BIALCL)",
                                        type: "Mature T and NK Neoplasms",
                                        color: "LimeGreen",
                                        code: "",
                                        umls: "",
                                    }
                                ]
                            },
                            {
                                name: "Angioimmunoblastic T-Cell Lymphoma (AITL)",
                                type: "Mature T and NK Neoplasms",
                                color: "LimeGreen",
                                code: "C7528",
                                umls: "C0020981",
                            },
                            {
                                name: "Chronic Lymphoproliferative Disorder of NK Cells (CLPDNK)",
                                type: "Mature T and NK Neoplasms",
                                color: "LimeGreen",
                                code: "",
                                umls: "",
                            },
                            {
                                name: "Enteropathy-Associated T-Cell Lymphoma (EATL)",
                                type: "Mature T and NK Neoplasms",
                                color: "LimeGreen",
                                code: "",
                                umls: "",
                            },
                            {
                                name: "Extranodal NK-/T-Cell Lymphoma, Nasal Type (ENKL)",
                                type: "Mature T and NK Neoplasms",
                                color: "LimeGreen",
                                code: "",
                                umls: "",
                            },
                            {
                                name: "Follicular T-Cell Lymphoma (FTCL)",
                                type: "Mature T and NK Neoplasms",
                                color: "LimeGreen",
                                code: "",
                                umls: "",
                            },
                            {
                                name: "Hepatosplenic T-cell Lymphoma (HSTCL)",
                                type: "Mature T and NK Neoplasms",
                                color: "LimeGreen",
                                code: "",
                                umls: "",
                            },
                            {
                                name: "Hydroa Vacciniforme Like Lymphoproliferative Disorder (HVLL)",
                                type: "Mature T and NK Neoplasms",
                                color: "LimeGreen",
                                code: "",
                                umls: "",
                            },
                            {
                                name: "Indolent T-Cell Lymphoproliferative Disorder of the GI Tract (ITLPDGI)",
                                type: "Mature T and NK Neoplasms",
                                color: "LimeGreen",
                                code: "",
                                umls: "",
                            },
                            {
                                name: "Monomorphic Epitheliotropic Intestinal T-Cell Lymphoma (MEITL)",
                                type: "Mature T and NK Neoplasms",
                                color: "LimeGreen",
                                code: "",
                                umls: "",
                            },
                            {
                                name: "Mycosis Fungoides (MYCF)",
                                type: "Mature T and NK Neoplasms",
                                color: "LimeGreen",
                                code: "C3246",
                                umls: "C0026948",
                            },
                            {
                                name: "Nodal Peripheral T-Cell Lymphoma with TFH Phenotype (NPTLTFH)",
                                type: "Mature T and NK Neoplasms",
                                color: "LimeGreen",
                                code: "",
                                umls: "",
                            },
                            {
                                name: "Peripheral T-Cell lymphoma, NOS (PTCL)",
                                type: "Mature T and NK Neoplasms",
                                color: "LimeGreen",
                                code: "",
                                umls: "",
                            },
                            {
                                name: "Primary Cutaneous Acral CD8 Positive T-Cell Lymphoma (PCATCL)",
                                type: "Mature T and NK Neoplasms",
                                color: "LimeGreen",
                                code: "",
                                umls: "",
                            },
                            {
                                name: "Primary Cutaneous CD30 Positive T-Cell Lymphoproliferative Disorders (PCLPD)",
                                type: "Mature T and NK Neoplasms",
                                color: "LimeGreen",
                                code: "",
                                umls: "",
                                children: [
                                    {
                                        name: "Lymphomatoid Papulosis (LYP)",
                                        type: "Mature T and NK Neoplasms",
                                        color: "LimeGreen",
                                        code: "",
                                        umls: "",
                                    },
                                    {
                                        name: "Primary Cutaneous Anaplastic Large Cell Lymphoma (PCALCL)",
                                        type: "Mature T and NK Neoplasms",
                                        color: "LimeGreen",
                                        code: "",
                                        umls: "",
                                    }
                                ]
                            },
                            {
                                name: "Primary Cutaneous CD4 Positive Small/Medium T-Cell Lymphoproliferative Disorder (PCSMTPLD)",
                                type: "Mature T and NK Neoplasms",
                                color: "LimeGreen",
                                code: "",
                                umls: "",
                            },
                            {
                                name: "Primary Cutaneous CD8 Positive Aggressive Epidermotropic Cytotoxic T-Cell Lymphoma (PCAECTCL)",
                                type: "Mature T and NK Neoplasms",
                                color: "LimeGreen",
                                code: "",
                                umls: "",
                            },
                            {
                                name: "Primary Cutaneous Gamma Delta T-Cell Lymphoma (PCGDTCL)",
                                type: "Mature T and NK Neoplasms",
                                color: "LimeGreen",
                                code: "",
                                umls: "",
                            },
                            {
                                name: "Sezary Syndrome (SS)",
                                type: "Mature T and NK Neoplasms",
                                color: "LimeGreen",
                                code: "",
                                umls: "",
                            },
                            {
                                name: "Subcutaneous Panniculitis-Like T-Cell Lymphoma (SPTCL)",
                                type: "Mature T and NK Neoplasms",
                                color: "LimeGreen",
                                code: "",
                                umls: "",
                            },
                            {
                                name: "Systemic EBV Positive T-Cell Lymphoma of Childhood (SEBVTLC)",
                                type: "Mature T and NK Neoplasms",
                                color: "LimeGreen",
                                code: "",
                                umls: "",
                            },
                            {
                                name: "T-Cell Large Granular Lymphocytic Leukemia (TLGL)",
                                type: "Mature T and NK Neoplasms",
                                color: "LimeGreen",
                                code: "C4664",
                                umls: "C1955861",
                            },
                            {
                                name: "T-Cell Prolymphocytic Leukemia (TPLL)",
                                type: "Mature T and NK Neoplasms",
                                color: "LimeGreen",
                                code: "",
                                umls: "",
                            }
                        ]
                    },
                    {
                        name: "Posttransplant Lymphoproliferative Disorders (PTLD)",
                        type: "Posttransplant Lymphoproliferative Disorders",
                        color: "LimeGreen",
                        code: "",
                        umls: "",
                        children: [
                            {
                                name: "Classical Hodgkin Lymphoma PTLD (CHLPTLD)",
                                type: "Posttransplant Lymphoproliferative Disorders",
                                color: "LimeGreen",
                                code: "",
                                umls: "",
                            },
                            {
                                name: "Florid Follicular Hyperplasia PTLD (FHPTLD)",
                                type: "Posttransplant Lymphoproliferative Disorders",
                                color: "LimeGreen",
                                code: "",
                                umls: "",
                            },
                            {
                                name: "Infectious Mononucleosis PTLD (IMPTLD)",
                                type: "Posttransplant Lymphoproliferative Disorders",
                                color: "LimeGreen",
                                code: "",
                                umls: "",
                            },
                            {
                                name: "Monomorphic PTLD (B- and T-/NK-cell types) (MPTLD)",
                                type: "Posttransplant Lymphoproliferative Disorders",
                                color: "LimeGreen",
                                code: "",
                                umls: "",
                            },
                            {
                                name: "Plasmacytic Hyperplasia PTLD (PHPTLD)",
                                type: "Posttransplant Lymphoproliferative Disorders",
                                color: "LimeGreen",
                                code: "",
                                umls: "",
                            },
                            {
                                name: "Polymorphic PTLD (PPTLD)",
                                type: "Posttransplant Lymphoproliferative Disorders",
                                color: "LimeGreen",
                                code: "",
                                umls: "",
                            }
                        ]
                    },
                    {
                        name: "T-Lymphoblastic Leukemia/Lymphoma (TLL)",
                        type: "T-Lymphoblastic Leukemia/Lymphoma",
                        color: "LimeGreen",
                        code: "",
                        umls: "",
                        children: [
                            {
                                name: "Early T-Cell Precursor Lymphoblastic Leukemia (ETPLL)",
                                type: "T-Lymphoblastic Leukemia/Lymphoma",
                                color: "LimeGreen",
                                code: "",
                                umls: "",
                            },
                            {
                                name: "Natural Killer (NK) Cell Lymphoblastic Leukemia/Lymphoma (NKCLL)",
                                type: "T-Lymphoblastic Leukemia/Lymphoma",
                                color: "LimeGreen",
                                code: "",
                                umls: "",
                            }
                        ]
                    }
                ]
            }
        ] 
    }, 
    {
        name: "Myeloid (MYELOID)",
        type: "Blood Cancer",
        color: "LightSalmon",
        code: "C12434",
        umls: "C0005767",
        children: [
            {
                name: "Myeloid Atypical (MATPL)",
                type: "Blood Cancer, NOS",
                color: "LightSalmon",
                code: "",
                umls: "",
            },
            {
                name: "Myeloid Benign (MBGN)",
                type: "Blood Cancer, NOS",
                color: "LightSalmon",
                code: "",
                umls: "",
            },
            {
                name: "Myeloid Neoplasm (MNM)",
                type: "Blood Cancer, NOS",
                color: "LightSalmon",
                code: "",
                umls: "",
                children: [
                    {
                        name: "Acute Leukemias of Ambiguous Lineage (ALAL)",
                        type: "Leukemia",
                        color: "LightSalmon",
                        code: "",
                        umls: "",
                        children: [
                            {
                                name: "Acute Undifferentiated Leukemia (AUL)",
                                type: "Leukemia",
                                color: "LightSalmon",
                                code: "",
                                umls: "",
                            },
                            {
                                name: "Mixed Phenotype Acute Leukemia with t(9;22)(q34.1;q11.2); BCR-ABL1 (MPALBCRABL1)",
                                type: "Leukemia",
                                color: "LightSalmon",
                                code: "",
                                umls: "",
                            },
                        ]
                    },
                    {
                        name: "Acute Myeloid Leukemia (AML)",
                        type: "Leukemia",
                        color: "LightSalmon",
                        code: "C3171",
                        umls: "C0023467",
                        children: [
                            {
                                name: "AML with Myelodysplasia-Related Changes (AMLMRC)",
                                type: "Leukemia",
                                color: "LightSalmon",
                                code: "",
                                umls: "",
                            },
                            {
                                name: "AML with Recurrent Genetic Abnormalities (AMLRGA)",
                                type: "Leukemia",
                                color: "LightSalmon",
                                code: "",
                                umls: "",
                                children: [
                                    {
                                        name: "AML (megakaryoblastic) with t(1;22)(p13.3;q13.3);RBM15-MKL1 (AMLRBM15MKL1)",
                                        type: "Leukemia",
                                        color: "LightSalmon",
                                        code: "",
                                        umls: "",
                                    },
                                    {
                                        name: "AML with BCR-ABL1 (AMLBCRABL1)",
                                        type: "Leukemia",
                                        color: "LightSalmon",
                                        code: "",
                                        umls: "",
                                    },
                                    {
                                        name: "AML with Biallelic Mutations of CEBPA (AMLCEBPA)",
                                        type: "Leukemia",
                                        color: "LightSalmon",
                                        code: "",
                                        umls: "",
                                    },
                                    {
                                        name: "AML with Mutated NPM1 (AMLNPM1)",
                                        type: "Leukemia",
                                        color: "LightSalmon",
                                        code: "",
                                        umls: "",
                                    },
                                    {
                                        name: "AML with Mutated RUNX1 (AMLRUNX1)",
                                        type: "Leukemia",
                                        color: "LightSalmon",
                                        code: "",
                                        umls: "",
                                    },
                                    {
                                        name: "AML with Variant RARA translocation (AMLRARA)",
                                        type: "Leukemia",
                                        color: "LightSalmon",
                                        code: "",
                                        umls: "",
                                    },
                                    {
                                        name: "AML with inv(16)(p13.1q22) or t(16;16)(p13.1;q22);CBFB-MYH11 (AMLCBFBMYH11)",
                                        type: "Leukemia",
                                        color: "LightSalmon",
                                        code: "",
                                        umls: "",
                                    },
                                    {
                                        name: "AML with inv(3)(q21.3q26.2) or t(3;3)(q21.3;q26.2); GATA2, MECOM (AMLGATA2MECOM)",
                                        type: "Leukemia",
                                        color: "LightSalmon",
                                        code: "",
                                        umls: "",
                                    },
                                    {
                                        name: "AML with t(6;9)(p23;q34.1);DEK-NUP214 (AMLDEKNUP214)",
                                        type: "Leukemia",
                                        color: "LightSalmon",
                                        code: "",
                                        umls: "",
                                    },
                                    {
                                        name: "AML with t(8;21)(q22;q22.1);RUNX1-RUNX1T1 (AMLRUNX1RUNX1T1)",
                                        type: "Leukemia",
                                        color: "LightSalmon",
                                        code: "",
                                        umls: "",
                                    },
                                    {
                                        name: "AML with t(9;11)(p21.3;q23.3);MLLT3-KMT2A (AMLMLLT3KMT2A)",
                                        type: "Leukemia",
                                        color: "LightSalmon",
                                        code: "",
                                        umls: "",
                                    },
                                    {
                                        name: "APL with PML-RARA (APLPMLRARA)",
                                        type: "Leukemia",
                                        color: "LightSalmon",
                                        code: "",
                                        umls: "",
                                    }
                                ]
                            },
                            {
                                name: "AML, NOS (AMLNOS)",
                                type: "Leukemia",
                                color: "LightSalmon",
                                code: "",
                                umls: "",
                                children: [
                                    {
                                        name: "AML with Maturation (AM)",
                                        type: "Leukemia",
                                        color: "LightSalmon",
                                        code: "",
                                        umls: "",
                                    },
                                    {
                                        name: "AML with Minimal Differentiation (AMLMD)",
                                        type: "Leukemia",
                                        color: "LightSalmon",
                                        code: "",
                                        umls: "",
                                    },
                                    {
                                        name: "AML without Maturation (AWM)",
                                        type: "Leukemia",
                                        color: "LightSalmon",
                                        code: "",
                                        umls: "",
                                    },
                                    {
                                        name: "Acute Basophilic Leukemia (ABL)",
                                        type: "Leukemia",
                                        color: "LightSalmon",
                                        code: "",
                                        umls: "",
                                    },
                                    {
                                        name: "Acute Megakaryoblastic Leukemia (AMKL)",
                                        type: "Leukemia",
                                        color: "LightSalmon",
                                        code: "",
                                        umls: "",
                                    },
                                    {
                                        name: "Acute Monoblastic/Monocytic Leukemia (AMOL)",
                                        type: "Leukemia",
                                        color: "LightSalmon",
                                        code: "C4861",
                                        umls: "C0023465",
                                    },
                                    {
                                        name: "Acute Myelomonocytic Leukemia (AMML)",
                                        type: "Leukemia",
                                        color: "LightSalmon",
                                        code: "",
                                        umls: "",
                                    },
                                    {
                                        name: "Acute Panmyelosis with Myelofibrosis (APMF)",
                                        type: "Leukemia",
                                        color: "LightSalmon",
                                        code: "",
                                        umls: "",
                                    },
                                    {
                                        name: "Pure Erythroid Leukemia (PERL)",
                                        type: "Leukemia",
                                        color: "LightSalmon",
                                        code: "",
                                        umls: "",
                                    }
                                ]
                            },
                            {
                                name: "Myeloid Proliferations Related to Down Syndrome (MPRDS)",
                                type: "Leukemia",
                                color: "LightSalmon",
                                code: "",
                                umls: "",
                                children: [
                                    {
                                        name: "Myeloid Leukemia Associated with Down Syndrome (MLADS)",
                                        type: "Leukemia",
                                        color: "LightSalmon",
                                        code: "",
                                        umls: "",
                                    },
                                    {
                                        name: "Transient Abnormal Myelopoiesis (TAM)",
                                        type: "Leukemia",
                                        color: "LightSalmon",
                                        code: "",
                                        umls: "",
                                    }
                                ]
                            },
                            {
                                name: "Myeloid Sarcoma (MS)",
                                type: "Leukemia",
                                color: "LightSalmon",
                                code: "",
                                umls: "",
                            },
                            {
                                name: "Therapy-Related Myeloid Neoplasms (TMN)",
                                type: "Leukemia",
                                color: "LightSalmon",
                                code: "",
                                umls: "",
                                children: [
                                    {
                                        name: "Therapy-Related Acute Myeloid Leukemia (TAML)",
                                        type: "Leukemia",
                                        color: "LightSalmon",
                                        code: "",
                                        umls: "",
                                    },
                                    {
                                        name: "Therapy-Related Myelodysplastic Syndrome (TMDS)",
                                        type: "Leukemia",
                                        color: "LightSalmon",
                                        code: "",
                                        umls: "",
                                    }
                                ] 
                            }
                        ]
                    },
                    {
                        name: "Blastic Plasmacytoid Dendritic Cell Neoplasm (BPDCN)",
                        type: "Blastic Plasmacytoid Dendritic Cell Neoplasm",
                        color: "LightSalmon",
                        code: "C7203",
                        umls: "C1301363",
                    },
                    {
                        name: "Histiocytic and Dendritic Cell Neoplasms (HDCN)",
                        type: "Histiocytosis",
                        color: "LightSalmon",
                        code: "C3106",
                        umls: "C0019618",
                        children: [
                            {
                                name: "Disseminated Juvenile Xanthogranuloma (JXG)",
                                type: "Histiocytosis",
                                color: "LightSalmon",
                                code: "",
                                umls: "",
                            },
                            {
                                name: "Erdheim-Chester Disease (ECD)",
                                type: "Histiocytosis",
                                color: "LightSalmon",
                                code: "C53972",
                                umls: "C0878675",
                            },
                            {
                                name: "Fibroblastic Reticular Cell Tumor (FRCT)",
                                type: "Histiocytosis",
                                color: "LightSalmon",
                                code: "",
                                umls: "",
                            },
                            {
                                name: "Follicular Dendritic Cell Sarcoma (FDCS)",
                                type: "Soft Tissue Sarcoma",
                                color: "LightYellow",
                                code: "C9281",
                                umls: "C1260325",
                            },
                            {
                                name: "Histiocytic Sarcoma (HS)",
                                type: "Histiocytosis",
                                color: "LightSalmon",
                                code: "",
                                umls: "",
                            },
                            {
                                name: "Indeterminate Dendritic Cell Tumor (IDCT)",
                                type: "Histiocytosis",
                                color: "LightSalmon",
                                code: "",
                                umls: "",
                            },
                            {
                                name: "Interdigitating Dendritic Cell Sarcoma (IDCS)",
                                type: "Soft Tissue Sarcoma",
                                color: "LightYellow",
                                code: "C9282",
                                umls: "C1260326",
                            },
                            {
                                name: "Langerhans Cell Histiocytosis (LCH)",
                                type: "Histiocytosis",
                                color: "LightSalmon",
                                code: "C3107",
                                umls: "C0019621",
                            },
                            {
                                name: "Langerhans Cell Sarcoma (LCS)",
                                type: "Histiocytosis",
                                color: "LightSalmon",
                                code: "",
                                umls: "",
                            },
                            {
                                name: "Rosai-Dorfman Disease (RDD)",
                                type: "Histiocytosis",
                                color: "LightSalmon",
                                code: "C36075",
                                umls: "C0019625",
                            }
                        ] 
                    },
                    {
                        name: "Mastocytosis (MCD)",
                        type: "Mastocytosis",
                        color: "LightSalmon",
                        code: "",
                        umls: "",
                        children: [
                            {
                                name: "Cutaneous Mastocytosis (CMCD)",
                                type: "Mastocytosis",
                                color: "LightSalmon",
                                code: "",
                                umls: "",
                            },
                            {
                                name: "Mast Cell Sarcoma (MCSL)",
                                type: "Mastocytosis",
                                color: "LightSalmon",
                                code: "",
                                umls: "",
                            },
                            {
                                name: "Systemic Mastocytosis (SM)",
                                type: "Mastocytosis",
                                color: "LightSalmon",
                                code: "C9235",
                                umls: "C0221013",
                                children: [
                                    {
                                        name: "Aggressive Systemic Mastocytosis (ASM)",
                                        type: "Mastocytosis",
                                        color: "LightSalmon",
                                        code: "",
                                        umls: "",
                                    },
                                    {
                                        name: "Indolent Systemic Mastocytosis (ISM)",
                                        type: "Mastocytosis",
                                        color: "LightSalmon",
                                        code: "",
                                        umls: "",
                                    },
                                    {
                                        name: "Mast Cell Leukemia (SMMCL)",
                                        type: "Mastocytosis",
                                        color: "LightSalmon",
                                        code: "",
                                        umls: "",
                                    },
                                    {
                                        name: "Smoldering Systemic Mastocytosis (SSM)",
                                        type: "Mastocytosis",
                                        color: "LightSalmon",
                                        code: "",
                                        umls: "",
                                    },
                                    {
                                        name: "Systemic Mastocytosis with an Associated Hematological Neoplasm (SMAHN)",
                                        type: "Mastocytosis",
                                        color: "LightSalmon",
                                        code: "",
                                        umls: "",
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: "Myelodysplastic Syndromes (MDS)",
                        type: "Myelodysplastic Syndromes",
                        color: "LightSalmon",
                        code: "C3247",
                        umls: "C3463824",
                        children: [
                            {
                                name: "MDS with Excess Blasts (MDSEB)",
                                type: "Myelodysplastic Syndromes",
                                color: "LightSalmon",
                                code: "",
                                umls: "",
                                children: [
                                    {
                                        name: "MDS with excess blasts-1 (MDSEB1)",
                                        type: "Myelodysplastic Syndromes",
                                        color: "LightSalmon",
                                        code: "",
                                        umls: "",
                                    },
                                    {
                                        name: "MDS with excess blasts-2 (MDSEB2)",
                                        type: "Myelodysplastic Syndromes",
                                        color: "LightSalmon",
                                        code: "",
                                        umls: "",
                                    }
                                ]
                            },
                            {
                                name: "MDS with Isolated Del(5q) (MDSID5Q)",
                                type: "Myelodysplastic Syndromes",
                                color: "LightSalmon",
                                code: "",
                                umls: "",
                            },
                            {
                                name: "MDS with Multilineage Dysplasia (MDSMD)",
                                type: "Myelodysplastic Syndromes",
                                color: "LightSalmon",
                                code: "",
                                umls: "",
                            },
                            {
                                name: "MDS with Ring Sideroblasts (MDSRS)",
                                type: "Myelodysplastic Syndromes",
                                color: "LightSalmon",
                                code: "",
                                umls: "",
                                children: [
                                    {
                                        name: "MDS with Ring Sideroblasts and Multilineage Dysplasia (MDSRSMD)",
                                        type: "Myelodysplastic Syndromes",
                                        color: "LightSalmon",
                                        code: "",
                                        umls: "",
                                    },
                                    {
                                        name: "MDS with Ring Sideroblasts and Single Lineage Dysplasia (MDSRSSLD)",
                                        type: "Myelodysplastic Syndromes",
                                        color: "LightSalmon",
                                        code: "",
                                        umls: "",
                                    }
                                ]
                            },
                            {
                                name: "MDS with Single Lineage Dysplasia (MDSSLD)",
                                type: "Myelodysplastic Syndromes",
                                color: "LightSalmon",
                                code: "",
                                umls: "",
                            },
                            {
                                name: "MDS, Unclassifiable (MDSU)",
                                type: "Myelodysplastic Syndromes",
                                color: "LightSalmon",
                                code: "",
                                umls: "",
                            },
                            {
                                name: "Refractory Cytopenia of Childhood (RCYC)",
                                type: "Myelodysplastic Syndromes",
                                color: "LightSalmon",
                                code: "",
                                umls: "",
                            }
                        ]
                    },
                    {
                        name: "Myelodysplastic/Myeloproliferative Neoplasms (MDS/MPN)",
                        type: "Myelodysplastic/Myeloproliferative Neoplasms",
                        color: "LightSalmon",
                        code: "",
                        umls: "",
                        children: [
                            {
                                name: "Atypical Chronic Myeloid Leukemia, BCR-ABL1- (ACML)",
                                type: "Myelodysplastic/Myeloproliferative Neoplasms",
                                color: "LightSalmon",
                                code: "",
                                umls: "",
                            },
                            {
                                name: "Chronic Myelomonocytic Leukemia (CMML)",
                                type: "Myelodysplastic/Myeloproliferative Neoplasms",
                                color: "LightSalmon",
                                code: "C3178",
                                umls: "C0023480",
                                children: [
                                    {
                                        name: "Chronic Myelomonocytic Leukemia-0 (CMML0)",
                                        type: "Myelodysplastic/Myeloproliferative Neoplasms",
                                        color: "LightSalmon",
                                        code: "",
                                        umls: "",
                                    },
                                    {
                                        name: "Chronic Myelomonocytic Leukemia-1 (CMML1)",
                                        type: "Myelodysplastic/Myeloproliferative Neoplasms",
                                        color: "LightSalmon",
                                        code: "",
                                        umls: "",
                                    },
                                    {
                                        name: "Chronic Myelomonocytic Leukemia-2 (CMML2)",
                                        type: "Myelodysplastic/Myeloproliferative Neoplasms",
                                        color: "LightSalmon",
                                        code: "",
                                        umls: "",
                                    }
                                ]
                            },
                            {
                                name: "Juvenile Myelomonocytic Leukemia (JMML)",
                                type: "Myelodysplastic/Myeloproliferative Neoplasms",
                                color: "LightSalmon",
                                code: "",
                                umls: "",
                            },
                            {
                                name: "MDS/MPN with Ring Sideroblasts and Thrombocytosis (MDSMPNRST)",
                                type: "Myelodysplastic/Myeloproliferative Neoplasms",
                                color: "LightSalmon",
                                code: "",
                                umls: "",
                            },
                            {
                                name: "MDS/MPN, Unclassifiable (MDSMPNU)",
                                type: "Myelodysplastic/Myeloproliferative Neoplasms",
                                color: "LightSalmon",
                                code: "",
                                umls: "",
                            }
                        ]
                    },
                    {
                        name: "Myeloid Neoplasms with Germ Line Predisposition (MNGLP)",
                        type: "Myeloid Neoplasms with Germ Line Predisposition",
                        color: "LightSalmon",
                        code: "",
                        umls: "",
                    },
                    {
                        name: "Myeloid/Lymphoid Neoplasms with Eosinophilia and Rearrangement of PDGFRA/PDGFRB or FGFR1 or with PCM1-JAK2 (MLNER)",
                        type: "Leukemia",
                        color: "LightSalmon",
                        code: "",
                        umls: "",
                        children: [
                            {
                                name: "Myeloid/Lymphoid Neoplasms with FGFR1 Rearrangement (MLNFGFR1)",
                                type: "Leukemia",
                                color: "LightSalmon",
                                code: "",
                                umls: "",
                            },
                            {
                                name: "Myeloid/Lymphoid Neoplasms with PCM1-JAK2 (MLNPCM1JAK2)",
                                type: "Leukemia",
                                color: "LightSalmon",
                                code: "",
                                umls: "",
                            },
                            {
                                name: "Myeloid/Lymphoid Neoplasms with PDGFRA Rearrangement (MLNPDGFRA)",
                                type: "Leukemia",
                                color: "LightSalmon",
                                code: "",
                                umls: "",
                            },
                            {
                                name: "Myeloid/Lymphoid Neoplasms with PDGFRB Rearrangement (MLNPDGFRB)",
                                type: "Leukemia",
                                color: "LightSalmon",
                                code: "",
                                umls: "",
                            }
                        ]
                    },
                    {
                        name: "Myeloproliferative Neoplasms (MPN)",
                        type: "Myeloproliferative Neoplasms",
                        color: "LightSalmon",
                        code: "C4345",
                        umls: "C1292778",
                        children: [
                            {
                                name: "Chronic Eosinophilic Leukemia, NOS (CELNOS)",
                                type: "Myeloproliferative Neoplasms",
                                color: "LightSalmon",
                                code: "",
                                umls: "",
                            },
                            {
                                name: "Chronic Myelogenous Leukemia (CML)",
                                type: "Myeloproliferative Neoplasms",
                                color: "LightSalmon",
                                code: "C3172",
                                umls: "C0023470",
                                children: [
                                    {
                                        name: "Chronic Myeloid Leukemia, BCR-ABL1+ (CMLBCRABL1)",
                                        type: "Myeloproliferative Neoplasms",
                                        color: "LightSalmon",
                                        code: "",
                                        umls: "",
                                    }
                                ]
                            },
                            {
                                name: "Chronic Neutrophilic Leukemia (CNL)",
                                type: "Myeloproliferative Neoplasms",
                                color: "LightSalmon",
                                code: "",
                                umls: "",
                            },
                            {
                                name: "Essential Thrombocythemia (ET)",
                                type: "Myeloproliferative Neoplasms",
                                color: "LightSalmon",
                                code: "",
                                umls: "",
                                children: [
                                    {
                                        name: "Essential Thrombocythemia Myelofibrosis (ETMF)",
                                        type: "Myeloproliferative Neoplasms",
                                        color: "LightSalmon",
                                        code: "",
                                        umls: "",
                                    }
                                ]
                            },
                            {
                                name: "Myeloproliferative Neoplasms, Unclassifiable (MPNU)",
                                type: "Myeloproliferative Neoplasms",
                                color: "LightSalmon",
                                code: "",
                                umls: "",
                            },
                            {
                                name: "Polycythemia Vera (PV)",
                                type: "Myeloproliferative Neoplasms",
                                color: "LightSalmon",
                                code: "",
                                umls: "",
                                children: [
                                    {
                                        name: "Polycythaemia Vera Myelofibrosis (PVMF)",
                                        type: "Myeloproliferative Neoplasms",
                                        color: "LightSalmon",
                                        code: "",
                                        umls: "",
                                    }
                                ]
                            },
                            {
                                name: "Primary Myelofibrosis (PMF)",
                                type: "Myeloproliferative Neoplasms",
                                color: "LightSalmon",
                                code: "",
                                umls: "",
                                children: [
                                    {
                                        name: "Primary Myelofibrosis, Prefibrotic/Early Stage (PMFPES)",
                                        type: "Myeloproliferative Neoplasms",
                                        color: "LightSalmon",
                                        code: "",
                                        umls: "",
                                    },
                                    {
                                        name: "Primary Myelofibrosis, Overt Fibrotic Stage (PMFOFS)",
                                        type: "Myeloproliferative Neoplasms",
                                        color: "LightSalmon",
                                        code: "",
                                        umls: "",
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: "Other (OTHER)",
        type: "Other Cancer",
        color: "Black",
        code: "C17649",
        umls: "C0205394",
        children: [
            {
                name: "Adenocarcinoma In Situ (AIS)",
                type: "Adenocarcinoma In Situ",
                color: "Black",
                code: "C4123",
                umls: "C0334276",
            },
            {
                name: "Cancer of Unknown Primary (CUP)",
                type: "Cancer of Unknown Primary",
                color: "Black",
                code: "C3812",
                umls: "C0220647",
                children: [
                    {
                        name: "Acinar Cell Carcinoma, NOS (ACN)",
                        type: "Cancer of Unknown Primary",
                        color: "Black",
                        code: "",
                        umls: "",
                    },
                    {
                        name: "Adenocarcinoma, NOS (ADNOS)",
                        type: "Cancer of Unknown Primary",
                        color: "Black",
                        code: "",
                        umls: "",
                    },
                    {
                        name: "Cancer of Unknown Primary, NOS (CUPNOS)",
                        type: "Cancer of Unknown Primary",
                        color: "Black",
                        code: "",
                        umls: "",
                    },
                    {
                        name: "Neuroendocrine Carcinoma, NOS (NECNOS)",
                        type: "Cancer of Unknown Primary",
                        color: "Black",
                        code: "",
                        umls: "",
                    },
                    {
                        name: "Neuroendocrine Tumor, NOS (NETNOS)",
                        type: "Cancer of Unknown Primary",
                        color: "Black",
                        code: "",
                        umls: "",
                    },
                    {
                        name: "Poorly Differentiated Carcinoma, NOS (PDC)",
                        type: "Cancer of Unknown Primary",
                        color: "Black",
                        code: "",
                        umls: "",
                    },
                    {
                        name: "Small Cell Carcinoma of Unknown Primary (SCUP)",
                        type: "Cancer of Unknown Primary",
                        color: "Black",
                        code: "",
                        umls: "",
                    },
                    {
                        name: "Squamous Cell Carcinoma, NOS (SCCNOS)",
                        type: "Cancer of Unknown Primary",
                        color: "Black",
                        code: "",
                        umls: "",
                    },
                    {
                        name: "Undifferentiated Malignant Neoplasm (UDMN)",
                        type: "Cancer of Unknown Primary",
                        color: "Black",
                        code: "C36051",
                        umls: "C1336860",
                    }
                ]
            },
            {
                name: "Extra Gonadal Germ Cell Tumor (EGCT)",
                type: "Germ Cell Tumor",
                color: "Black",
                code: "",
                umls: "",
            },
            {
                name: "Mixed Cancer Types (MIXED)",
                type: "Cancer of Unknown Primary",
                color: "Black",
                code: "",
                umls: "",
            }
        ]
    },
    {
        name: "Ovary/Fallopian Tube (OVARY)",
        type: "Ovarian/Fallopian Tube Cancer",
        color: "LightBlue",
        code: "C12404",
        umls: "C0029939",
        children: [
            {
                name: "Ovarian Cancer, Other (OOVC)",
                type: "Ovarian Cancer",
                color: "LightBlue",
                code: "",
                umls: "",
                children: [
                    {
                        name: "High-Grade Neuroendocrine Carcinoma of the Ovary (HGONEC)",
                        type: "Ovarian Cancer",
                        color: "LightBlue",
                        code: "",
                        umls: "",
                    },
                    {
                        name: "High-Grade Serous Fallopian Tube Cancer (HGSFT)",
                        type: "Ovarian Cancer",
                        color: "LightBlue",
                        code: "",
                        umls: "",
                    },
                    {
                        name: "Ovarian Choriocarcinoma, NOS (OCNOS)",
                        type: "Ovarian Cancer",
                        color: "LightBlue",
                        code: "",
                        umls: "",
                    }
                ]
            },
            {
                name: "Ovarian Epithelial Tumor (OVT)",
                type: "Ovarian Cancer",
                color: "LightBlue",
                code: "C4381",
                umls: "C0341823",
                children: [
                    {
                        name: "Brenner Tumor (BTOV)",
                        type: "Ovarian Cancer",
                        color: "LightBlue",
                        code: "C39954",
                        umls: "CL323981",
                        children: [
                            {
                                name: "Brenner Tumor, Benign (BTBEOV)",
                                type: "Ovarian Cancer",
                                color: "LightBlue",
                                code: "",
                                umls: "",
                            },
                            {
                                name: "Brenner Tumor, Borderline (BTBOV)",
                                type: "Ovarian Cancer",
                                color: "LightBlue",
                                code: "",
                                umls: "",
                            },
                            {
                                name: "Brenner Tumor, Malignant (BTMOV)",
                                type: "Ovarian Cancer",
                                color: "LightBlue",
                                code: "",
                                umls: "",
                            }
                        ]
                    },
                    {
                        name: "Clear Cell Borderline Ovarian Tumor (CCBOV)",
                        type: "Ovarian Cancer",
                        color: "LightBlue",
                        code: "C40080",
                        umls: "C0279676",
                    },
                    {
                        name: "Clear Cell Ovarian Cancer (CCOV)",
                        type: "Ovarian Cancer",
                        color: "LightBlue",
                        code: "C40076",
                        umls: "C0346164",
                    },
                    {
                        name: "Endometrioid Borderline Ovarian Tumor (EBOV)",
                        type: "Ovarian Cancer",
                        color: "LightBlue",
                        code: "C7983",
                        umls: "C0334338",
                    },
                    {
                        name: "Endometrioid Ovarian Cancer (EOV)",
                        type: "Ovarian Cancer",
                        color: "LightBlue",
                        code: "C7979",
                        umls: "C0346163",
                    },
                    {
                        name: "Mixed Ovarian Carcinoma (MXOV)",
                        type: "Ovarian Cancer",
                        color: "LightBlue",
                        code: "C40090",
                        umls: "C0279392",
                    },
                    {
                        name: "Mucinous Borderline Ovarian Tumor (MBOV)",
                        type: "Ovarian Cancer",
                        color: "LightBlue",
                        code: "C40036",
                        umls: "C0279664",
                    },
                    {
                        name: "Mucinous Ovarian Cancer (MOV)",
                        type: "Ovarian Cancer",
                        color: "LightBlue",
                        code: "C5242",
                        umls: "C1335168",
                    },
                    {
                        name: "Ovarian Carcinosarcoma/Malignant Mixed Mesodermal Tumor (OCS)",
                        type: "Ovarian Cancer",
                        color: "LightBlue",
                        code: "C9192",
                        umls: "C0392998",
                    },
                    {
                        name: "Ovarian Seromucinous Adenoma (OSMAD)",
                        type: "Ovarian Cancer",
                        color: "LightBlue",
                        code: "",
                        umls: "",
                    },
                    {
                        name: "Ovarian Seromucinous Borderline Tumor (OSMBT)",
                        type: "Ovarian Cancer",
                        color: "LightBlue",
                        code: "C40038",
                        umls: "C1511264",
                    },
                    {
                        name: "Ovarian Seromucinous Carcinoma (OSMCA)",
                        type: "Ovarian Cancer",
                        color: "LightBlue",
                        code: "C40090",
                        umls: "C0279392",
                    },
                    {
                        name: "Serous Borderline Ovarian Tumor (SBOV)",
                        type: "Ovarian Cancer",
                        color: "LightBlue",
                        code: "",
                        umls: "C0279662",
                    },
                    {
                        name: "Serous Borderline Ovarian Tumor, Micropapillary (SBMOV)",
                        type: "Ovarian Cancer",
                        color: "LightBlue",
                        code: "",
                        umls: "",
                    },
                    {
                        name: "Serous Ovarian Cancer (SOC)",
                        type: "Ovarian Cancer",
                        color: "LightBlue",
                        code: "C7550",
                        umls: "C1335177",
                        children: [
                            {
                                name: "High-Grade Serous Ovarian Cancer (HGSOC)",
                                type: "Ovarian Cancer",
                                color: "LightBlue",
                                code: "",
                                umls: "CL446431",
                            },
                            {
                                name: "Low-Grade Serous Ovarian Cancer (LGSOC)",
                                type: "Ovarian Cancer",
                                color: "LightBlue",
                                code: "",
                                umls: "CL446432",
                            }
                        ]
                    },
                    {
                        name: "Small Cell Carcinoma of the Ovary (SCCO)",
                        type: "Ovarian Cancer",
                        color: "LightBlue",
                        code: "C27390",
                        umls: "C2212006",
                    }
                ]
            },
            {
                name: "Ovarian Germ Cell Tumor (OGCT)",
                type: "Germ Cell Tumor",
                color: "LightBlue",
                code: "C3873",
                umls: "C0238324",
                children: [
                    {
                        name: "Dysgerminoma (ODYS)",
                        type: "Germ Cell Tumor",
                        color: "LightBlue",
                        code: "C8106",
                        umls: "C0346185",
                    },
                    {
                        name: "Embryonal Carcinoma (OEC)",
                        type: "Germ Cell Tumor",
                        color: "LightBlue",
                        code: "C8108",
                        umls: "C0346183",
                    },
                    {
                        name: "Immature Teratoma (OIMT)",
                        type: "Germ Cell Tumor",
                        color: "LightBlue",
                        code: "C8111",
                        umls: "C0346182",
                    },
                    {
                        name: "Mature Teratoma (OMT)",
                        type: "Germ Cell Tumor",
                        color: "LightBlue",
                        code: "C8112",
                        umls: "C1334637",
                    },
                    {
                        name: "Mixed Germ Cell Tumor (OMGCT)",
                        type: "Germ Cell Tumor",
                        color: "LightBlue",
                        code: "C8114",
                        umls: "C0280135",
                    },
                    {
                        name: "Polyembryoma (OPE)",
                        type: "Germ Cell Tumor",
                        color: "LightBlue",
                        code: "C39990",
                        umls: "C1514199",
                    },
                    {
                        name: "Yolk Sac Tumor (OYST)",
                        type: "Germ Cell Tumor",
                        color: "LightBlue",
                        code: "C8107",
                        umls: "C0346188",
                    }
                ]
            },
            {
                name: "Sex Cord Stromal Tumor (SCST)",
                type: "Sex Cord Stromal Tumor",
                color: "LightBlue",
                code: "C4862",
                umls: "C0600113",
                children: [
                    {
                        name: "Fibrothecoma (FT)",
                        type: "Sex Cord Stromal Tumor",
                        color: "LightBlue",
                        code: "",
                        umls: "",
                    },
                    {
                        name: "Gonadoblastoma (OGBL)",
                        type: "Sex Cord Stromal Tumor",
                        color: "LightBlue",
                        code: "C39985",
                        umls: "C1518716",
                    },
                    {
                        name: "Granulosa Cell Tumor (GRCT)",
                        type: "Sex Cord Stromal Tumor",
                        color: "LightBlue",
                        code: "C3070",
                        umls: "C0018206",
                    },
                    {
                        name: "Sertoli-Leydig Cell Tumor (SLCT)",
                        type: "Sex Cord Stromal Tumor",
                        color: "LightBlue",
                        code: "C2880",
                        umls: "C0003810",
                    },
                    {
                        name: "Steroid Cell Tumor, NOS (SCT)",
                        type: "Sex Cord Stromal Tumor",
                        color: "LightBlue",
                        code: "",
                        umls: "",
                    }
                ]
            }
        ]
    },
    {
        name: "Pancreas (PANCREAS)",
        type: "Pancreatic Cancer",
        color: "Purple",
        code: "C12393",
        umls: "C0030274",
        children: [
            {
                name: "Acinar Cell Carcinoma of the Pancreas (PAAC)",
                type: "Pancreatic Cancer",
                color: "Purple",
                code: "C7977",
                umls: "C0279661",
            },
            {
                name: "Adenosquamous Carcinoma of the Pancreas (PAASC)",
                type: "Pancreatic Cancer",
                color: "Purple",
                code: "C5721",
                umls: "C1335299",
            },
            {
                name: "Cystic Tumor of the Pancreas (PACT)",
                type: "Pancreatic Cancer",
                color: "Purple",
                code: "C41247",
                umls: "C1518872",
                children: [
                    {
                        name: "Intraductal Oncocytic Papillary Neoplasm (IOPN)",
                        type: "Pancreatic Cancer",
                        color: "Purple",
                        code: "",
                        umls: "",
                    },
                    {
                        name: "Intraductal Papillary Mucinous Neoplasm (IPMN)",
                        type: "Pancreatic Cancer",
                        color: "Purple",
                        code: "C38342",
                        umls: "C1518869",
                    },
                    {
                        name: "Intraductal Tubulopapillary Neoplasm (ITPN)",
                        type: "Pancreatic Cancer",
                        color: "Purple",
                        code: "",
                        umls: "",
                    },
                    {
                        name: "Mucinous Cystic Neoplasm (MCN)",
                        type: "Pancreatic Cancer",
                        color: "Purple",
                        code: "C41247",
                        umls: "C1518872",
                    },
                    {
                        name: "Serous Cystadenoma of the Pancreas (PSC)",
                        type: "Pancreatic Cancer",
                        color: "Purple",
                        code: "C5712",
                        umls: "C1335316",
                    }
                ]
            },
            {
                name: "Pancreatic Adenocarcinoma (PAAD)",
                type: "Pancreatic Cancer",
                color: "Purple",
                code: "C8294",
                umls: "C0281361",
            },
            {
                name: "Pancreatic Neuroendocrine Carcinoma (PANEC)",
                type: "Pancreatic Cancer",
                color: "Purple",
                code: "",
                umls: "",
            },
            {
                name: "Pancreatic Neuroendocrine Tumor (PANET)",
                type: "Pancreatic Cancer",
                color: "Purple",
                code: "C27720",
                umls: "C1337011",
            },
            {
                name: "Pancreatoblastoma (PB)",
                type: "Pancreatic Cancer",
                color: "Purple",
                code: "C4265",
                umls: "C0334489",
            },
            {
                name: "Solid Pseudopapillary Neoplasm of the Pancreas (SPN)",
                type: "Pancreatic Cancer",
                color: "Purple",
                code: "C37212",
                umls: "C1336030",
            },
            {
                name: "Undifferentiated Carcinoma of the Pancreas (UCP)",
                type: "Pancreatic Cancer",
                color: "Purple",
                code: "C5722",
                umls: "C1336861",
                children: [
                    {
                        name: "Osteoclastic Giant Cell Tumor (OSGCT)",
                        type: "Pancreatic Cancer",
                        color: "Purple",
                        code: "",
                        umls: "",
                    }
                ]
            }
        ]
    },
    {
        name: "Penis (PENIS)",
        type: "Penile Cancer",
        color: "Blue",
        code: "C12409",
        umls: "C0030851",
        children: [
            {
                name: "Penile Squamous Cell Carcinoma (PSCC)",
                type: "Penile Cancer",
                color: "Blue",
                code: "C7729",
                umls: "C0238348",
                children: [
                    {
                        name: "Basaloid Penile Squamous Cell Carcinoma (BPSCC)",
                        type: "Penile Cancer",
                        color: "Blue",
                        code: "C6980",
                        umls: "C1332462",
                    },
                    {
                        name: "Verrucous Penile Squamous Cell Carcinoma (VPSCC)",
                        type: "Penile Cancer",
                        color: "Blue",
                        code: "C6982",
                        umls: "C1336955",
                    },
                    {
                        name: "Warty Penile Squamous Cell Carcinoma (WPSCC)",
                        type: "Penile Cancer",
                        color: "Blue",
                        code: "C6981",
                        umls: "C1337009",
                    }
                ]
            }
        ]
    },
    {
        name: "Peripheral Nervous System (PNS)",
        type: "Peripheral Nervous System Cancer",
        color: "Gray",
        code: "C12465",
        umls: "C0206417",
        children: [
            {
                name: "Ganglioneuroblastoma (GNBL)",
                type: "Peripheral Nervous System",
                color: "Gray",
                code: "C3790",
                umls: "C0206718",
            },
            {
                name: "Ganglioneuroma (GN)",
                type: "Peripheral Nervous System",
                color: "Gray",
                code: "",
                umls: "",
            },
            {
                name: "Nerve Sheath Tumor (NST)",
                type: "Nerve Sheath Tumor",
                color: "Gray",
                code: "C4972",
                umls: "C0206727",
                children: [
                    {
                        name: "Malignant Peripheral Nerve Sheath Tumor (MPNST)",
                        type: "Nerve Sheath Tumor",
                        color: "Gray",
                        code: "C3798",
                        umls: "C0751690",
                    },
                    {
                        name: "Neurofibroma (NFIB)",
                        type: "Nerve Sheath Tumor",
                        color: "Gray",
                        code: "C3272",
                        umls: "C0027830",
                    },
                    {
                        name: "Schwannoma (SCHW)",
                        type: "Nerve Sheath Tumor",
                        color: "Gray",
                        code: "C3269",
                        umls: "C0027809",
                        children: [
                            {
                                name: "Cellular Schwannoma (CSCHW)",
                                type: "Nerve Sheath Tumor",
                                color: "Gray",
                                code: "C4724",
                                umls: "C0431124",
                            },
                            {
                                name: "Melanotic Schwannoma (MSCHW)",
                                type: "Nerve Sheath Tumor",
                                color: "Gray",
                                code: "C6970",
                                umls: "C1306247",
                            }
                        ]
                    }
                ]
            },
            {
                name: "Neuroblastoma (NBL)",
                type: "Peripheral Nervous System",
                color: "Gray",
                code: "C3270",
                umls: "C0027819",
            }
        ]
    },
    {
        name: "Peritoneum (PERITONEUM)",
        type: "Peritoneal Cancer",
        color: "Green",
        code: "C12770",
        umls: "C0031153",
        children: [
            {
                name: "Peritoneal Mesothelioma (PEMESO)",
                type: "Mesothelioma",
                color: "Green",
                code: "C7633",
                umls: "C1377610",
            },
            {
                name: "Peritoneal Serous Carcinoma (PSEC)",
                type: "Peritoneal Cancer, NOS",
                color: "Green",
                code: "",
                umls: "",
            }
        ]
    },
    {
        name: "Pleura (PLEURA)",
        type: "Pleural Cancer",
        color: "Blue",
        code: "C12469",
        umls: "C0032225",
        children: [
            {
                name: "Pleural Mesothelioma (PLMESO)",
                type: "Mesothelioma",
                color: "Blue",
                code: "C9351",
                umls: "C1377913",
                children: [
                    {
                        name: "Pleural Mesothelioma, Biphasic Type (PLBMESO)",
                        type: "Mesothelioma",
                        color: "Blue",
                        code: "",
                        umls: "",
                    },
                    {
                        name: "Pleural Mesothelioma, Epithelioid Type (PLEMESO)",
                        type: "Mesothelioma",
                        color: "Blue",
                        code: "",
                        umls: "",
                    },
                    {
                        name: "Pleural Mesothelioma, Sarcomatoid Type (PLSMESO)",
                        type: "Mesothelioma",
                        color: "Blue",
                        code: "",
                        umls: "",
                    }
                ]
            }
        ]
    },
    {
        name: "Prostate (PROSTATE)",
        type: "Prostate Cancer",
        color: "Cyan",
        code: "C12410",
        umls: "C0033572",
        children: [
            {
                name: "Basal Cell Carcinoma of Prostate (BCCP)",
                type: "Prostate Cancer",
                color: "Cyan",
                code: "",
                umls: "",
            },
            {
                name: "Prostate Adenocarcinoma (PRAD)",
                type: "Prostate Cancer",
                color: "Cyan",
                code: "C2919",
                umls: "C0007112",
            },
            {
                name: "Prostate Neuroendocrine Carcinoma (PRNE)",
                type: "Prostate Cancer",
                color: "Cyan",
                code: "C5545",
                umls: "C1335515",
            },
            {
                name: "Prostate Small Cell Carcinoma (PRSCC)",
                type: "Prostate Cancer",
                color: "Cyan",
                code: "C6766",
                umls: "C1300585",
            },
            {
                name: "Prostate Squamous Cell Carcinoma (PRSC)",
                type: "Prostate Cancer",
                color: "Cyan",
                code: "C5536",
                umls: "C1302530",
            }
        ]
    },
    {
        name: "Skin (SKIN)",
        type: "Skin Cancer",
        color: "Black",
        code: "C12470",
        umls: "C1123023",
        children: [
            {
                name: "Aggressive Digital Papillary Adenocarcinoma (ADPA)",
                type: "Skin Cancer, Non-Melanoma",
                color: "Black",
                code: "C27534",
                umls: "C1367789",
            },
            {
                name: "Atypical Fibroxanthoma (AFX)",
                type: "Skin Cancer, Non-Melanoma",
                color: "Black",
                code: "C4246",
                umls: "C0346053",
            },
            {
                name: "Atypical Nevus (AN)",
                type: "Skin Cancer, Non-Melanoma",
                color: "Black",
                code: "",
                umls: "",
            },
            {
                name: "Basal Cell Carcinoma (BCC)",
                type: "Skin Cancer, Non-Melanoma",
                color: "Black",
                code: "C2921",
                umls: "C0007117",
            },
            {
                name: "Cutaneous Squamous Cell Carcinoma (CSCC)",
                type: "Skin Cancer, Non-Melanoma",
                color: "Black",
                code: "C4819",
                umls: "C0553723",
            },
            {
                name: "Dermatofibroma (DF)",
                type: "Skin Cancer, Non-Melanoma",
                color: "Black",
                code: "C6801",
                umls: "C0002991",
            },
            {
                name: "Dermatofibrosarcoma Protuberans (DFSP)",
                type: "Skin Cancer, Non-Melanoma",
                color: "Black",
                code: "C4683",
                umls: "C0392784",
            },
            {
                name: "Desmoplastic Trichoepithelioma (DTE)",
                type: "Skin Cancer, Non-Melanoma",
                color: "Black",
                code: "C27524",
                umls: "C0432526",
            },
            {
                name: "Endocrine Mucin Producing Sweat Gland Carcinoma (EMPSGC)",
                type: "Skin Cancer, Non-Melanoma",
                color: "Black",
                code: "",
                umls: "",
            },
            {
                name: "Extramammary Paget Disease (EMPD)",
                type: "Skin Cancer, Non-Melanoma",
                color: "Black",
                code: "C3302",
                umls: "C0030186",
            },
            {
                name: "Melanoma (MEL)",
                type: "Melanoma",
                color: "Black",
                code: "C3224",
                umls: "C0025202",
                children: [
                    {
                        name: "Acral Melanoma (ACRM)",
                        type: "Melanoma",
                        color: "Black",
                        code: "C4022",
                        umls: "C0346037",
                    },
                    {
                        name: "Congenital Nevus (SKCN)",
                        type: "Melanoma",
                        color: "Black",
                        code: "C3944",
                        umls: "C1318558",
                    },
                    {
                        name: "Cutaneous Melanoma (SKCM)",
                        type: "Melanoma",
                        color: "Black",
                        code: "C3510",
                        umls: "C0151779",
                    },
                    {
                        name: "Desmoplastic Melanoma (DESM)",
                        type: "Melanoma",
                        color: "Black",
                        code: "C37257",
                        umls: "C0334439",
                    },
                    {
                        name: "Lentigo Maligna Melanoma (SKLMM)",
                        type: "Melanoma",
                        color: "Black",
                        code: "C9151",
                        umls: "C2739810",
                    },
                    {
                        name: "Melanoma of Unknown Primary (MUP)",
                        type: "Melanoma",
                        color: "Black",
                        code: "",
                        umls: "",
                    },
                    {
                        name: "Spitzoid Melanoma (SPZM)",
                        type: "Melanoma",
                        color: "Black",
                        code: "",
                        umls: "",
                    }
                ]
            },
            {
                name: "Merkel Cell Carcinoma (MCC)",
                type: "Skin Cancer, Non-Melanoma",
                color: "Black",
                code: "C9231",
                umls: "C0007129",
            },
            {
                name: "Microcystic Adnexal Carcinoma (MAC)",
                type: "Skin Cancer, Non-Melanoma",
                color: "Black",
                code: "C7581",
                umls: "C0346027",
            },
            {
                name: "Porocarcinoma/Spiroadenocarcinoma (POCA)",
                type: "Skin Cancer, Non-Melanoma",
                color: "Black",
                code: "C5560",
                umls: "C1266065",
            },
            {
                name: "Poroma/Acrospiroma (PORO)",
                type: "Skin Cancer, Non-Melanoma",
                color: "Black",
                code: "C27273",
                umls: "C1533161",
            },
            {
                name: "Proliferating Pilar Cystic Tumor (PPCT)",
                type: "Skin Cancer, Non-Melanoma",
                color: "Black",
                code: "",
                umls: "C0345992",
            },
            {
                name: "Sebaceous Carcinoma (SEBA)",
                type: "Skin Cancer, Non-Melanoma",
                color: "Black",
                code: "C40310",
                umls: "C0206684",
            },
            {
                name: "Skin Adnexal Carcinoma (SKAC)",
                type: "Skin Cancer, Non-Melanoma",
                color: "Black",
                code: "C3775",
                umls: "C0206697",
            },
            {
                name: "Spiroma/Spiradenoma (SPIR)",
                type: "Skin Cancer, Non-Melanoma",
                color: "Black",
                code: "C4170",
                umls: "C0334347",
            },
            {
                name: "Sweat Gland Adenocarcinoma (SGAD)",
                type: "Skin Cancer, Non-Melanoma",
                color: "Black",
                code: "C3682",
                umls: "C1883403",
            },
            {
                name: "Sweat Gland Carcinoma/Apocrine Eccrine Carcinoma (AECA)",
                type: "Skin Cancer, Non-Melanoma",
                color: "Black",
                code: "C6938",
                umls: "C1412016",
            }
        ]
    },
    {
        name: "Soft Tissue (SOFT_TISSUE)",
        type: "Soft Tissue Cancer",
        color: "LightYellow",
        code: "C12471",
        umls: "C0225317",
        children: [
            {
                name: "Aggressive Angiomyxoma (AA)",
                type: "Soft Tissue Sarcoma",
                color: "LightYellow",
                code: "C6936",
                umls: "C1306242",
            },
            {
                name: "Alveolar Soft Part Sarcoma (ASPS)",
                type: "Soft Tissue Sarcoma",
                color: "LightYellow",
                code: "C3750",
                umls: "C0206657",
            },
            {
                name: "Angiomatoid Fibrous Histiocytoma (AFH)",
                type: "Angiomatoid Fibrous Histiocytoma",
                color: "LightYellow",
                code: "",
                umls: "",
            },
            {
                name: "Angiosarcoma (ANGS)",
                type: "Soft Tissue Sarcoma",
                color: "LightYellow",
                code: "C3088",
                umls: "C0018923",
            },
            {
                name: "Atypical Lipomatous Tumor (ALT)",
                type: "Soft Tissue Sarcoma",
                color: "LightYellow",
                code: "",
                umls: "",
            },
            {
                name: "Clear Cell Sarcoma (CCS)",
                type: "Soft Tissue Sarcoma",
                color: "LightYellow",
                code: "C3745",
                umls: "C0206651",
            },
            {
                name: "Desmoid/Aggressive Fibromatosis (DES)",
                type: "Soft Tissue Sarcoma",
                color: "LightYellow",
                code: "C9182",
                umls: "C0079218",
            },
            {
                name: "Desmoplastic Small-Round-Cell Tumor (DSRCT)",
                type: "Soft Tissue Sarcoma",
                color: "LightYellow",
                code: "C8300",
                umls: "C0281508",
            },
            {
                name: "Epithelioid Hemangioendothelioma (EHAE)",
                type: "Soft Tissue Sarcoma",
                color: "LightYellow",
                code: "C3800",
                umls: "C0206732",
            },
            {
                name: "Epithelioid Sarcoma (EPIS)",
                type: "Soft Tissue Sarcoma",
                color: "LightYellow",
                code: "C3714",
                umls: "C0205944",
                children: [
                    {
                        name: "Proximal-Type Epithelioid Sarcoma (PTES)",
                        type: "Soft Tissue Sarcoma",
                        color: "LightYellow",
                        code: "C27472",
                        umls: "C1335563",
                    }
                ]
            },
            {
                name: "Ewing Sarcoma of Soft Tissue (ESST)",
                type: "Soft Tissue Sarcoma",
                color: "LightYellow",
                code: "",
                umls: "",
            },
            {
                name: "Fibrosarcoma (FIBS)",
                type: "Soft Tissue Sarcoma",
                color: "LightYellow",
                code: "C3043",
                umls: "C0016057",
                children: [
                    {
                        name: "Sclerosing Epithelioid Fibrosarcoma (SEF)",
                        type: "Soft Tissue Sarcoma",
                        color: "LightYellow",
                        code: "C49027",
                        umls: "C1710026",
                    }
                ]
            },
            {
                name: "Gastrointestinal Stromal Tumor (GIST)",
                type: "Gastrointestinal Stromal Tumor",
                color: "LightYellow",
                code: "C3868",
                umls: "C0238198",
            },
            {
                name: "Glomangiosarcoma (GS)",
                type: "Soft Tissue Sarcoma",
                color: "LightYellow",
                code: "C4221",
                umls: "C1266111",
            },
            {
                name: "Hemangioma (HEMA)",
                type: "Soft Tissue Sarcoma",
                color: "LightYellow",
                code: "C3085",
                umls: "C0018916",
            },
            {
                name: "Infantile Fibrosarcoma (IFS)",
                type: "Infantile Fibrosarcoma",
                color: "LightYellow",
                code: "",
                umls: "",
            },
            {
                name: "Inflammatory Myofibroblastic Tumor (IMT)",
                type: "Soft Tissue Sarcoma",
                color: "LightYellow",
                code: "C6481",
                umls: "C0334121",
            },
            {
                name: "Intimal Sarcoma (INTS)",
                type: "Soft Tissue Sarcoma",
                color: "LightYellow",
                code: "C53677",
                umls: "C1708550",
            },
            {
                name: "Leiomyoma (LM)",
                type: "Soft Tissue Cancer",
                color: "LightYellow",
                code: "",
                umls: "",
            },
            {
                name: "Leiomyosarcoma (LMS)",
                type: "Soft Tissue Sarcoma",
                color: "LightYellow",
                code: "C3158",
                umls: "C0023269",
            },
            {
                name: "Liposarcoma (LIPO)",
                type: "Soft Tissue Sarcoma",
                color: "LightYellow",
                code: "C3194",
                umls: "C0023827",
                children: [
                    {
                        name: "Dedifferentiated Liposarcoma (DDLS)",
                        type: "Soft Tissue Sarcoma",
                        color: "LightYellow",
                        code: "C3704",
                        umls: "C0205824",
                    },
                    {
                        name: "Myxoid/Round-Cell Liposarcoma (MRLS)",
                        type: "Soft Tissue Sarcoma",
                        color: "LightYellow",
                        code: "C27781",
                        umls: "C0206634",
                    },
                    {
                        name: "Pleomorphic Liposarcoma (PLLS)",
                        type: "Soft Tissue Sarcoma",
                        color: "LightYellow",
                        code: "C3705",
                        umls: "C0205825",
                    },
                    {
                        name: "Well-Differentiated Liposarcoma (WDLS)",
                        type: "Soft Tissue Sarcoma",
                        color: "LightYellow",
                        code: "C4250",
                        umls: "C1370889",
                    }
                ]
            },
            {
                name: "Low-Grade Fibromyxoid Sarcoma (LGFMS)",
                type: "Soft Tissue Sarcoma",
                color: "LightYellow",
                code: "C45202",
                umls: "C1275282",
            },
            {
                name: "Malignant Glomus Tumor (MGST)",
                type: "Malignant Glomus Tumor",
                color: "LightYellow",
                code: "",
                umls: "",
            },
            {
                name: "Myofibroma (MF)",
                type: "Soft Tissue Sarcoma",
                color: "LightYellow",
                code: "C7052",
                umls: "C1266121",
            },
            {
                name: "Myofibromatosis (IMS)",
                type: "Myofibromatosis",
                color: "LightYellow",
                code: "",
                umls: "",
            },
            {
                name: "Myopericytoma (MPC)",
                type: "Soft Tissue Sarcoma",
                color: "LightYellow",
                code: "C50401",
                umls: "C1302808",
            },
            {
                name: "Myxofibrosarcoma (MFS)",
                type: "Soft Tissue Sarcoma",
                color: "LightYellow",
                code: "C6496",
                umls: "C0334454",
            },
            {
                name: "Myxoma (MYXO)",
                type: "Soft Tissue Sarcoma",
                color: "LightYellow",
                code: "C6577",
                umls: "C0027149",
                children: [
                    {
                        name: "Ossifying Fibromyxoid Tumor (OFMT)",
                        type: "Soft Tissue Sarcoma",
                        color: "LightYellow",
                        code: "C6582",
                        umls: "C1266128",
                    }
                ]
            },
            {
                name: "Paraganglioma (PGNG)",
                type: "Miscellaneous Neuroepithelial Tumor",
                color: "Gray",
                code: "C3308",
                umls: "C0030421",
            },
            {
                name: "Perivascular Epithelioid Cell Tumor (PECOMA)",
                type: "Soft Tissue Sarcoma",
                color: "LightYellow",
                code: "C38150",
                umls: "C1300127",
            },
            {
                name: "Pseudomyogenic Hemangioendothelioma (PMHE)",
                type: "Soft Tissue Sarcoma",
                color: "LightYellow",
                code: "",
                umls: "CL479537",
            },
            {
                name: "Radiation-Associated Sarcoma (RAS)",
                type: "Soft Tissue Sarcoma",
                color: "LightYellow",
                code: "C93125",
                umls: "C2985448",
            },
            {
                name: "Rhabdomyosarcoma (RMS)",
                type: "Soft Tissue Sarcoma",
                color: "LightYellow",
                code: "C3359",
                umls: "C0035412",
                children: [
                    {
                        name: "Alveolar Rhabdomyosarcoma (ARMS)",
                        type: "Soft Tissue Sarcoma",
                        color: "LightYellow",
                        code: "C3749",
                        umls: "C0206655",
                    },
                    {
                        name: "Embryonal Rhabdomyosarcoma (ERMS)",
                        type: "Soft Tissue Sarcoma",
                        color: "LightYellow",
                        code: "C8971",
                        umls: "C0206656",
                    },
                    {
                        name: "Pleomorphic Rhabdomyosarcoma (PLRMS)",
                        type: "Soft Tissue Sarcoma",
                        color: "LightYellow",
                        code: "C4258",
                        umls: "C0334480",
                    },
                    {
                        name: "Spindle Cell Rhabdomyosarcoma (SCRMS)",
                        type: "Soft Tissue Sarcoma",
                        color: "LightYellow",
                        code: "C6519",
                        umls: "C1266134",
                    },
                    {
                        name: "Spindle Cell/Sclerosing Rhabdomyosarcoma (SCSRMS)",
                        type: "Soft Tissue Sarcoma",
                        color: "LightYellow",
                        code: "",
                        umls: "CL494117",
                    }
                ]
            },
            {
                name: "Round Cell Sarcoma, NOS (RCSNOS)",
                type: "Soft Tissue Sarcoma",
                color: "LightYellow",
                code: "",
                umls: "",
            },
            {
                name: "Sarcoma, NOS (SARCNOS)",
                type: "Soft Tissue Sarcoma",
                color: "LightYellow",
                code: "",
                umls: "",
            },
            {
                name: "Soft Tissue Myoepithelial Carcinoma (STMYEC)",
                type: "Soft Tissue Sarcoma",
                color: "LightYellow",
                code: "C7596",
                umls: "C0334699",
            },
            {
                name: "Solitary Fibrous Tumor/Hemangiopericytoma (SFT)",
                type: "Soft Tissue Sarcoma",
                color: "LightYellow",
                code: "C7634",
                umls: "C1266119",
            },
            {
                name: "Synovial Sarcoma (SYNS)",
                type: "Soft Tissue Sarcoma",
                color: "LightYellow",
                code: "C3400",
                umls: "C0039101",
            },
            {
                name: "Tenosynovial Giant Cell Tumor Diffuse Type (TGCT)",
                type: "Soft Tissue Sarcoma",
                color: "LightYellow",
                code: "C3401",
                umls: "C0039106",
            },
            {
                name: "Undifferentiated Pleomorphic Sarcoma/Malignant Fibrous Histiocytoma/High-Grade Spindle Cell Sarcoma (MFH)",
                type: "Soft Tissue Sarcoma",
                color: "LightYellow",
                code: "C4247",
                umls: "C0334463",
            }
        ]
    },
    {
        name: "Testis (TESTIS)",
        type: "Testicular Cancer",
        color: "Red",
        code: "C12412",
        umls: "C0039597",
        children: [
            {
                name: "Non-Seminomatous Germ Cell Tumor (NSGCT)",
                type: "Germ Cell Tumor",
                color: "Red",
                code: "",
                umls: "CL480935",
                children: [
                    {
                        name: "Choriocarcinoma (TCCA)",
                        type: "Germ Cell Tumor",
                        color: "Red",
                        code: "C7733",
                        umls: "C0238449",
                    },
                    {
                        name: "Embryonal Carcinoma (EMBCA)",
                        type: "Germ Cell Tumor",
                        color: "Red",
                        code: "C6341",
                        umls: "C0238448",
                    },
                    {
                        name: "Germ Cell Tumor with Somatic-Type Malignancy (GCTSTM)",
                        type: "Germ Cell Tumor",
                        color: "Red",
                        code: "",
                        umls: "",
                    },
                    {
                        name: "Mixed Germ Cell Tumor (MGCT)",
                        type: "Germ Cell Tumor",
                        color: "Red",
                        code: "C6347",
                        umls: "C1336720",
                    },
                    {
                        name: "Teratoma (TT)",
                        type: "Germ Cell Tumor",
                        color: "Red",
                        code: "C3877",
                        umls: "C0238451",
                    },
                    {
                        name: "Yolk Sac Tumor (TYST)",
                        type: "Germ Cell Tumor",
                        color: "Red",
                        code: "C8000",
                        umls: "C0279708",
                    }
                ]
            },
            {
                name: "Seminoma (SEM)",
                type: "Germ Cell Tumor",
                color: "Red",
                code: "C9309",
                umls: "C0036631",
            },
            {
                name: "Sex Cord Stromal Tumor (TSCST)",
                type: "Sex Cord Stromal Tumor",
                color: "Red",
                code: "",
                umls: "C1336728",
            },
            {
                name: "Testicular Lymphoma (TLYM)",
                type: "Non-Hodgkin Lymphoma",
                color: "Red",
                code: "C6810",
                umls: "C0349644",
            },
            {
                name: "Testicular Mesothelioma (TMESO)",
                type: "Mesothelioma",
                color: "Red",
                code: "",
                umls: "",
            }
        ]
    },
    {
        name: "Thymus (THYMUS)",
        type: "Thymic Cancer",
        color: "Purple",
        code: "C12433",
        umls: "C0040113",
        children: [
            {
                name: "Thymic Epithelial Tumor (TET)",
                type: "Thymic Tumor",
                color: "Purple",
                code: "C6450",
                umls: "C1266101",
                children: [
                    {
                        name: "Thymic Carcinoma (THYC)",
                        type: "Thymic Tumor",
                        color: "Purple",
                        code: "C7569",
                        umls: "C0205969",
                    },
                    {
                        name: "Thymoma (THYM)",
                        type: "Thymic Tumor",
                        color: "Purple",
                        code: "C3411",
                        umls: "C0040100",
                    }
                ]
            },
            {
                name: "Thymic Neuroendocrine Tumor (TNET)",
                type: "Thymic Tumor",
                color: "Purple",
                code: "",
                umls: "",
            }
        ]
    },
    {
        name: "Thyroid (THYROID)",
        type: "Thyroid Cancer",
        color: "Teal",
        code: "C12400",
        umls: "C0040132",
        children: [
            {
                name: "Anaplastic Thyroid Cancer (THAP)",
                type: "Thyroid Cancer",
                color: "Teal",
                code: "C3878",
                umls: "C0238461",
            },
            {
                name: "Hurthle Cell Thyroid Cancer (THHC)",
                type: "Thyroid Cancer",
                color: "Teal",
                code: "C4946",
                umls: "C0749424",
            },
            {
                name: "Hyalinizing Trabecular Adenoma of the Thyroid (HTAT)",
                type: "Thyroid Cancer",
                color: "Teal",
                code: "C6846",
                umls: "C1266049",
            },
            {
                name: "Medullary Thyroid Cancer (THME)",
                type: "Thyroid Cancer",
                color: "Teal",
                code: "C3879",
                umls: "C0238462",
            },
            {
                name: "Oncocytic Adenoma of the Thyroid (OAT)",
                type: "Thyroid Cancer",
                color: "Teal",
                code: "",
                umls: "",
            },
            {
                name: "Poorly Differentiated Thyroid Cancer (THPD)",
                type: "Thyroid Cancer",
                color: "Teal",
                code: "C6040",
                umls: "C1266050",
            },
            {
                name: "Well-Differentiated Thyroid Cancer (WDTC)",
                type: "Thyroid Cancer",
                color: "Teal",
                code: "C7153",
                umls: "C1337013",
                children: [
                    {
                        name: "Follicular Thyroid Cancer (THFO)",
                        type: "Thyroid Cancer",
                        color: "Teal",
                        code: "C8054",
                        umls: "C0206682",
                    },
                    {
                        name: "Papillary Thyroid Cancer (THPA)",
                        type: "Thyroid Cancer",
                        color: "Teal",
                        code: "C4035",
                        umls: "C0238463",
                    }
                ]
            }
        ]
    },
    {
        name: "Uterus (UTERUS)",
        type: "Uterine Cancer",
        color: "PeachPuff",
        code: "C12405",
        umls: "C0042149",
        children: [
            {
                name: "Endometrial Carcinoma (UCEC)",
                type: "Endometrial Cancer",
                color: "PeachPuff",
                code: "C7558",
                umls: "C0476089",
                children: [
                    {
                        name: "Poorly Differentiated Carcinoma of the Uterus (UPDC)",
                        type: "Endometrial Cancer",
                        color: "PeachPuff",
                        code: "",
                        umls: "",
                    },
                    {
                        name: "Uterine Adenosquamous Carcinoma (UASC)",
                        type: "Endometrial Cancer",
                        color: "PeachPuff",
                        code: "C4519",
                        umls: "C0346202",
                    },
                    {
                        name: "Uterine Carcinosarcoma/Uterine Malignant Mixed Mullerian Tumor (UCS)",
                        type: "Endometrial Cancer",
                        color: "PeachPuff",
                        code: "C42700",
                        umls: "C0280630",
                    },
                    {
                        name: "Uterine Clear Cell Carcinoma (UCCC)",
                        type: "Endometrial Cancer",
                        color: "PeachPuff",
                        code: "C6344",
                        umls: "C1332912",
                    },
                    {
                        name: "Uterine Dedifferentiated Carcinoma (UDDC)",
                        type: "Endometrial Cancer",
                        color: "PeachPuff",
                        code: "",
                        umls: "",
                    },
                    {
                        name: "Uterine Endometrioid Carcinoma (UEC)",
                        type: "Endometrial Cancer",
                        color: "PeachPuff",
                        code: "C6287",
                        umls: "C1336905",
                    },
                    {
                        name: "Uterine Mesonephric Carcinoma (UMNC)",
                        type: "Endometrial Cancer",
                        color: "PeachPuff",
                        code: "",
                        umls: "",
                    },
                    {
                        name: "Uterine Mixed Endometrial Carcinoma (UMEC)",
                        type: "Endometrial Cancer",
                        color: "PeachPuff",
                        code: "",
                        umls: "",
                    },
                    {
                        name: "Uterine Mucinous Carcinoma (UMC)",
                        type: "Endometrial Cancer",
                        color: "PeachPuff",
                        code: "C40144",
                        umls: "C0854923",
                    },
                    {
                        name: "Uterine Neuroendocrine Carcinoma (UNEC)",
                        type: "Endometrial Cancer",
                        color: "PeachPuff",
                        code: "",
                        umls: "",
                    },
                    {
                        name: "Uterine Serous Carcinoma/Uterine Papillary Serous Carcinoma (USC)",
                        type: "Endometrial Cancer",
                        color: "PeachPuff",
                        code: "C27838",
                        umls: "C0854924",
                    },
                    {
                        name: "Uterine Undifferentiated Carcinoma (UUC)",
                        type: "Endometrial Cancer",
                        color: "PeachPuff",
                        code: "C6345",
                        umls: "C0850327",
                    }
                ]
            },
            {
                name: "Gestational Trophoblastic Disease (GTD)",
                type: "Gestational Trophoblastic Disease",
                color: "PeachPuff",
                code: "C4699",
                umls: "C1135868",
                children: [
                    {
                        name: "Choriocarcinoma (UCCA)",
                        type: "Gestational Trophoblastic Disease",
                        color: "PeachPuff",
                        code: "C27246",
                        umls: "C0279677",
                    },
                    {
                        name: "Epithelioid Trophoblastic Tumor (ETT)",
                        type: "Gestational Trophoblastic Disease",
                        color: "PeachPuff",
                        code: "C6900",
                        umls: "C1266159",
                    },
                    {
                        name: "Molar Pregnancy (MP)",
                        type: "Gestational Trophoblastic Disease",
                        color: "PeachPuff",
                        code: "C3110",
                        umls: "C0020217",
                        children: [
                            {
                                name: "Complete Hydatidiform Mole (CHM)",
                                type: "Gestational Trophoblastic Disease",
                                color: "PeachPuff",
                                code: "C4871",
                                umls: "C0678213",
                            },
                            {
                                name: "Invasive Hydatidiform Mole (IHM)",
                                type: "Gestational Trophoblastic Disease",
                                color: "PeachPuff",
                                code: "C6985",
                                umls: "C0008493",
                            },
                            {
                                name: "Partial Hydatidiform Mole (PHM)",
                                type: "Gestational Trophoblastic Disease",
                                color: "PeachPuff",
                                code: "C4293",
                                umls: "C0334529",
                            }
                        ]
                    },
                    {
                        name: "Placental Site Trophoblastic Tumor (PSTT)",
                        type: "Gestational Trophoblastic Disease",
                        color: "PeachPuff",
                        code: "C3757",
                        umls: "C0206666",
                    }
                ]
            },
            {
                name: "Other Uterine Tumor (OUTT)",
                type: "Endometrial Cancer",
                color: "PeachPuff",
                code: "",
                umls: "",
            },
            {
                name: "Uterine Sarcoma/Mesenchymal (USARC)",
                type: "Uterine Sarcoma",
                color: "PeachPuff",
                code: "C6339",
                umls: "C0338113",
                children: [
                    {
                        name: "Endometrial Stromal Sarcoma (ESS)",
                        type: "Uterine Sarcoma",
                        color: "PeachPuff",
                        code: "C8973",
                        umls: "C0206630",
                        children: [
                            {
                                name: "High-Grade Endometrial Stromal Sarcoma (HGESS)",
                                type: "Uterine Sarcoma",
                                color: "PeachPuff",
                                code: "",
                                umls: "",
                            },
                            {
                                name: "Low-Grade Endometrial Stromal Sarcoma (LGESS)",
                                type: "Uterine Sarcoma",
                                color: "PeachPuff",
                                code: "C4263",
                                umls: "C0334486",
                            }
                        ]
                    },
                    {
                        name: "Undifferentiated Uterine Sarcoma (UUS)",
                        type: "Uterine Sarcoma",
                        color: "PeachPuff",
                        code: "C8972",
                        umls: "CL033042",
                    },
                    {
                        name: "Uterine Adenosarcoma (UAS)",
                        type: "Uterine Sarcoma",
                        color: "PeachPuff",
                        code: "C6336",
                        umls: "C1336917",
                    },
                    {
                        name: "Uterine Perivascular Epithelioid Cell Tumor (UPECOMA)",
                        type: "Uterine Sarcoma",
                        color: "PeachPuff",
                        code: "C40180",
                        umls: "C1519862",
                    },
                    {
                        name: "Uterine Sarcoma, Other (OUSARC)",
                        type: "Uterine Sarcoma",
                        color: "PeachPuff",
                        code: "",
                        umls: "",
                    },
                    {
                        name: "Uterine Smooth Muscle Tumor (USMT)",
                        type: "Uterine Sarcoma",
                        color: "PeachPuff",
                        code: "C40176",
                        umls: "C1519863",
                        children: [
                            {
                                name: "Uterine Epithelioid Leiomyosarcoma (UELMS)",
                                type: "Uterine Sarcoma",
                                color: "PeachPuff",
                                code: "C40174",
                                umls: "C1519851",
                            },
                            {
                                name: "Uterine Leiomyoma (ULM)",
                                type: "Uterine Sarcoma",
                                color: "PeachPuff",
                                code: "C3434",
                                umls: "C0042133",
                            },
                            {
                                name: "Uterine Leiomyosarcoma (ULMS)",
                                type: "Uterine Sarcoma",
                                color: "PeachPuff",
                                code: "C6340",
                                umls: "C0280631",
                            },
                            {
                                name: "Uterine Myxoid Leiomyosarcoma (UMLMS)",
                                type: "Uterine Sarcoma",
                                color: "PeachPuff",
                                code: "C40175",
                                umls: "C1519861",
                            },
                            {
                                name: "Uterine Smooth Muscle Tumor of Uncertain Malignant Potential (USTUMP)",
                                type: "Uterine Sarcoma",
                                color: "PeachPuff",
                                code: "C40177",
                                umls: "C1519864",
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: "Vulva/Vagina (VULVA)",
        type: "Vulvar/Vaginal Cancer",
        color: "Purple",
        code: "C12408",
        umls: "C0042993",
        children: [
            {
                name: "Germ Cell Tumor of the Vulva (VGCT)",
                type: "Germ Cell Tumor",
                color: "Purple",
                code: "",
                umls: "",
                children: [
                    {
                        name: "Dysgerminoma (VDYS)",
                        type: "Germ Cell Tumor",
                        color: "Purple",
                        code: "C8106",
                        umls: "C0346185",
                    },
                    {
                        name: "Embryonal Carcinoma (VOEC)",
                        type: "Germ Cell Tumor",
                        color: "Purple",
                        code: "",
                        umls: "",
                    },
                    {
                        name: "Immature Teratoma (VIMT)",
                        type: "Germ Cell Tumor",
                        color: "Purple",
                        code: "C4286",
                        umls: "C0334520",
                    },
                    {
                        name: "Mature Teratoma (VMT)",
                        type: "Germ Cell Tumor",
                        color: "Purple",
                        code: "C9015",
                        umls: "C1368910",
                    },
                    {
                        name: "Mixed Germ Cell Tumor (VMGCT)",
                        type: "Germ Cell Tumor",
                        color: "Purple",
                        code: "C4290",
                        umls: "C0334524",
                    },
                    {
                        name: "Polyembryoma (VPE)",
                        type: "Germ Cell Tumor",
                        color: "Purple",
                        code: "",
                        umls: "",
                    },
                    {
                        name: "Yolk Sac Tumor (VYST)",
                        type: "Germ Cell Tumor",
                        color: "Purple",
                        code: "C6379",
                        umls: "C1336945",
                    }
                ]
            },
            {
                name: "Mucinous Adenocarcinoma of the Vulva/Vagina (VMA)",
                type: "Vulvar Carcinoma",
                color: "Purple",
                code: "C40252",
                umls: "C1519925",
            },
            {
                name: "Mucosal Melanoma of the Vulva/Vagina (VMM)",
                type: "Melanoma",
                color: "Purple",
                code: "C27394",
                umls: "C2004576",
            },
            {
                name: "Poorly Differentiated Vaginal Carcinoma (VPDC)",
                type: "Vaginal Cancer",
                color: "Purple",
                code: "",
                umls: "",
            },
            {
                name: "Squamous Cell Carcinoma of the Vulva/Vagina (VSC)",
                type: "Vaginal Cancer",
                color: "Purple",
                code: "C7736",
                umls: "C0238518",
            },
            {
                name: "Vaginal Adenocarcinoma (VA)",
                type: "Vaginal Cancer",
                color: "Purple",
                code: "C7981",
                umls: "C0279668",
            }
        ]
    }
];


        function createTree(data, parentElement) {
            const ul = document.createElement('ul');
            ul.className = parentElement === treeContainer ? '' : 'nested';
            parentElement.appendChild(ul);

            data.forEach(item => {
                const li = document.createElement('li');

                if (item.type)  li.dataset.type  = item.type;
                if (item.color) li.dataset.color = item.color;
                if (item.code)  li.dataset.code  = item.code;
                if (item.umls)  li.dataset.umls  = item.umls;
                
                const label = document.createElement('label');
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                label.appendChild(checkbox);
                li.appendChild(checkbox);

                if (item.children && item.children.length > 0) {
                    const span = document.createElement('span');
                    span.className = 'toggle';
                    span.textContent = item.name;
                    li.appendChild(span);
                    createTree(item.children, li);
                } else {
                    label.appendChild(document.createTextNode(item.name));
                    li.appendChild(label);
                }

                ul.appendChild(li);
            });
        }

const treeContainer = document.getElementById('tree');
      createTree(data, treeContainer);    

// Add click event listener for toggling
treeContainer.addEventListener('click', function(e) {
  if (e.target.tagName.toLowerCase() === 'span' && e.target.classList.contains('toggle')) {
      e.target.classList.toggle('toggle-down');
      e.target.parentElement.querySelector('.nested').classList.toggle('active');
  }
});


function generateXMLFromCheckboxes() {
  const xmlDoc = document.implementation.createDocument(null, "selected_items");
  const rootElement = xmlDoc.documentElement;

  function traverseTree(element, xmlParent) {
      let hasSelectedChild = false;
      const children = element.children;
      for (let i = 0; i < children.length; i++) {
          const child = children[i];
          if (child.tagName.toLowerCase() === 'ul') {
              if (traverseTree(child, xmlParent)) {
                  hasSelectedChild = true;
              }
          } else if (child.tagName.toLowerCase() === 'li') {
              const checkbox = child.querySelector('input[type="checkbox"]');
              const isSelected = checkbox && checkbox.checked;
              const nestedUl = child.querySelector('ul');

              let itemElement;
              if (isSelected || (nestedUl && traverseTree(nestedUl, null))) {
                  itemElement = createItemElement(child);
                  xmlParent.appendChild(itemElement);
                  hasSelectedChild = true;
              }

              if (nestedUl && itemElement) {
                  traverseTree(nestedUl, itemElement);
              }
          }
      }
      return hasSelectedChild;
  }

  function createItemElement(li) {
      const itemElement = xmlDoc.createElement("item");
      
      // Add name
      const nameElement = xmlDoc.createElement("name");
      const span = li.querySelector('span.toggle');
      nameElement.textContent = span ? span.textContent.trim() : li.textContent.trim();
      itemElement.appendChild(nameElement);

      // Add attributes if available
      if (li.dataset.type) {
        itemElement.setAttribute("type", li.dataset.type);
      }
      if (li.dataset.color) {
          itemElement.setAttribute("color", li.dataset.color);
      }
      if (li.dataset.code) {
          itemElement.setAttribute("code", li.dataset.code);
      }
      if (li.dataset.umls) {
        itemElement.setAttribute("umls", li.dataset.umls);
      }

      return itemElement;
  }

  traverseTree(document.getElementById('tree'), rootElement);

  const serializer = new XMLSerializer();
  const xmlString = serializer.serializeToString(xmlDoc);

  // Create a Blob with the XML content
  const blob = new Blob([xmlString], {type: "text/xml;charset=utf-8"});
  
  // Create a link element and trigger download
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'selected_items.xml';
  link.click();

  // Clean up
  URL.revokeObjectURL(link.href);
}

// Add a button to trigger XML generation
const generateButton = document.createElement('button');
generateButton.textContent = 'Generate XML';
generateButton.onclick = generateXMLFromCheckboxes;
document.body.appendChild(generateButton);