# `provider` Submodule <a name="`provider` Submodule" id="@cdktn/provider-databricks.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabricksProvider <a name="DatabricksProvider" id="@cdktn/provider-databricks.provider.DatabricksProvider"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs databricks}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.provider.DatabricksProvider.Initializer"></a>

```typescript
import { provider } from '@cdktn/provider-databricks'

new provider.DatabricksProvider(scope: Construct, id: string, config?: DatabricksProviderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.provider.DatabricksProviderConfig">DatabricksProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.provider.DatabricksProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.provider.DatabricksProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-databricks.provider.DatabricksProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.provider.DatabricksProviderConfig">DatabricksProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.resetActionsIdTokenRequestToken">resetActionsIdTokenRequestToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.resetActionsIdTokenRequestUrl">resetActionsIdTokenRequestUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.resetAudience">resetAudience</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.resetAuthType">resetAuthType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.resetAzureClientId">resetAzureClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.resetAzureClientSecret">resetAzureClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.resetAzureEnvironment">resetAzureEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.resetAzureLoginAppId">resetAzureLoginAppId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.resetAzureTenantId">resetAzureTenantId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.resetAzureUseMsi">resetAzureUseMsi</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.resetAzureWorkspaceResourceId">resetAzureWorkspaceResourceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.resetCloud">resetCloud</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.resetClusterId">resetClusterId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.resetConfigFile">resetConfigFile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.resetDatabricksCliPath">resetDatabricksCliPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.resetDatabricksIdTokenFilepath">resetDatabricksIdTokenFilepath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.resetDebugHeaders">resetDebugHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.resetDebugTruncateBytes">resetDebugTruncateBytes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.resetDisableOauthRefreshToken">resetDisableOauthRefreshToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.resetDiscoveryUrl">resetDiscoveryUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.resetExperimentalIsUnifiedHost">resetExperimentalIsUnifiedHost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.resetGoogleCredentials">resetGoogleCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.resetGoogleServiceAccount">resetGoogleServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.resetHttpTimeoutSeconds">resetHttpTimeoutSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.resetMetadataServiceUrl">resetMetadataServiceUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.resetOauthCallbackPort">resetOauthCallbackPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.resetOidcTokenEnv">resetOidcTokenEnv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.resetProfile">resetProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.resetRateLimit">resetRateLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.resetRetryTimeoutSeconds">resetRetryTimeoutSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.resetScopes">resetScopes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.resetServerlessComputeId">resetServerlessComputeId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.resetSkipVerify">resetSkipVerify</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.resetToken">resetToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.resetUsername">resetUsername</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.resetWarehouseId">resetWarehouseId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.provider.DatabricksProvider.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.provider.DatabricksProvider.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.provider.DatabricksProvider.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.provider.DatabricksProvider.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.provider.DatabricksProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.provider.DatabricksProvider.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.provider.DatabricksProvider.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.provider.DatabricksProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.provider.DatabricksProvider.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.provider.DatabricksProvider.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.provider.DatabricksProvider.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.provider.DatabricksProvider.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `resetAccountId` <a name="resetAccountId" id="@cdktn/provider-databricks.provider.DatabricksProvider.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetActionsIdTokenRequestToken` <a name="resetActionsIdTokenRequestToken" id="@cdktn/provider-databricks.provider.DatabricksProvider.resetActionsIdTokenRequestToken"></a>

```typescript
public resetActionsIdTokenRequestToken(): void
```

##### `resetActionsIdTokenRequestUrl` <a name="resetActionsIdTokenRequestUrl" id="@cdktn/provider-databricks.provider.DatabricksProvider.resetActionsIdTokenRequestUrl"></a>

```typescript
public resetActionsIdTokenRequestUrl(): void
```

##### `resetAlias` <a name="resetAlias" id="@cdktn/provider-databricks.provider.DatabricksProvider.resetAlias"></a>

```typescript
public resetAlias(): void
```

##### `resetAudience` <a name="resetAudience" id="@cdktn/provider-databricks.provider.DatabricksProvider.resetAudience"></a>

```typescript
public resetAudience(): void
```

##### `resetAuthType` <a name="resetAuthType" id="@cdktn/provider-databricks.provider.DatabricksProvider.resetAuthType"></a>

```typescript
public resetAuthType(): void
```

##### `resetAzureClientId` <a name="resetAzureClientId" id="@cdktn/provider-databricks.provider.DatabricksProvider.resetAzureClientId"></a>

```typescript
public resetAzureClientId(): void
```

##### `resetAzureClientSecret` <a name="resetAzureClientSecret" id="@cdktn/provider-databricks.provider.DatabricksProvider.resetAzureClientSecret"></a>

```typescript
public resetAzureClientSecret(): void
```

##### `resetAzureEnvironment` <a name="resetAzureEnvironment" id="@cdktn/provider-databricks.provider.DatabricksProvider.resetAzureEnvironment"></a>

```typescript
public resetAzureEnvironment(): void
```

##### `resetAzureLoginAppId` <a name="resetAzureLoginAppId" id="@cdktn/provider-databricks.provider.DatabricksProvider.resetAzureLoginAppId"></a>

```typescript
public resetAzureLoginAppId(): void
```

##### `resetAzureTenantId` <a name="resetAzureTenantId" id="@cdktn/provider-databricks.provider.DatabricksProvider.resetAzureTenantId"></a>

```typescript
public resetAzureTenantId(): void
```

##### `resetAzureUseMsi` <a name="resetAzureUseMsi" id="@cdktn/provider-databricks.provider.DatabricksProvider.resetAzureUseMsi"></a>

```typescript
public resetAzureUseMsi(): void
```

##### `resetAzureWorkspaceResourceId` <a name="resetAzureWorkspaceResourceId" id="@cdktn/provider-databricks.provider.DatabricksProvider.resetAzureWorkspaceResourceId"></a>

```typescript
public resetAzureWorkspaceResourceId(): void
```

##### `resetClientId` <a name="resetClientId" id="@cdktn/provider-databricks.provider.DatabricksProvider.resetClientId"></a>

```typescript
public resetClientId(): void
```

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktn/provider-databricks.provider.DatabricksProvider.resetClientSecret"></a>

```typescript
public resetClientSecret(): void
```

##### `resetCloud` <a name="resetCloud" id="@cdktn/provider-databricks.provider.DatabricksProvider.resetCloud"></a>

```typescript
public resetCloud(): void
```

##### `resetClusterId` <a name="resetClusterId" id="@cdktn/provider-databricks.provider.DatabricksProvider.resetClusterId"></a>

```typescript
public resetClusterId(): void
```

##### `resetConfigFile` <a name="resetConfigFile" id="@cdktn/provider-databricks.provider.DatabricksProvider.resetConfigFile"></a>

```typescript
public resetConfigFile(): void
```

##### `resetDatabricksCliPath` <a name="resetDatabricksCliPath" id="@cdktn/provider-databricks.provider.DatabricksProvider.resetDatabricksCliPath"></a>

```typescript
public resetDatabricksCliPath(): void
```

##### `resetDatabricksIdTokenFilepath` <a name="resetDatabricksIdTokenFilepath" id="@cdktn/provider-databricks.provider.DatabricksProvider.resetDatabricksIdTokenFilepath"></a>

```typescript
public resetDatabricksIdTokenFilepath(): void
```

##### `resetDebugHeaders` <a name="resetDebugHeaders" id="@cdktn/provider-databricks.provider.DatabricksProvider.resetDebugHeaders"></a>

```typescript
public resetDebugHeaders(): void
```

##### `resetDebugTruncateBytes` <a name="resetDebugTruncateBytes" id="@cdktn/provider-databricks.provider.DatabricksProvider.resetDebugTruncateBytes"></a>

```typescript
public resetDebugTruncateBytes(): void
```

##### `resetDisableOauthRefreshToken` <a name="resetDisableOauthRefreshToken" id="@cdktn/provider-databricks.provider.DatabricksProvider.resetDisableOauthRefreshToken"></a>

```typescript
public resetDisableOauthRefreshToken(): void
```

##### `resetDiscoveryUrl` <a name="resetDiscoveryUrl" id="@cdktn/provider-databricks.provider.DatabricksProvider.resetDiscoveryUrl"></a>

```typescript
public resetDiscoveryUrl(): void
```

##### `resetExperimentalIsUnifiedHost` <a name="resetExperimentalIsUnifiedHost" id="@cdktn/provider-databricks.provider.DatabricksProvider.resetExperimentalIsUnifiedHost"></a>

```typescript
public resetExperimentalIsUnifiedHost(): void
```

##### `resetGoogleCredentials` <a name="resetGoogleCredentials" id="@cdktn/provider-databricks.provider.DatabricksProvider.resetGoogleCredentials"></a>

```typescript
public resetGoogleCredentials(): void
```

##### `resetGoogleServiceAccount` <a name="resetGoogleServiceAccount" id="@cdktn/provider-databricks.provider.DatabricksProvider.resetGoogleServiceAccount"></a>

```typescript
public resetGoogleServiceAccount(): void
```

##### `resetHost` <a name="resetHost" id="@cdktn/provider-databricks.provider.DatabricksProvider.resetHost"></a>

```typescript
public resetHost(): void
```

##### `resetHttpTimeoutSeconds` <a name="resetHttpTimeoutSeconds" id="@cdktn/provider-databricks.provider.DatabricksProvider.resetHttpTimeoutSeconds"></a>

```typescript
public resetHttpTimeoutSeconds(): void
```

##### `resetMetadataServiceUrl` <a name="resetMetadataServiceUrl" id="@cdktn/provider-databricks.provider.DatabricksProvider.resetMetadataServiceUrl"></a>

```typescript
public resetMetadataServiceUrl(): void
```

##### `resetOauthCallbackPort` <a name="resetOauthCallbackPort" id="@cdktn/provider-databricks.provider.DatabricksProvider.resetOauthCallbackPort"></a>

```typescript
public resetOauthCallbackPort(): void
```

##### `resetOidcTokenEnv` <a name="resetOidcTokenEnv" id="@cdktn/provider-databricks.provider.DatabricksProvider.resetOidcTokenEnv"></a>

```typescript
public resetOidcTokenEnv(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktn/provider-databricks.provider.DatabricksProvider.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetProfile` <a name="resetProfile" id="@cdktn/provider-databricks.provider.DatabricksProvider.resetProfile"></a>

```typescript
public resetProfile(): void
```

##### `resetRateLimit` <a name="resetRateLimit" id="@cdktn/provider-databricks.provider.DatabricksProvider.resetRateLimit"></a>

```typescript
public resetRateLimit(): void
```

##### `resetRetryTimeoutSeconds` <a name="resetRetryTimeoutSeconds" id="@cdktn/provider-databricks.provider.DatabricksProvider.resetRetryTimeoutSeconds"></a>

```typescript
public resetRetryTimeoutSeconds(): void
```

##### `resetScopes` <a name="resetScopes" id="@cdktn/provider-databricks.provider.DatabricksProvider.resetScopes"></a>

```typescript
public resetScopes(): void
```

##### `resetServerlessComputeId` <a name="resetServerlessComputeId" id="@cdktn/provider-databricks.provider.DatabricksProvider.resetServerlessComputeId"></a>

```typescript
public resetServerlessComputeId(): void
```

##### `resetSkipVerify` <a name="resetSkipVerify" id="@cdktn/provider-databricks.provider.DatabricksProvider.resetSkipVerify"></a>

```typescript
public resetSkipVerify(): void
```

##### `resetToken` <a name="resetToken" id="@cdktn/provider-databricks.provider.DatabricksProvider.resetToken"></a>

```typescript
public resetToken(): void
```

##### `resetUsername` <a name="resetUsername" id="@cdktn/provider-databricks.provider.DatabricksProvider.resetUsername"></a>

```typescript
public resetUsername(): void
```

##### `resetWarehouseId` <a name="resetWarehouseId" id="@cdktn/provider-databricks.provider.DatabricksProvider.resetWarehouseId"></a>

```typescript
public resetWarehouseId(): void
```

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.provider.DatabricksProvider.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DatabricksProvider resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.provider.DatabricksProvider.isConstruct"></a>

```typescript
import { provider } from '@cdktn/provider-databricks'

provider.DatabricksProvider.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.provider.DatabricksProvider.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.provider.DatabricksProvider.isTerraformElement"></a>

```typescript
import { provider } from '@cdktn/provider-databricks'

provider.DatabricksProvider.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.provider.DatabricksProvider.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@cdktn/provider-databricks.provider.DatabricksProvider.isTerraformProvider"></a>

```typescript
import { provider } from '@cdktn/provider-databricks'

provider.DatabricksProvider.isTerraformProvider(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.provider.DatabricksProvider.isTerraformProvider.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.provider.DatabricksProvider.generateConfigForImport"></a>

```typescript
import { provider } from '@cdktn/provider-databricks'

provider.DatabricksProvider.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DatabricksProvider resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.provider.DatabricksProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.provider.DatabricksProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabricksProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.provider.DatabricksProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabricksProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.provider.DatabricksProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DatabricksProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.metaAttributes">metaAttributes</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.actionsIdTokenRequestTokenInput">actionsIdTokenRequestTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.actionsIdTokenRequestUrlInput">actionsIdTokenRequestUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.audienceInput">audienceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.authTypeInput">authTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.azureClientIdInput">azureClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.azureClientSecretInput">azureClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.azureEnvironmentInput">azureEnvironmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.azureLoginAppIdInput">azureLoginAppIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.azureTenantIdInput">azureTenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.azureUseMsiInput">azureUseMsiInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.azureWorkspaceResourceIdInput">azureWorkspaceResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.cloudInput">cloudInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.clusterIdInput">clusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.configFileInput">configFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.databricksCliPathInput">databricksCliPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.databricksIdTokenFilepathInput">databricksIdTokenFilepathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.debugHeadersInput">debugHeadersInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.debugTruncateBytesInput">debugTruncateBytesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.disableOauthRefreshTokenInput">disableOauthRefreshTokenInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.discoveryUrlInput">discoveryUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.experimentalIsUnifiedHostInput">experimentalIsUnifiedHostInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.googleCredentialsInput">googleCredentialsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.googleServiceAccountInput">googleServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.httpTimeoutSecondsInput">httpTimeoutSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.metadataServiceUrlInput">metadataServiceUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.oauthCallbackPortInput">oauthCallbackPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.oidcTokenEnvInput">oidcTokenEnvInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.profileInput">profileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.rateLimitInput">rateLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.retryTimeoutSecondsInput">retryTimeoutSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.scopesInput">scopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.serverlessComputeIdInput">serverlessComputeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.skipVerifyInput">skipVerifyInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.tokenInput">tokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.warehouseIdInput">warehouseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.actionsIdTokenRequestToken">actionsIdTokenRequestToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.actionsIdTokenRequestUrl">actionsIdTokenRequestUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.audience">audience</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.authType">authType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.azureClientId">azureClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.azureClientSecret">azureClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.azureEnvironment">azureEnvironment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.azureLoginAppId">azureLoginAppId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.azureTenantId">azureTenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.azureUseMsi">azureUseMsi</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.azureWorkspaceResourceId">azureWorkspaceResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.cloud">cloud</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.clusterId">clusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.configFile">configFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.databricksCliPath">databricksCliPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.databricksIdTokenFilepath">databricksIdTokenFilepath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.debugHeaders">debugHeaders</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.debugTruncateBytes">debugTruncateBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.disableOauthRefreshToken">disableOauthRefreshToken</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.discoveryUrl">discoveryUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.experimentalIsUnifiedHost">experimentalIsUnifiedHost</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.googleCredentials">googleCredentials</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.googleServiceAccount">googleServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.httpTimeoutSeconds">httpTimeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.metadataServiceUrl">metadataServiceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.oauthCallbackPort">oauthCallbackPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.oidcTokenEnv">oidcTokenEnv</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.profile">profile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.rateLimit">rateLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.retryTimeoutSeconds">retryTimeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.scopes">scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.serverlessComputeId">serverlessComputeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.skipVerify">skipVerify</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.token">token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.warehouseId">warehouseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.metaAttributes"></a>

```typescript
public readonly metaAttributes: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.terraformProviderSource"></a>

```typescript
public readonly terraformProviderSource: string;
```

- *Type:* string

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `actionsIdTokenRequestTokenInput`<sup>Optional</sup> <a name="actionsIdTokenRequestTokenInput" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.actionsIdTokenRequestTokenInput"></a>

```typescript
public readonly actionsIdTokenRequestTokenInput: string;
```

- *Type:* string

---

##### `actionsIdTokenRequestUrlInput`<sup>Optional</sup> <a name="actionsIdTokenRequestUrlInput" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.actionsIdTokenRequestUrlInput"></a>

```typescript
public readonly actionsIdTokenRequestUrlInput: string;
```

- *Type:* string

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `audienceInput`<sup>Optional</sup> <a name="audienceInput" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.audienceInput"></a>

```typescript
public readonly audienceInput: string;
```

- *Type:* string

---

##### `authTypeInput`<sup>Optional</sup> <a name="authTypeInput" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.authTypeInput"></a>

```typescript
public readonly authTypeInput: string;
```

- *Type:* string

---

##### `azureClientIdInput`<sup>Optional</sup> <a name="azureClientIdInput" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.azureClientIdInput"></a>

```typescript
public readonly azureClientIdInput: string;
```

- *Type:* string

---

##### `azureClientSecretInput`<sup>Optional</sup> <a name="azureClientSecretInput" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.azureClientSecretInput"></a>

```typescript
public readonly azureClientSecretInput: string;
```

- *Type:* string

---

##### `azureEnvironmentInput`<sup>Optional</sup> <a name="azureEnvironmentInput" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.azureEnvironmentInput"></a>

```typescript
public readonly azureEnvironmentInput: string;
```

- *Type:* string

---

##### `azureLoginAppIdInput`<sup>Optional</sup> <a name="azureLoginAppIdInput" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.azureLoginAppIdInput"></a>

```typescript
public readonly azureLoginAppIdInput: string;
```

- *Type:* string

---

##### `azureTenantIdInput`<sup>Optional</sup> <a name="azureTenantIdInput" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.azureTenantIdInput"></a>

```typescript
public readonly azureTenantIdInput: string;
```

- *Type:* string

---

##### `azureUseMsiInput`<sup>Optional</sup> <a name="azureUseMsiInput" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.azureUseMsiInput"></a>

```typescript
public readonly azureUseMsiInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `azureWorkspaceResourceIdInput`<sup>Optional</sup> <a name="azureWorkspaceResourceIdInput" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.azureWorkspaceResourceIdInput"></a>

```typescript
public readonly azureWorkspaceResourceIdInput: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `cloudInput`<sup>Optional</sup> <a name="cloudInput" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.cloudInput"></a>

```typescript
public readonly cloudInput: string;
```

- *Type:* string

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.clusterIdInput"></a>

```typescript
public readonly clusterIdInput: string;
```

- *Type:* string

---

##### `configFileInput`<sup>Optional</sup> <a name="configFileInput" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.configFileInput"></a>

```typescript
public readonly configFileInput: string;
```

- *Type:* string

---

##### `databricksCliPathInput`<sup>Optional</sup> <a name="databricksCliPathInput" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.databricksCliPathInput"></a>

```typescript
public readonly databricksCliPathInput: string;
```

- *Type:* string

---

##### `databricksIdTokenFilepathInput`<sup>Optional</sup> <a name="databricksIdTokenFilepathInput" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.databricksIdTokenFilepathInput"></a>

```typescript
public readonly databricksIdTokenFilepathInput: string;
```

- *Type:* string

---

##### `debugHeadersInput`<sup>Optional</sup> <a name="debugHeadersInput" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.debugHeadersInput"></a>

```typescript
public readonly debugHeadersInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `debugTruncateBytesInput`<sup>Optional</sup> <a name="debugTruncateBytesInput" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.debugTruncateBytesInput"></a>

```typescript
public readonly debugTruncateBytesInput: number;
```

- *Type:* number

---

##### `disableOauthRefreshTokenInput`<sup>Optional</sup> <a name="disableOauthRefreshTokenInput" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.disableOauthRefreshTokenInput"></a>

```typescript
public readonly disableOauthRefreshTokenInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `discoveryUrlInput`<sup>Optional</sup> <a name="discoveryUrlInput" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.discoveryUrlInput"></a>

```typescript
public readonly discoveryUrlInput: string;
```

- *Type:* string

---

##### `experimentalIsUnifiedHostInput`<sup>Optional</sup> <a name="experimentalIsUnifiedHostInput" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.experimentalIsUnifiedHostInput"></a>

```typescript
public readonly experimentalIsUnifiedHostInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `googleCredentialsInput`<sup>Optional</sup> <a name="googleCredentialsInput" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.googleCredentialsInput"></a>

```typescript
public readonly googleCredentialsInput: string;
```

- *Type:* string

---

##### `googleServiceAccountInput`<sup>Optional</sup> <a name="googleServiceAccountInput" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.googleServiceAccountInput"></a>

```typescript
public readonly googleServiceAccountInput: string;
```

- *Type:* string

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* string

---

##### `httpTimeoutSecondsInput`<sup>Optional</sup> <a name="httpTimeoutSecondsInput" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.httpTimeoutSecondsInput"></a>

```typescript
public readonly httpTimeoutSecondsInput: number;
```

- *Type:* number

---

##### `metadataServiceUrlInput`<sup>Optional</sup> <a name="metadataServiceUrlInput" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.metadataServiceUrlInput"></a>

```typescript
public readonly metadataServiceUrlInput: string;
```

- *Type:* string

---

##### `oauthCallbackPortInput`<sup>Optional</sup> <a name="oauthCallbackPortInput" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.oauthCallbackPortInput"></a>

```typescript
public readonly oauthCallbackPortInput: number;
```

- *Type:* number

---

##### `oidcTokenEnvInput`<sup>Optional</sup> <a name="oidcTokenEnvInput" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.oidcTokenEnvInput"></a>

```typescript
public readonly oidcTokenEnvInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `profileInput`<sup>Optional</sup> <a name="profileInput" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.profileInput"></a>

```typescript
public readonly profileInput: string;
```

- *Type:* string

---

##### `rateLimitInput`<sup>Optional</sup> <a name="rateLimitInput" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.rateLimitInput"></a>

```typescript
public readonly rateLimitInput: number;
```

- *Type:* number

---

##### `retryTimeoutSecondsInput`<sup>Optional</sup> <a name="retryTimeoutSecondsInput" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.retryTimeoutSecondsInput"></a>

```typescript
public readonly retryTimeoutSecondsInput: number;
```

- *Type:* number

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.scopesInput"></a>

```typescript
public readonly scopesInput: string[];
```

- *Type:* string[]

---

##### `serverlessComputeIdInput`<sup>Optional</sup> <a name="serverlessComputeIdInput" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.serverlessComputeIdInput"></a>

```typescript
public readonly serverlessComputeIdInput: string;
```

- *Type:* string

---

##### `skipVerifyInput`<sup>Optional</sup> <a name="skipVerifyInput" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.skipVerifyInput"></a>

```typescript
public readonly skipVerifyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.tokenInput"></a>

```typescript
public readonly tokenInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `warehouseIdInput`<sup>Optional</sup> <a name="warehouseIdInput" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.warehouseIdInput"></a>

```typescript
public readonly warehouseIdInput: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `actionsIdTokenRequestToken`<sup>Optional</sup> <a name="actionsIdTokenRequestToken" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.actionsIdTokenRequestToken"></a>

```typescript
public readonly actionsIdTokenRequestToken: string;
```

- *Type:* string

---

##### `actionsIdTokenRequestUrl`<sup>Optional</sup> <a name="actionsIdTokenRequestUrl" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.actionsIdTokenRequestUrl"></a>

```typescript
public readonly actionsIdTokenRequestUrl: string;
```

- *Type:* string

---

##### `audience`<sup>Optional</sup> <a name="audience" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.audience"></a>

```typescript
public readonly audience: string;
```

- *Type:* string

---

##### `authType`<sup>Optional</sup> <a name="authType" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.authType"></a>

```typescript
public readonly authType: string;
```

- *Type:* string

---

##### `azureClientId`<sup>Optional</sup> <a name="azureClientId" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.azureClientId"></a>

```typescript
public readonly azureClientId: string;
```

- *Type:* string

---

##### `azureClientSecret`<sup>Optional</sup> <a name="azureClientSecret" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.azureClientSecret"></a>

```typescript
public readonly azureClientSecret: string;
```

- *Type:* string

---

##### `azureEnvironment`<sup>Optional</sup> <a name="azureEnvironment" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.azureEnvironment"></a>

```typescript
public readonly azureEnvironment: string;
```

- *Type:* string

---

##### `azureLoginAppId`<sup>Optional</sup> <a name="azureLoginAppId" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.azureLoginAppId"></a>

```typescript
public readonly azureLoginAppId: string;
```

- *Type:* string

---

##### `azureTenantId`<sup>Optional</sup> <a name="azureTenantId" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.azureTenantId"></a>

```typescript
public readonly azureTenantId: string;
```

- *Type:* string

---

##### `azureUseMsi`<sup>Optional</sup> <a name="azureUseMsi" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.azureUseMsi"></a>

```typescript
public readonly azureUseMsi: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `azureWorkspaceResourceId`<sup>Optional</sup> <a name="azureWorkspaceResourceId" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.azureWorkspaceResourceId"></a>

```typescript
public readonly azureWorkspaceResourceId: string;
```

- *Type:* string

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `cloud`<sup>Optional</sup> <a name="cloud" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.cloud"></a>

```typescript
public readonly cloud: string;
```

- *Type:* string

---

##### `clusterId`<sup>Optional</sup> <a name="clusterId" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

---

##### `configFile`<sup>Optional</sup> <a name="configFile" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.configFile"></a>

```typescript
public readonly configFile: string;
```

- *Type:* string

---

##### `databricksCliPath`<sup>Optional</sup> <a name="databricksCliPath" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.databricksCliPath"></a>

```typescript
public readonly databricksCliPath: string;
```

- *Type:* string

---

##### `databricksIdTokenFilepath`<sup>Optional</sup> <a name="databricksIdTokenFilepath" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.databricksIdTokenFilepath"></a>

```typescript
public readonly databricksIdTokenFilepath: string;
```

- *Type:* string

---

##### `debugHeaders`<sup>Optional</sup> <a name="debugHeaders" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.debugHeaders"></a>

```typescript
public readonly debugHeaders: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `debugTruncateBytes`<sup>Optional</sup> <a name="debugTruncateBytes" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.debugTruncateBytes"></a>

```typescript
public readonly debugTruncateBytes: number;
```

- *Type:* number

---

##### `disableOauthRefreshToken`<sup>Optional</sup> <a name="disableOauthRefreshToken" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.disableOauthRefreshToken"></a>

```typescript
public readonly disableOauthRefreshToken: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `discoveryUrl`<sup>Optional</sup> <a name="discoveryUrl" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.discoveryUrl"></a>

```typescript
public readonly discoveryUrl: string;
```

- *Type:* string

---

##### `experimentalIsUnifiedHost`<sup>Optional</sup> <a name="experimentalIsUnifiedHost" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.experimentalIsUnifiedHost"></a>

```typescript
public readonly experimentalIsUnifiedHost: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `googleCredentials`<sup>Optional</sup> <a name="googleCredentials" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.googleCredentials"></a>

```typescript
public readonly googleCredentials: string;
```

- *Type:* string

---

##### `googleServiceAccount`<sup>Optional</sup> <a name="googleServiceAccount" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.googleServiceAccount"></a>

```typescript
public readonly googleServiceAccount: string;
```

- *Type:* string

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `httpTimeoutSeconds`<sup>Optional</sup> <a name="httpTimeoutSeconds" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.httpTimeoutSeconds"></a>

```typescript
public readonly httpTimeoutSeconds: number;
```

- *Type:* number

---

##### `metadataServiceUrl`<sup>Optional</sup> <a name="metadataServiceUrl" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.metadataServiceUrl"></a>

```typescript
public readonly metadataServiceUrl: string;
```

- *Type:* string

---

##### `oauthCallbackPort`<sup>Optional</sup> <a name="oauthCallbackPort" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.oauthCallbackPort"></a>

```typescript
public readonly oauthCallbackPort: number;
```

- *Type:* number

---

##### `oidcTokenEnv`<sup>Optional</sup> <a name="oidcTokenEnv" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.oidcTokenEnv"></a>

```typescript
public readonly oidcTokenEnv: string;
```

- *Type:* string

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `profile`<sup>Optional</sup> <a name="profile" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.profile"></a>

```typescript
public readonly profile: string;
```

- *Type:* string

---

##### `rateLimit`<sup>Optional</sup> <a name="rateLimit" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.rateLimit"></a>

```typescript
public readonly rateLimit: number;
```

- *Type:* number

---

##### `retryTimeoutSeconds`<sup>Optional</sup> <a name="retryTimeoutSeconds" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.retryTimeoutSeconds"></a>

```typescript
public readonly retryTimeoutSeconds: number;
```

- *Type:* number

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

---

##### `serverlessComputeId`<sup>Optional</sup> <a name="serverlessComputeId" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.serverlessComputeId"></a>

```typescript
public readonly serverlessComputeId: string;
```

- *Type:* string

---

##### `skipVerify`<sup>Optional</sup> <a name="skipVerify" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.skipVerify"></a>

```typescript
public readonly skipVerify: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `warehouseId`<sup>Optional</sup> <a name="warehouseId" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.warehouseId"></a>

```typescript
public readonly warehouseId: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProvider.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.provider.DatabricksProvider.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabricksProviderConfig <a name="DatabricksProviderConfig" id="@cdktn/provider-databricks.provider.DatabricksProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.provider.DatabricksProviderConfig.Initializer"></a>

```typescript
import { provider } from '@cdktn/provider-databricks'

const databricksProviderConfig: provider.DatabricksProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProviderConfig.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs#account_id DatabricksProvider#account_id}. |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProviderConfig.property.actionsIdTokenRequestToken">actionsIdTokenRequestToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs#actions_id_token_request_token DatabricksProvider#actions_id_token_request_token}. |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProviderConfig.property.actionsIdTokenRequestUrl">actionsIdTokenRequestUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs#actions_id_token_request_url DatabricksProvider#actions_id_token_request_url}. |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProviderConfig.property.alias">alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProviderConfig.property.audience">audience</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs#audience DatabricksProvider#audience}. |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProviderConfig.property.authType">authType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs#auth_type DatabricksProvider#auth_type}. |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProviderConfig.property.azureClientId">azureClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs#azure_client_id DatabricksProvider#azure_client_id}. |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProviderConfig.property.azureClientSecret">azureClientSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs#azure_client_secret DatabricksProvider#azure_client_secret}. |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProviderConfig.property.azureEnvironment">azureEnvironment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs#azure_environment DatabricksProvider#azure_environment}. |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProviderConfig.property.azureLoginAppId">azureLoginAppId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs#azure_login_app_id DatabricksProvider#azure_login_app_id}. |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProviderConfig.property.azureTenantId">azureTenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs#azure_tenant_id DatabricksProvider#azure_tenant_id}. |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProviderConfig.property.azureUseMsi">azureUseMsi</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs#azure_use_msi DatabricksProvider#azure_use_msi}. |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProviderConfig.property.azureWorkspaceResourceId">azureWorkspaceResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs#azure_workspace_resource_id DatabricksProvider#azure_workspace_resource_id}. |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProviderConfig.property.clientId">clientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs#client_id DatabricksProvider#client_id}. |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProviderConfig.property.clientSecret">clientSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs#client_secret DatabricksProvider#client_secret}. |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProviderConfig.property.cloud">cloud</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs#cloud DatabricksProvider#cloud}. |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProviderConfig.property.clusterId">clusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs#cluster_id DatabricksProvider#cluster_id}. |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProviderConfig.property.configFile">configFile</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs#config_file DatabricksProvider#config_file}. |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProviderConfig.property.databricksCliPath">databricksCliPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs#databricks_cli_path DatabricksProvider#databricks_cli_path}. |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProviderConfig.property.databricksIdTokenFilepath">databricksIdTokenFilepath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs#databricks_id_token_filepath DatabricksProvider#databricks_id_token_filepath}. |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProviderConfig.property.debugHeaders">debugHeaders</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs#debug_headers DatabricksProvider#debug_headers}. |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProviderConfig.property.debugTruncateBytes">debugTruncateBytes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs#debug_truncate_bytes DatabricksProvider#debug_truncate_bytes}. |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProviderConfig.property.disableOauthRefreshToken">disableOauthRefreshToken</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs#disable_oauth_refresh_token DatabricksProvider#disable_oauth_refresh_token}. |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProviderConfig.property.discoveryUrl">discoveryUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs#discovery_url DatabricksProvider#discovery_url}. |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProviderConfig.property.experimentalIsUnifiedHost">experimentalIsUnifiedHost</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs#experimental_is_unified_host DatabricksProvider#experimental_is_unified_host}. |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProviderConfig.property.googleCredentials">googleCredentials</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs#google_credentials DatabricksProvider#google_credentials}. |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProviderConfig.property.googleServiceAccount">googleServiceAccount</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs#google_service_account DatabricksProvider#google_service_account}. |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProviderConfig.property.host">host</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs#host DatabricksProvider#host}. |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProviderConfig.property.httpTimeoutSeconds">httpTimeoutSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs#http_timeout_seconds DatabricksProvider#http_timeout_seconds}. |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProviderConfig.property.metadataServiceUrl">metadataServiceUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs#metadata_service_url DatabricksProvider#metadata_service_url}. |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProviderConfig.property.oauthCallbackPort">oauthCallbackPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs#oauth_callback_port DatabricksProvider#oauth_callback_port}. |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProviderConfig.property.oidcTokenEnv">oidcTokenEnv</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs#oidc_token_env DatabricksProvider#oidc_token_env}. |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProviderConfig.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs#password DatabricksProvider#password}. |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProviderConfig.property.profile">profile</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs#profile DatabricksProvider#profile}. |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProviderConfig.property.rateLimit">rateLimit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs#rate_limit DatabricksProvider#rate_limit}. |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProviderConfig.property.retryTimeoutSeconds">retryTimeoutSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs#retry_timeout_seconds DatabricksProvider#retry_timeout_seconds}. |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProviderConfig.property.scopes">scopes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs#scopes DatabricksProvider#scopes}. |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProviderConfig.property.serverlessComputeId">serverlessComputeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs#serverless_compute_id DatabricksProvider#serverless_compute_id}. |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProviderConfig.property.skipVerify">skipVerify</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs#skip_verify DatabricksProvider#skip_verify}. |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProviderConfig.property.token">token</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs#token DatabricksProvider#token}. |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProviderConfig.property.username">username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs#username DatabricksProvider#username}. |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProviderConfig.property.warehouseId">warehouseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs#warehouse_id DatabricksProvider#warehouse_id}. |
| <code><a href="#@cdktn/provider-databricks.provider.DatabricksProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs#workspace_id DatabricksProvider#workspace_id}. |

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-databricks.provider.DatabricksProviderConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs#account_id DatabricksProvider#account_id}.

---

##### `actionsIdTokenRequestToken`<sup>Optional</sup> <a name="actionsIdTokenRequestToken" id="@cdktn/provider-databricks.provider.DatabricksProviderConfig.property.actionsIdTokenRequestToken"></a>

```typescript
public readonly actionsIdTokenRequestToken: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs#actions_id_token_request_token DatabricksProvider#actions_id_token_request_token}.

---

##### `actionsIdTokenRequestUrl`<sup>Optional</sup> <a name="actionsIdTokenRequestUrl" id="@cdktn/provider-databricks.provider.DatabricksProviderConfig.property.actionsIdTokenRequestUrl"></a>

```typescript
public readonly actionsIdTokenRequestUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs#actions_id_token_request_url DatabricksProvider#actions_id_token_request_url}.

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-databricks.provider.DatabricksProviderConfig.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs#alias DatabricksProvider#alias}

---

##### `audience`<sup>Optional</sup> <a name="audience" id="@cdktn/provider-databricks.provider.DatabricksProviderConfig.property.audience"></a>

```typescript
public readonly audience: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs#audience DatabricksProvider#audience}.

---

##### `authType`<sup>Optional</sup> <a name="authType" id="@cdktn/provider-databricks.provider.DatabricksProviderConfig.property.authType"></a>

```typescript
public readonly authType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs#auth_type DatabricksProvider#auth_type}.

---

##### `azureClientId`<sup>Optional</sup> <a name="azureClientId" id="@cdktn/provider-databricks.provider.DatabricksProviderConfig.property.azureClientId"></a>

```typescript
public readonly azureClientId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs#azure_client_id DatabricksProvider#azure_client_id}.

---

##### `azureClientSecret`<sup>Optional</sup> <a name="azureClientSecret" id="@cdktn/provider-databricks.provider.DatabricksProviderConfig.property.azureClientSecret"></a>

```typescript
public readonly azureClientSecret: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs#azure_client_secret DatabricksProvider#azure_client_secret}.

---

##### `azureEnvironment`<sup>Optional</sup> <a name="azureEnvironment" id="@cdktn/provider-databricks.provider.DatabricksProviderConfig.property.azureEnvironment"></a>

```typescript
public readonly azureEnvironment: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs#azure_environment DatabricksProvider#azure_environment}.

---

##### `azureLoginAppId`<sup>Optional</sup> <a name="azureLoginAppId" id="@cdktn/provider-databricks.provider.DatabricksProviderConfig.property.azureLoginAppId"></a>

```typescript
public readonly azureLoginAppId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs#azure_login_app_id DatabricksProvider#azure_login_app_id}.

---

##### `azureTenantId`<sup>Optional</sup> <a name="azureTenantId" id="@cdktn/provider-databricks.provider.DatabricksProviderConfig.property.azureTenantId"></a>

```typescript
public readonly azureTenantId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs#azure_tenant_id DatabricksProvider#azure_tenant_id}.

---

##### `azureUseMsi`<sup>Optional</sup> <a name="azureUseMsi" id="@cdktn/provider-databricks.provider.DatabricksProviderConfig.property.azureUseMsi"></a>

```typescript
public readonly azureUseMsi: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs#azure_use_msi DatabricksProvider#azure_use_msi}.

---

##### `azureWorkspaceResourceId`<sup>Optional</sup> <a name="azureWorkspaceResourceId" id="@cdktn/provider-databricks.provider.DatabricksProviderConfig.property.azureWorkspaceResourceId"></a>

```typescript
public readonly azureWorkspaceResourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs#azure_workspace_resource_id DatabricksProvider#azure_workspace_resource_id}.

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktn/provider-databricks.provider.DatabricksProviderConfig.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs#client_id DatabricksProvider#client_id}.

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktn/provider-databricks.provider.DatabricksProviderConfig.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs#client_secret DatabricksProvider#client_secret}.

---

##### `cloud`<sup>Optional</sup> <a name="cloud" id="@cdktn/provider-databricks.provider.DatabricksProviderConfig.property.cloud"></a>

```typescript
public readonly cloud: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs#cloud DatabricksProvider#cloud}.

---

##### `clusterId`<sup>Optional</sup> <a name="clusterId" id="@cdktn/provider-databricks.provider.DatabricksProviderConfig.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs#cluster_id DatabricksProvider#cluster_id}.

---

##### `configFile`<sup>Optional</sup> <a name="configFile" id="@cdktn/provider-databricks.provider.DatabricksProviderConfig.property.configFile"></a>

```typescript
public readonly configFile: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs#config_file DatabricksProvider#config_file}.

---

##### `databricksCliPath`<sup>Optional</sup> <a name="databricksCliPath" id="@cdktn/provider-databricks.provider.DatabricksProviderConfig.property.databricksCliPath"></a>

```typescript
public readonly databricksCliPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs#databricks_cli_path DatabricksProvider#databricks_cli_path}.

---

##### `databricksIdTokenFilepath`<sup>Optional</sup> <a name="databricksIdTokenFilepath" id="@cdktn/provider-databricks.provider.DatabricksProviderConfig.property.databricksIdTokenFilepath"></a>

```typescript
public readonly databricksIdTokenFilepath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs#databricks_id_token_filepath DatabricksProvider#databricks_id_token_filepath}.

---

##### `debugHeaders`<sup>Optional</sup> <a name="debugHeaders" id="@cdktn/provider-databricks.provider.DatabricksProviderConfig.property.debugHeaders"></a>

```typescript
public readonly debugHeaders: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs#debug_headers DatabricksProvider#debug_headers}.

---

##### `debugTruncateBytes`<sup>Optional</sup> <a name="debugTruncateBytes" id="@cdktn/provider-databricks.provider.DatabricksProviderConfig.property.debugTruncateBytes"></a>

```typescript
public readonly debugTruncateBytes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs#debug_truncate_bytes DatabricksProvider#debug_truncate_bytes}.

---

##### `disableOauthRefreshToken`<sup>Optional</sup> <a name="disableOauthRefreshToken" id="@cdktn/provider-databricks.provider.DatabricksProviderConfig.property.disableOauthRefreshToken"></a>

```typescript
public readonly disableOauthRefreshToken: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs#disable_oauth_refresh_token DatabricksProvider#disable_oauth_refresh_token}.

---

##### `discoveryUrl`<sup>Optional</sup> <a name="discoveryUrl" id="@cdktn/provider-databricks.provider.DatabricksProviderConfig.property.discoveryUrl"></a>

```typescript
public readonly discoveryUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs#discovery_url DatabricksProvider#discovery_url}.

---

##### `experimentalIsUnifiedHost`<sup>Optional</sup> <a name="experimentalIsUnifiedHost" id="@cdktn/provider-databricks.provider.DatabricksProviderConfig.property.experimentalIsUnifiedHost"></a>

```typescript
public readonly experimentalIsUnifiedHost: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs#experimental_is_unified_host DatabricksProvider#experimental_is_unified_host}.

---

##### `googleCredentials`<sup>Optional</sup> <a name="googleCredentials" id="@cdktn/provider-databricks.provider.DatabricksProviderConfig.property.googleCredentials"></a>

```typescript
public readonly googleCredentials: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs#google_credentials DatabricksProvider#google_credentials}.

---

##### `googleServiceAccount`<sup>Optional</sup> <a name="googleServiceAccount" id="@cdktn/provider-databricks.provider.DatabricksProviderConfig.property.googleServiceAccount"></a>

```typescript
public readonly googleServiceAccount: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs#google_service_account DatabricksProvider#google_service_account}.

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktn/provider-databricks.provider.DatabricksProviderConfig.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs#host DatabricksProvider#host}.

---

##### `httpTimeoutSeconds`<sup>Optional</sup> <a name="httpTimeoutSeconds" id="@cdktn/provider-databricks.provider.DatabricksProviderConfig.property.httpTimeoutSeconds"></a>

```typescript
public readonly httpTimeoutSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs#http_timeout_seconds DatabricksProvider#http_timeout_seconds}.

---

##### `metadataServiceUrl`<sup>Optional</sup> <a name="metadataServiceUrl" id="@cdktn/provider-databricks.provider.DatabricksProviderConfig.property.metadataServiceUrl"></a>

```typescript
public readonly metadataServiceUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs#metadata_service_url DatabricksProvider#metadata_service_url}.

---

##### `oauthCallbackPort`<sup>Optional</sup> <a name="oauthCallbackPort" id="@cdktn/provider-databricks.provider.DatabricksProviderConfig.property.oauthCallbackPort"></a>

```typescript
public readonly oauthCallbackPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs#oauth_callback_port DatabricksProvider#oauth_callback_port}.

---

##### `oidcTokenEnv`<sup>Optional</sup> <a name="oidcTokenEnv" id="@cdktn/provider-databricks.provider.DatabricksProviderConfig.property.oidcTokenEnv"></a>

```typescript
public readonly oidcTokenEnv: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs#oidc_token_env DatabricksProvider#oidc_token_env}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-databricks.provider.DatabricksProviderConfig.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs#password DatabricksProvider#password}.

---

##### `profile`<sup>Optional</sup> <a name="profile" id="@cdktn/provider-databricks.provider.DatabricksProviderConfig.property.profile"></a>

```typescript
public readonly profile: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs#profile DatabricksProvider#profile}.

---

##### `rateLimit`<sup>Optional</sup> <a name="rateLimit" id="@cdktn/provider-databricks.provider.DatabricksProviderConfig.property.rateLimit"></a>

```typescript
public readonly rateLimit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs#rate_limit DatabricksProvider#rate_limit}.

---

##### `retryTimeoutSeconds`<sup>Optional</sup> <a name="retryTimeoutSeconds" id="@cdktn/provider-databricks.provider.DatabricksProviderConfig.property.retryTimeoutSeconds"></a>

```typescript
public readonly retryTimeoutSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs#retry_timeout_seconds DatabricksProvider#retry_timeout_seconds}.

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktn/provider-databricks.provider.DatabricksProviderConfig.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs#scopes DatabricksProvider#scopes}.

---

##### `serverlessComputeId`<sup>Optional</sup> <a name="serverlessComputeId" id="@cdktn/provider-databricks.provider.DatabricksProviderConfig.property.serverlessComputeId"></a>

```typescript
public readonly serverlessComputeId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs#serverless_compute_id DatabricksProvider#serverless_compute_id}.

---

##### `skipVerify`<sup>Optional</sup> <a name="skipVerify" id="@cdktn/provider-databricks.provider.DatabricksProviderConfig.property.skipVerify"></a>

```typescript
public readonly skipVerify: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs#skip_verify DatabricksProvider#skip_verify}.

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktn/provider-databricks.provider.DatabricksProviderConfig.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs#token DatabricksProvider#token}.

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktn/provider-databricks.provider.DatabricksProviderConfig.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs#username DatabricksProvider#username}.

---

##### `warehouseId`<sup>Optional</sup> <a name="warehouseId" id="@cdktn/provider-databricks.provider.DatabricksProviderConfig.property.warehouseId"></a>

```typescript
public readonly warehouseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs#warehouse_id DatabricksProvider#warehouse_id}.

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.provider.DatabricksProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs#workspace_id DatabricksProvider#workspace_id}.

---



