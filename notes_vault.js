var notes_vault = [
  {
    sitePassword: "CyNbnLpNlKQQ",
    siteUrl: "dEVtsUeDKmbTsm3Kh5uE2TbiOmSe1s47cgbUdrneq8peEu2bw0Md",
    siteUsername: "key@gmail.com",
    vaultName: "google pass",
  },
  {
    sitePassword: "CNqKMDVvYBkD",
    siteUrl: "lP84uFMR2eVkwfuo+A8t3mWTn8IejbaGyB3cXfYSd3w5FDmYAbR7",
    siteUsername: "sdf",
    vaultName: "new pass",
  },
  {
    sitePassword: "DPeR14+znPnr98fDMyGzJwpuA7eFsnupBPnFdw==",
    siteUrl: "https://www.google.com/",
    siteUsername: "xIBCYGzArt9h0li/1UE0jpkkXsgfeyob8GUBklU=",
    vaultName: "sdf amazon",
  },
];

var password_vault = [
  {
    sitePassword: "CyNbnLpNlKQQ",
    siteUrl: "dEVtsUeDKmbTsm3Kh5uE2TbiOmSe1s47cgbUdrneq8peEu2bw0Md",
    siteUsername: "key@gmail.com",
    vaultName: "Google pass",
  },
  {
    sitePassword: "CNqKMDVvYBkD",
    siteUrl: "lP84uFMR2eVkwfuo+A8t3mWTn8IejbaGyB3cXfYSd3w5FDmYAbR7",
    siteUsername: "sdf",
    vaultName: "Amazon pass",
  },
  {
    sitePassword: "DPeR14+znPnr98fDMyGzJwpuA7eFsnupBPnFdw==",
    siteUrl: "https://www.google.com/",
    siteUsername: "xIBCYGzArt9h0li/1UE0jpkkXsgfeyob8GUBklU=",
    vaultName: "Make my own",
  },
];

const passVaultArray = password_vault.filter((pass) =>
  pass.vaultName.includes("pass")
);

const notesVaultArray = notes_vault.filter((notes) =>
  notes.vaultName.includes("pass")
);

vaultArray = passVaultArray.concat(notesVaultArray);
console.log(vaultArray);
