import { Dispatch, SetStateAction } from 'react';
import { SearchResultShopInfoList } from '@/components/Home/AddShopDialog';
import AddShopDialogContentMessageView from '@/components/Home/AddShopDialog/AddShopDialogContent/AddShopDialogContentMessageView';
import AddShopDialogContentListView from '@/components/Home/AddShopDialog/AddShopDialogContent/AddShopDialogContentListView';

type Props = {
  isSearching: boolean;
  isSearched: boolean;
  selectedShopName: string | null;
  setSelectedShopName: Dispatch<SetStateAction<string | null>>;
  isDuplicateShopInfo: boolean;
  setIsDuplicateShopInfo: Dispatch<SetStateAction<boolean>>;
  isAddedShopInfo: boolean;
  setIsAddedShopInfo: Dispatch<SetStateAction<boolean>>;
  searchResultShopInfoList: SearchResultShopInfoList;
  closeDialog: VoidFunction;
};

const AddShopDialogContent: React.FC<Props> = ({
  isSearching,
  isSearched,
  selectedShopName,
  setSelectedShopName,
  isDuplicateShopInfo,
  setIsDuplicateShopInfo,
  isAddedShopInfo,
  setIsAddedShopInfo,
  searchResultShopInfoList,
  closeDialog,
}) => {
  if (isSearching) {
    return <AddShopDialogContentMessageView text="検索中..." />;
  }

  if (isAddedShopInfo) {
    if (isDuplicateShopInfo) {
      return <AddShopDialogContentMessageView text="すでに行きたいお店リストに追加済みです" />;
    }
    return <AddShopDialogContentMessageView text={`${selectedShopName || ''} を行きたいお店リストに追加しました！`} />;
  }

  if (isSearched) {
    return (
      <AddShopDialogContentListView
        setSelectedShopName={setSelectedShopName}
        setIsDuplicateShopInfo={setIsDuplicateShopInfo}
        isAddedShopInfo={isAddedShopInfo}
        setIsAddedShopInfo={setIsAddedShopInfo}
        searchResultShopInfoList={searchResultShopInfoList}
        closeDialog={closeDialog}
      />
    );
  }
  return null;
};

export default AddShopDialogContent;
