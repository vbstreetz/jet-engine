export type Jet = {
  "version": "0.0.0",
  "name": "jet",
  "instructions": [
    {
      "name": "initMarket",
      "accounts": [
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "owner",
          "type": "publicKey"
        },
        {
          "name": "quoteCurrency",
          "type": "string"
        },
        {
          "name": "quoteTokenMint",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "initReserve",
      "accounts": [
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "reserve",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "feeNoteVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "dexSwapTokens",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "dexOpenOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "dexMarket",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "dexProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "oraclePrice",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "oracleProduct",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "depositNoteMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "loanNoteMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quoteTokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bump",
          "type": {
            "defined": "InitReserveBumpSeeds"
          }
        },
        {
          "name": "config",
          "type": {
            "defined": "ReserveConfig"
          }
        }
      ]
    },
    {
      "name": "updateReserveConfig",
      "accounts": [
        {
          "name": "market",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "reserve",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "newConfig",
          "type": {
            "defined": "ReserveConfig"
          }
        }
      ]
    },
    {
      "name": "initDepositAccount",
      "accounts": [
        {
          "name": "market",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "marketAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "reserve",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "depositNoteMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "depositor",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "depositAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bump",
          "type": "u8"
        }
      ]
    },
    {
      "name": "initCollateralAccount",
      "accounts": [
        {
          "name": "market",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "marketAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "obligation",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reserve",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "depositNoteMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "collateralAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bump",
          "type": "u8"
        }
      ]
    },
    {
      "name": "initLoanAccount",
      "accounts": [
        {
          "name": "market",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "marketAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "obligation",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reserve",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "loanNoteMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "loanAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bump",
          "type": "u8"
        }
      ]
    },
    {
      "name": "initObligation",
      "accounts": [
        {
          "name": "market",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "marketAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "borrower",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "obligation",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bump",
          "type": "u8"
        }
      ]
    },
    {
      "name": "setMarketOwner",
      "accounts": [
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "newOwner",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "setMarketFlags",
      "accounts": [
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "flags",
          "type": "u64"
        }
      ]
    },
    {
      "name": "closeDepositAccount",
      "accounts": [
        {
          "name": "market",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "marketAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "reserve",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "depositNoteMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "depositor",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "depositAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "receiverAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bump",
          "type": "u8"
        }
      ]
    },
    {
      "name": "deposit",
      "accounts": [
        {
          "name": "market",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "marketAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "reserve",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "depositNoteMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "depositor",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "depositAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "depositSource",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bump",
          "type": "u8"
        },
        {
          "name": "amount",
          "type": {
            "defined": "Amount"
          }
        }
      ]
    },
    {
      "name": "withdraw",
      "accounts": [
        {
          "name": "market",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "marketAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "reserve",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "depositNoteMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "depositor",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "depositAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "withdrawAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bump",
          "type": "u8"
        },
        {
          "name": "amount",
          "type": {
            "defined": "Amount"
          }
        }
      ]
    },
    {
      "name": "depositCollateral",
      "accounts": [
        {
          "name": "market",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "marketAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "reserve",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "obligation",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "depositAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "collateralAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bump",
          "type": {
            "defined": "DepositCollateralBumpSeeds"
          }
        },
        {
          "name": "amount",
          "type": {
            "defined": "Amount"
          }
        }
      ]
    },
    {
      "name": "withdrawCollateral",
      "accounts": [
        {
          "name": "market",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "marketAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "reserve",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "obligation",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "depositAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "collateralAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bump",
          "type": {
            "defined": "WithdrawCollateralBumpSeeds"
          }
        },
        {
          "name": "amount",
          "type": {
            "defined": "Amount"
          }
        }
      ]
    },
    {
      "name": "borrow",
      "accounts": [
        {
          "name": "market",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "marketAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "obligation",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reserve",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "loanNoteMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "borrower",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "loanAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "receiverAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bump",
          "type": "u8"
        },
        {
          "name": "amount",
          "type": {
            "defined": "Amount"
          }
        }
      ]
    },
    {
      "name": "repay",
      "accounts": [
        {
          "name": "market",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "marketAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "obligation",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reserve",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "loanNoteMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "loanAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payerAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": {
            "defined": "Amount"
          }
        }
      ]
    },
    {
      "name": "liquidate",
      "accounts": [
        {
          "name": "market",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "marketAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "obligation",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reserve",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "collateralReserve",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "loanNoteMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "loanAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "collateralAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payerAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "receiverAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": {
            "defined": "Amount"
          }
        },
        {
          "name": "minCollateral",
          "type": "u64"
        }
      ]
    },
    {
      "name": "mockLiquidateDex",
      "accounts": [
        {
          "name": "sourceMarket",
          "accounts": [
            {
              "name": "market",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "openOrders",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "requestQueue",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "eventQueue",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "bids",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "asks",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "coinVault",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "pcVault",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "vaultSigner",
              "isMut": false,
              "isSigner": false
            }
          ]
        },
        {
          "name": "targetMarket",
          "accounts": [
            {
              "name": "market",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "openOrders",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "requestQueue",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "eventQueue",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "bids",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "asks",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "coinVault",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "pcVault",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "vaultSigner",
              "isMut": false,
              "isSigner": false
            }
          ]
        },
        {
          "name": "toLiquidate",
          "accounts": [
            {
              "name": "market",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "marketAuthority",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "obligation",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "loanReserve",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "loanReserveVault",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "loanNoteMint",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "loanAccount",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "collateralReserve",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "collateralReserveVault",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "depositNoteMint",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "collateralAccount",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "dexSwapTokens",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "dexProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "tokenProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "rent",
              "isMut": false,
              "isSigner": false
            }
          ]
        }
      ],
      "args": []
    },
    {
      "name": "refreshReserve",
      "accounts": [
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "reserve",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "feeNoteVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "depositNoteMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "pythOraclePrice",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "market",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "version",
            "type": "u32"
          },
          {
            "name": "quoteExponent",
            "type": "i32"
          },
          {
            "name": "quoteCurrency",
            "type": {
              "array": [
                "u8",
                15
              ]
            }
          },
          {
            "name": "authorityBumpSeed",
            "type": {
              "array": [
                "u8",
                1
              ]
            }
          },
          {
            "name": "authoritySeed",
            "type": "publicKey"
          },
          {
            "name": "marketAuthority",
            "type": "publicKey"
          },
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "quoteTokenMint",
            "type": "publicKey"
          },
          {
            "name": "flags",
            "type": "u64"
          },
          {
            "name": "reserved",
            "type": {
              "array": [
                "u8",
                352
              ]
            }
          },
          {
            "name": "reserves",
            "type": {
              "array": [
                "u8",
                12288
              ]
            }
          }
        ]
      }
    },
    {
      "name": "obligation",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "version",
            "type": "u32"
          },
          {
            "name": "reserved0",
            "type": "u32"
          },
          {
            "name": "market",
            "type": "publicKey"
          },
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "reserved1",
            "type": {
              "array": [
                "u8",
                184
              ]
            }
          },
          {
            "name": "cached",
            "type": {
              "array": [
                "u8",
                256
              ]
            }
          },
          {
            "name": "collateral",
            "type": {
              "array": [
                "u8",
                2048
              ]
            }
          },
          {
            "name": "loans",
            "type": {
              "array": [
                "u8",
                2048
              ]
            }
          }
        ]
      }
    },
    {
      "name": "reserve",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "version",
            "type": "u16"
          },
          {
            "name": "index",
            "type": "u16"
          },
          {
            "name": "exponent",
            "type": "i32"
          },
          {
            "name": "market",
            "type": "publicKey"
          },
          {
            "name": "pythOraclePrice",
            "type": "publicKey"
          },
          {
            "name": "pythOracleProduct",
            "type": "publicKey"
          },
          {
            "name": "tokenMint",
            "type": "publicKey"
          },
          {
            "name": "depositNoteMint",
            "type": "publicKey"
          },
          {
            "name": "loanNoteMint",
            "type": "publicKey"
          },
          {
            "name": "vault",
            "type": "publicKey"
          },
          {
            "name": "feeNoteVault",
            "type": "publicKey"
          },
          {
            "name": "dexSwapTokens",
            "type": "publicKey"
          },
          {
            "name": "dexOpenOrders",
            "type": "publicKey"
          },
          {
            "name": "dexMarket",
            "type": "publicKey"
          },
          {
            "name": "reserved0",
            "type": {
              "array": [
                "u8",
                408
              ]
            }
          },
          {
            "name": "config",
            "type": {
              "defined": "ReserveConfig"
            }
          },
          {
            "name": "reserved1",
            "type": {
              "array": [
                "u8",
                704
              ]
            }
          },
          {
            "name": "state",
            "type": {
              "array": [
                "u8",
                512
              ]
            }
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "Amount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "units",
            "type": {
              "defined": "AmountUnits"
            }
          },
          {
            "name": "value",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "DepositCollateralBumpSeeds",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "collateralAccount",
            "type": "u8"
          },
          {
            "name": "depositAccount",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "InitReserveBumpSeeds",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "vault",
            "type": "u8"
          },
          {
            "name": "feeNoteVault",
            "type": "u8"
          },
          {
            "name": "dexOpenOrders",
            "type": "u8"
          },
          {
            "name": "dexSwapTokens",
            "type": "u8"
          },
          {
            "name": "depositNoteMint",
            "type": "u8"
          },
          {
            "name": "loanNoteMint",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "ReserveConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "utilizationRate1",
            "type": "u16"
          },
          {
            "name": "utilizationRate2",
            "type": "u16"
          },
          {
            "name": "borrowRate0",
            "type": "u16"
          },
          {
            "name": "borrowRate1",
            "type": "u16"
          },
          {
            "name": "borrowRate2",
            "type": "u16"
          },
          {
            "name": "borrowRate3",
            "type": "u16"
          },
          {
            "name": "minCollateralRatio",
            "type": "u16"
          },
          {
            "name": "liquidationPremium",
            "type": "u16"
          },
          {
            "name": "manageFeeCollectionThreshold",
            "type": "u64"
          },
          {
            "name": "manageFeeRate",
            "type": "u16"
          },
          {
            "name": "loanOriginationFee",
            "type": "u16"
          },
          {
            "name": "liquidationSlippage",
            "type": "u16"
          },
          {
            "name": "reserved0",
            "type": "u16"
          },
          {
            "name": "liquidationDexTradeMax",
            "type": "u64"
          },
          {
            "name": "reserved1",
            "type": {
              "array": [
                "u8",
                24
              ]
            }
          }
        ]
      }
    },
    {
      "name": "WithdrawCollateralBumpSeeds",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "collateralAccount",
            "type": "u8"
          },
          {
            "name": "depositAccount",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "CacheInvalidError",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Expired",
            "fields": [
              {
                "name": "msg",
                "type": "string"
              }
            ]
          },
          {
            "name": "TooNew",
            "fields": [
              {
                "name": "msg",
                "type": "string"
              }
            ]
          },
          {
            "name": "Invalidated"
          }
        ]
      }
    },
    {
      "name": "AmountUnits",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Tokens"
          },
          {
            "name": "DepositNotes"
          },
          {
            "name": "LoanNotes"
          }
        ]
      }
    },
    {
      "name": "Rounding",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Up"
          },
          {
            "name": "Down"
          }
        ]
      }
    },
    {
      "name": "DexSide",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Bid"
          },
          {
            "name": "Ask"
          }
        ]
      }
    },
    {
      "name": "Side",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Collateral"
          },
          {
            "name": "Loan"
          }
        ]
      }
    },
    {
      "name": "JobCompletion",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Partial"
          },
          {
            "name": "Full"
          }
        ]
      }
    }
  ],
  "events": [
    {
      "name": "BorrowEvent",
      "fields": [
        {
          "name": "borrower",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "reserve",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "debt",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "DepositCollateralEvent",
      "fields": [
        {
          "name": "depositor",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "reserve",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "amount",
          "type": {
            "defined": "Amount"
          },
          "index": false
        }
      ]
    },
    {
      "name": "LiquidateEvent",
      "fields": [
        {
          "name": "borrower",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "debtReserve",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "collateralReserve",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "paidAmount",
          "type": {
            "defined": "Amount"
          },
          "index": false
        },
        {
          "name": "collateralAmount",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "RepayEvent",
      "fields": [
        {
          "name": "borrower",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "reserve",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "amount",
          "type": {
            "defined": "Amount"
          },
          "index": false
        }
      ]
    },
    {
      "name": "WithdrawCollateralEvent",
      "fields": [
        {
          "name": "depositor",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "reserve",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "amount",
          "type": {
            "defined": "Amount"
          },
          "index": false
        }
      ]
    }
  ],
  "errors": [
    {
      "code": 300,
      "name": "ArithmeticError",
      "msg": "failed to perform some math operation safely"
    },
    {
      "code": 301,
      "name": "InvalidOracle",
      "msg": "oracle account provided is not valid"
    },
    {
      "code": 302,
      "name": "NoFreeReserves",
      "msg": "no free space left to add a new reserve in the market"
    },
    {
      "code": 303,
      "name": "NoFreeObligation",
      "msg": "no free space left to add the new loan or collateral in an obligation"
    },
    {
      "code": 304,
      "name": "UnregisteredPosition",
      "msg": "the obligation account doesn't have any record of the loan or collateral account"
    },
    {
      "code": 305,
      "name": "InvalidOraclePrice",
      "msg": "the oracle price account has an invalid price value"
    },
    {
      "code": 306,
      "name": "InsufficientCollateral",
      "msg": "there is not enough collateral deposited to borrow against"
    },
    {
      "code": 307,
      "name": "SimultaneousDepositAndBorrow",
      "msg": "cannot both deposit collateral to and borrow from the same reserve"
    },
    {
      "code": 308,
      "name": "ObligationHealthy",
      "msg": "cannot liquidate a healthy position"
    },
    {
      "code": 309,
      "name": "ObligationUnhealthy",
      "msg": "cannot perform an action that would leave the obligation unhealthy"
    },
    {
      "code": 310,
      "name": "ExceptionalReserveState",
      "msg": "reserve requires special action; call refresh_reserve until up to date"
    },
    {
      "code": 311,
      "name": "InvalidAmountUnits",
      "msg": "the units provided in the amount are not valid for the instruction"
    },
    {
      "code": 312,
      "name": "InvalidDexMarketMints",
      "msg": "the tokens in the DEX market don't match the reserve and lending market quote token"
    },
    {
      "code": 313,
      "name": "InvalidMarketAuthority",
      "msg": "the market authority provided doesn't match the market account"
    },
    {
      "code": 314,
      "name": "InvalidLiquidationQuoteTokenAccount",
      "msg": "the quote token account provided cannot be used for liquidations"
    },
    {
      "code": 315,
      "name": "ObligationAccountMismatch",
      "msg": "the obligation account doesn't have the collateral/loan registered"
    },
    {
      "code": 316,
      "name": "UnknownInstruction",
      "msg": "unknown instruction"
    },
    {
      "code": 317,
      "name": "Disallowed",
      "msg": "current conditions prevent an action from being performed"
    },
    {
      "code": 318,
      "name": "LiquidationSwapSlipped",
      "msg": "the actual slipped amount on the DEX trade exceeded the threshold configured"
    },
    {
      "code": 319,
      "name": "CollateralValueTooSmall",
      "msg": "the collateral value is too small for a DEX trade"
    },
    {
      "code": 320,
      "name": "LiquidationLowCollateral",
      "msg": "the collateral returned by the liquidation is smaller than requested"
    },
    {
      "code": 321,
      "name": "NotSupported",
      "msg": "this action is currently not supported by this version of the program"
    },
    {
      "code": 322,
      "name": "MarketHalted",
      "msg": "the market has currently halted this kind of operation"
    },
    {
      "code": 323,
      "name": "InvalidParameter",
      "msg": "a given parameter is not valid"
    }
  ]
};

export const IDL: Jet = {
  "version": "0.0.0",
  "name": "jet",
  "instructions": [
    {
      "name": "initMarket",
      "accounts": [
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "owner",
          "type": "publicKey"
        },
        {
          "name": "quoteCurrency",
          "type": "string"
        },
        {
          "name": "quoteTokenMint",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "initReserve",
      "accounts": [
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "reserve",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "feeNoteVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "dexSwapTokens",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "dexOpenOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "dexMarket",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "dexProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "oraclePrice",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "oracleProduct",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "depositNoteMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "loanNoteMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quoteTokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bump",
          "type": {
            "defined": "InitReserveBumpSeeds"
          }
        },
        {
          "name": "config",
          "type": {
            "defined": "ReserveConfig"
          }
        }
      ]
    },
    {
      "name": "updateReserveConfig",
      "accounts": [
        {
          "name": "market",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "reserve",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "newConfig",
          "type": {
            "defined": "ReserveConfig"
          }
        }
      ]
    },
    {
      "name": "initDepositAccount",
      "accounts": [
        {
          "name": "market",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "marketAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "reserve",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "depositNoteMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "depositor",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "depositAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bump",
          "type": "u8"
        }
      ]
    },
    {
      "name": "initCollateralAccount",
      "accounts": [
        {
          "name": "market",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "marketAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "obligation",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reserve",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "depositNoteMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "collateralAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bump",
          "type": "u8"
        }
      ]
    },
    {
      "name": "initLoanAccount",
      "accounts": [
        {
          "name": "market",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "marketAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "obligation",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reserve",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "loanNoteMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "loanAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bump",
          "type": "u8"
        }
      ]
    },
    {
      "name": "initObligation",
      "accounts": [
        {
          "name": "market",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "marketAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "borrower",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "obligation",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bump",
          "type": "u8"
        }
      ]
    },
    {
      "name": "setMarketOwner",
      "accounts": [
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "newOwner",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "setMarketFlags",
      "accounts": [
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "flags",
          "type": "u64"
        }
      ]
    },
    {
      "name": "closeDepositAccount",
      "accounts": [
        {
          "name": "market",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "marketAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "reserve",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "depositNoteMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "depositor",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "depositAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "receiverAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bump",
          "type": "u8"
        }
      ]
    },
    {
      "name": "deposit",
      "accounts": [
        {
          "name": "market",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "marketAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "reserve",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "depositNoteMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "depositor",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "depositAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "depositSource",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bump",
          "type": "u8"
        },
        {
          "name": "amount",
          "type": {
            "defined": "Amount"
          }
        }
      ]
    },
    {
      "name": "withdraw",
      "accounts": [
        {
          "name": "market",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "marketAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "reserve",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "depositNoteMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "depositor",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "depositAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "withdrawAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bump",
          "type": "u8"
        },
        {
          "name": "amount",
          "type": {
            "defined": "Amount"
          }
        }
      ]
    },
    {
      "name": "depositCollateral",
      "accounts": [
        {
          "name": "market",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "marketAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "reserve",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "obligation",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "depositAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "collateralAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bump",
          "type": {
            "defined": "DepositCollateralBumpSeeds"
          }
        },
        {
          "name": "amount",
          "type": {
            "defined": "Amount"
          }
        }
      ]
    },
    {
      "name": "withdrawCollateral",
      "accounts": [
        {
          "name": "market",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "marketAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "reserve",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "obligation",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "depositAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "collateralAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bump",
          "type": {
            "defined": "WithdrawCollateralBumpSeeds"
          }
        },
        {
          "name": "amount",
          "type": {
            "defined": "Amount"
          }
        }
      ]
    },
    {
      "name": "borrow",
      "accounts": [
        {
          "name": "market",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "marketAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "obligation",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reserve",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "loanNoteMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "borrower",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "loanAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "receiverAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bump",
          "type": "u8"
        },
        {
          "name": "amount",
          "type": {
            "defined": "Amount"
          }
        }
      ]
    },
    {
      "name": "repay",
      "accounts": [
        {
          "name": "market",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "marketAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "obligation",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reserve",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "loanNoteMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "loanAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payerAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": {
            "defined": "Amount"
          }
        }
      ]
    },
    {
      "name": "liquidate",
      "accounts": [
        {
          "name": "market",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "marketAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "obligation",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reserve",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "collateralReserve",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "loanNoteMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "loanAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "collateralAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payerAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "receiverAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": {
            "defined": "Amount"
          }
        },
        {
          "name": "minCollateral",
          "type": "u64"
        }
      ]
    },
    {
      "name": "mockLiquidateDex",
      "accounts": [
        {
          "name": "sourceMarket",
          "accounts": [
            {
              "name": "market",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "openOrders",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "requestQueue",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "eventQueue",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "bids",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "asks",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "coinVault",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "pcVault",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "vaultSigner",
              "isMut": false,
              "isSigner": false
            }
          ]
        },
        {
          "name": "targetMarket",
          "accounts": [
            {
              "name": "market",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "openOrders",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "requestQueue",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "eventQueue",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "bids",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "asks",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "coinVault",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "pcVault",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "vaultSigner",
              "isMut": false,
              "isSigner": false
            }
          ]
        },
        {
          "name": "toLiquidate",
          "accounts": [
            {
              "name": "market",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "marketAuthority",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "obligation",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "loanReserve",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "loanReserveVault",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "loanNoteMint",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "loanAccount",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "collateralReserve",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "collateralReserveVault",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "depositNoteMint",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "collateralAccount",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "dexSwapTokens",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "dexProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "tokenProgram",
              "isMut": false,
              "isSigner": false
            },
            {
              "name": "rent",
              "isMut": false,
              "isSigner": false
            }
          ]
        }
      ],
      "args": []
    },
    {
      "name": "refreshReserve",
      "accounts": [
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "reserve",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "feeNoteVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "depositNoteMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "pythOraclePrice",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "market",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "version",
            "type": "u32"
          },
          {
            "name": "quoteExponent",
            "type": "i32"
          },
          {
            "name": "quoteCurrency",
            "type": {
              "array": [
                "u8",
                15
              ]
            }
          },
          {
            "name": "authorityBumpSeed",
            "type": {
              "array": [
                "u8",
                1
              ]
            }
          },
          {
            "name": "authoritySeed",
            "type": "publicKey"
          },
          {
            "name": "marketAuthority",
            "type": "publicKey"
          },
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "quoteTokenMint",
            "type": "publicKey"
          },
          {
            "name": "flags",
            "type": "u64"
          },
          {
            "name": "reserved",
            "type": {
              "array": [
                "u8",
                352
              ]
            }
          },
          {
            "name": "reserves",
            "type": {
              "array": [
                "u8",
                12288
              ]
            }
          }
        ]
      }
    },
    {
      "name": "obligation",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "version",
            "type": "u32"
          },
          {
            "name": "reserved0",
            "type": "u32"
          },
          {
            "name": "market",
            "type": "publicKey"
          },
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "reserved1",
            "type": {
              "array": [
                "u8",
                184
              ]
            }
          },
          {
            "name": "cached",
            "type": {
              "array": [
                "u8",
                256
              ]
            }
          },
          {
            "name": "collateral",
            "type": {
              "array": [
                "u8",
                2048
              ]
            }
          },
          {
            "name": "loans",
            "type": {
              "array": [
                "u8",
                2048
              ]
            }
          }
        ]
      }
    },
    {
      "name": "reserve",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "version",
            "type": "u16"
          },
          {
            "name": "index",
            "type": "u16"
          },
          {
            "name": "exponent",
            "type": "i32"
          },
          {
            "name": "market",
            "type": "publicKey"
          },
          {
            "name": "pythOraclePrice",
            "type": "publicKey"
          },
          {
            "name": "pythOracleProduct",
            "type": "publicKey"
          },
          {
            "name": "tokenMint",
            "type": "publicKey"
          },
          {
            "name": "depositNoteMint",
            "type": "publicKey"
          },
          {
            "name": "loanNoteMint",
            "type": "publicKey"
          },
          {
            "name": "vault",
            "type": "publicKey"
          },
          {
            "name": "feeNoteVault",
            "type": "publicKey"
          },
          {
            "name": "dexSwapTokens",
            "type": "publicKey"
          },
          {
            "name": "dexOpenOrders",
            "type": "publicKey"
          },
          {
            "name": "dexMarket",
            "type": "publicKey"
          },
          {
            "name": "reserved0",
            "type": {
              "array": [
                "u8",
                408
              ]
            }
          },
          {
            "name": "config",
            "type": {
              "defined": "ReserveConfig"
            }
          },
          {
            "name": "reserved1",
            "type": {
              "array": [
                "u8",
                704
              ]
            }
          },
          {
            "name": "state",
            "type": {
              "array": [
                "u8",
                512
              ]
            }
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "Amount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "units",
            "type": {
              "defined": "AmountUnits"
            }
          },
          {
            "name": "value",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "DepositCollateralBumpSeeds",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "collateralAccount",
            "type": "u8"
          },
          {
            "name": "depositAccount",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "InitReserveBumpSeeds",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "vault",
            "type": "u8"
          },
          {
            "name": "feeNoteVault",
            "type": "u8"
          },
          {
            "name": "dexOpenOrders",
            "type": "u8"
          },
          {
            "name": "dexSwapTokens",
            "type": "u8"
          },
          {
            "name": "depositNoteMint",
            "type": "u8"
          },
          {
            "name": "loanNoteMint",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "ReserveConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "utilizationRate1",
            "type": "u16"
          },
          {
            "name": "utilizationRate2",
            "type": "u16"
          },
          {
            "name": "borrowRate0",
            "type": "u16"
          },
          {
            "name": "borrowRate1",
            "type": "u16"
          },
          {
            "name": "borrowRate2",
            "type": "u16"
          },
          {
            "name": "borrowRate3",
            "type": "u16"
          },
          {
            "name": "minCollateralRatio",
            "type": "u16"
          },
          {
            "name": "liquidationPremium",
            "type": "u16"
          },
          {
            "name": "manageFeeCollectionThreshold",
            "type": "u64"
          },
          {
            "name": "manageFeeRate",
            "type": "u16"
          },
          {
            "name": "loanOriginationFee",
            "type": "u16"
          },
          {
            "name": "liquidationSlippage",
            "type": "u16"
          },
          {
            "name": "reserved0",
            "type": "u16"
          },
          {
            "name": "liquidationDexTradeMax",
            "type": "u64"
          },
          {
            "name": "reserved1",
            "type": {
              "array": [
                "u8",
                24
              ]
            }
          }
        ]
      }
    },
    {
      "name": "WithdrawCollateralBumpSeeds",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "collateralAccount",
            "type": "u8"
          },
          {
            "name": "depositAccount",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "CacheInvalidError",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Expired",
            "fields": [
              {
                "name": "msg",
                "type": "string"
              }
            ]
          },
          {
            "name": "TooNew",
            "fields": [
              {
                "name": "msg",
                "type": "string"
              }
            ]
          },
          {
            "name": "Invalidated"
          }
        ]
      }
    },
    {
      "name": "AmountUnits",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Tokens"
          },
          {
            "name": "DepositNotes"
          },
          {
            "name": "LoanNotes"
          }
        ]
      }
    },
    {
      "name": "Rounding",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Up"
          },
          {
            "name": "Down"
          }
        ]
      }
    },
    {
      "name": "DexSide",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Bid"
          },
          {
            "name": "Ask"
          }
        ]
      }
    },
    {
      "name": "Side",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Collateral"
          },
          {
            "name": "Loan"
          }
        ]
      }
    },
    {
      "name": "JobCompletion",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Partial"
          },
          {
            "name": "Full"
          }
        ]
      }
    }
  ],
  "events": [
    {
      "name": "BorrowEvent",
      "fields": [
        {
          "name": "borrower",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "reserve",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "debt",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "DepositCollateralEvent",
      "fields": [
        {
          "name": "depositor",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "reserve",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "amount",
          "type": {
            "defined": "Amount"
          },
          "index": false
        }
      ]
    },
    {
      "name": "LiquidateEvent",
      "fields": [
        {
          "name": "borrower",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "debtReserve",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "collateralReserve",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "paidAmount",
          "type": {
            "defined": "Amount"
          },
          "index": false
        },
        {
          "name": "collateralAmount",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "RepayEvent",
      "fields": [
        {
          "name": "borrower",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "reserve",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "amount",
          "type": {
            "defined": "Amount"
          },
          "index": false
        }
      ]
    },
    {
      "name": "WithdrawCollateralEvent",
      "fields": [
        {
          "name": "depositor",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "reserve",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "amount",
          "type": {
            "defined": "Amount"
          },
          "index": false
        }
      ]
    }
  ],
  "errors": [
    {
      "code": 300,
      "name": "ArithmeticError",
      "msg": "failed to perform some math operation safely"
    },
    {
      "code": 301,
      "name": "InvalidOracle",
      "msg": "oracle account provided is not valid"
    },
    {
      "code": 302,
      "name": "NoFreeReserves",
      "msg": "no free space left to add a new reserve in the market"
    },
    {
      "code": 303,
      "name": "NoFreeObligation",
      "msg": "no free space left to add the new loan or collateral in an obligation"
    },
    {
      "code": 304,
      "name": "UnregisteredPosition",
      "msg": "the obligation account doesn't have any record of the loan or collateral account"
    },
    {
      "code": 305,
      "name": "InvalidOraclePrice",
      "msg": "the oracle price account has an invalid price value"
    },
    {
      "code": 306,
      "name": "InsufficientCollateral",
      "msg": "there is not enough collateral deposited to borrow against"
    },
    {
      "code": 307,
      "name": "SimultaneousDepositAndBorrow",
      "msg": "cannot both deposit collateral to and borrow from the same reserve"
    },
    {
      "code": 308,
      "name": "ObligationHealthy",
      "msg": "cannot liquidate a healthy position"
    },
    {
      "code": 309,
      "name": "ObligationUnhealthy",
      "msg": "cannot perform an action that would leave the obligation unhealthy"
    },
    {
      "code": 310,
      "name": "ExceptionalReserveState",
      "msg": "reserve requires special action; call refresh_reserve until up to date"
    },
    {
      "code": 311,
      "name": "InvalidAmountUnits",
      "msg": "the units provided in the amount are not valid for the instruction"
    },
    {
      "code": 312,
      "name": "InvalidDexMarketMints",
      "msg": "the tokens in the DEX market don't match the reserve and lending market quote token"
    },
    {
      "code": 313,
      "name": "InvalidMarketAuthority",
      "msg": "the market authority provided doesn't match the market account"
    },
    {
      "code": 314,
      "name": "InvalidLiquidationQuoteTokenAccount",
      "msg": "the quote token account provided cannot be used for liquidations"
    },
    {
      "code": 315,
      "name": "ObligationAccountMismatch",
      "msg": "the obligation account doesn't have the collateral/loan registered"
    },
    {
      "code": 316,
      "name": "UnknownInstruction",
      "msg": "unknown instruction"
    },
    {
      "code": 317,
      "name": "Disallowed",
      "msg": "current conditions prevent an action from being performed"
    },
    {
      "code": 318,
      "name": "LiquidationSwapSlipped",
      "msg": "the actual slipped amount on the DEX trade exceeded the threshold configured"
    },
    {
      "code": 319,
      "name": "CollateralValueTooSmall",
      "msg": "the collateral value is too small for a DEX trade"
    },
    {
      "code": 320,
      "name": "LiquidationLowCollateral",
      "msg": "the collateral returned by the liquidation is smaller than requested"
    },
    {
      "code": 321,
      "name": "NotSupported",
      "msg": "this action is currently not supported by this version of the program"
    },
    {
      "code": 322,
      "name": "MarketHalted",
      "msg": "the market has currently halted this kind of operation"
    },
    {
      "code": 323,
      "name": "InvalidParameter",
      "msg": "a given parameter is not valid"
    }
  ]
};
