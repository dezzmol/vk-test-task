import {
    AppRoot,
    Panel,
    PanelHeader,
    SplitCol,
    SplitLayout,
    usePlatform,
    View
} from "@vkontakte/vkui";
import {GroupSection} from "@/widgets/GroupSection";

const App = () => {
    const platform = usePlatform();

    return (
        <AppRoot>
            <SplitLayout
                header={platform !== 'vkcom' && <PanelHeader delimiter="none"/>}
            >
                <SplitCol autoSpaced>
                    <View activePanel="main">
                        <Panel id="main">
                            <PanelHeader>VKUI</PanelHeader>
                            <GroupSection />
                        </Panel>
                    </View>
                </SplitCol>
            </SplitLayout>
        </AppRoot>
    );
};

export default App;