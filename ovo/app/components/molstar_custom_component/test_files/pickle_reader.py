import pandas as pd

obj = pd.read_pickle(r"./multichain_more/result_0.trb")

# for a, b in zip(obj["con_ref_pdb_idx"], obj["con_hal_pdb_idx"]):
#     print(a, b)

print(obj)
