import { Instance, types } from 'mobx-state-tree';


const AppStore = types.model('AppStore', {
  // themeStore: ThemeStore,
  // userInfoStore: UserInfoStore,
  // categoryStore: CategoryStore,
  // productDetailStore: ProductDetailStore,
  // routerStore: RouterStore,
  // configStore: ConfigStore,
});

export type AppStoreModel = Instance<typeof AppStore>;

let appStore: AppStoreModel | null = null;

export const getAppStore = (): AppStoreModel => appStore!;

// export type RootStoreEnv = {
//   themeStore: HomeStoreModel;
//   categoryStore: CategoryStoreModel;
// };
export const createStore = (): AppStoreModel => {
  // const env: RootStoreEnv = { themeStore, categoryStore };
  if (appStore) return appStore;

  appStore = AppStore.create(
    // {
    //   themeStore: {},
    //   userInfoStore: {},
    //   categoryStore: {},
    //   productDetailStore: {

    //   },
    //   routerStore: {},
    //   configStore: {},
    // }

  );

  // appStore.themeStore.load();
  // appStore.userInfoStore.load();
  // appStore.categoryStore.load();
  // appStore.configStore.load();
  return appStore;
};
