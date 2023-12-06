import React, { useEffect, useState } from 'react';
import { Dimensions, View } from 'react-native';
import { FlashList } from '@shopify/flash-list';

import { IEntries } from '~/@types';
import { Screen, Text } from '~/common/components';
import { tw } from '~/common/utils';
import { entriesService } from '~/features/entries/services';

export default function Entries() {
  const [eventData, setEventData] = useState<IEntries[] | null>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const fetchData = async (pageNumber: number) => {
    const [err, data] = await entriesService.index(pageNumber);
    setEventData((prevData) => (pageNumber === 1 ? data : [...(prevData || []), ...data]));
    setError(err);
    setLoading(false);
  };

  useEffect(() => {
    fetchData(1);
  }, []);

  const handleEndReached = () => {
    if (!loading) {
      setLoading(true);
      setPage((prevPage) => prevPage + 1);
      fetchData(page + 1);
    }
  };

  return (
    <Screen>
      <View style={styles.mainContainer}>
        <FlashList
          data={eventData}
          renderItem={({ item }) => <DetailView title={item.title} time={item.time} address={item.address} />}
          keyExtractor={(item, index) => index.toString()}
          estimatedItemSize={50}
          showsVerticalScrollIndicator={false}
          onEndReached={handleEndReached}
          onEndReachedThreshold={0.1} // Adjust this threshold as needed
          // ListFooterComponent={() => loading && <ActivityIndicator />} // Display a loading indicator
        />
      </View>
    </Screen>
  );
}

const DetailView = (props: { title: string; time?: string; address?: string }) => {
  const { title, time, address } = props;

  return (
    <View>
      <View style={styles.detailContainer}>
        <Text numberOfLines={1}>{title}</Text>
        {!!time && <Text numberOfLines={1}>{time}</Text>}
        {!!address && <Text numberOfLines={1}>{address}</Text>}
      </View>
    </View>
  );
};

const styles = {
  mainContainer: { height: Dimensions.get('screen').height - 83, width: Dimensions.get('screen').width },
  detailContainer: tw.style('mx-2 my-3 border-b-slate-100'),
};
