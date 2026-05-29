# `app` Submodule <a name="`app` Submodule" id="@cdktn/provider-databricks.app"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### App <a name="App" id="@cdktn/provider-databricks.app.App"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app databricks_app}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.app.App.Initializer"></a>

```typescript
import { app } from '@cdktn/provider-databricks'

new app.App(scope: Construct, id: string, config: AppConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.App.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.app.App.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.app.App.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppConfig">AppConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.app.App.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.app.App.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.app.App.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.app.AppConfig">AppConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.App.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.app.App.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.app.App.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.app.App.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.app.App.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.app.App.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.app.App.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.app.App.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.app.App.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.app.App.putGitRepository">putGitRepository</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.putResources">putResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.putTelemetryExportDestinations">putTelemetryExportDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.resetBudgetPolicyId">resetBudgetPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.resetComputeMaxInstances">resetComputeMaxInstances</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.resetComputeMinInstances">resetComputeMinInstances</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.resetComputeSize">resetComputeSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.resetGitRepository">resetGitRepository</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.resetNoCompute">resetNoCompute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.resetResources">resetResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.resetSpace">resetSpace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.resetTelemetryExportDestinations">resetTelemetryExportDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.resetUsagePolicyId">resetUsagePolicyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.resetUserApiScopes">resetUserApiScopes</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.app.App.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.app.App.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.app.App.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.app.App.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.app.App.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.app.App.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.app.App.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.app.App.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.app.App.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.app.App.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.app.App.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.app.App.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-databricks.app.App.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.app.App.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.app.App.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.App.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.app.App.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.App.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.app.App.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.App.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.app.App.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.App.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.app.App.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.App.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.app.App.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.App.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.app.App.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.App.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.app.App.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.App.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.app.App.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.App.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-databricks.app.App.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-databricks.app.App.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.app.App.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.app.App.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.app.App.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.App.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-databricks.app.App.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.app.App.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-databricks.app.App.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.app.App.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.app.App.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-databricks.app.App.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.app.App.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putGitRepository` <a name="putGitRepository" id="@cdktn/provider-databricks.app.App.putGitRepository"></a>

```typescript
public putGitRepository(value: AppGitRepository): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.app.App.putGitRepository.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.app.AppGitRepository">AppGitRepository</a>

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.app.App.putProviderConfig"></a>

```typescript
public putProviderConfig(value: AppProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.app.App.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.app.AppProviderConfig">AppProviderConfig</a>

---

##### `putResources` <a name="putResources" id="@cdktn/provider-databricks.app.App.putResources"></a>

```typescript
public putResources(value: IResolvable | AppResources[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.app.App.putResources.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.app.AppResources">AppResources</a>[]

---

##### `putTelemetryExportDestinations` <a name="putTelemetryExportDestinations" id="@cdktn/provider-databricks.app.App.putTelemetryExportDestinations"></a>

```typescript
public putTelemetryExportDestinations(value: IResolvable | AppTelemetryExportDestinations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.app.App.putTelemetryExportDestinations.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinations">AppTelemetryExportDestinations</a>[]

---

##### `resetBudgetPolicyId` <a name="resetBudgetPolicyId" id="@cdktn/provider-databricks.app.App.resetBudgetPolicyId"></a>

```typescript
public resetBudgetPolicyId(): void
```

##### `resetComputeMaxInstances` <a name="resetComputeMaxInstances" id="@cdktn/provider-databricks.app.App.resetComputeMaxInstances"></a>

```typescript
public resetComputeMaxInstances(): void
```

##### `resetComputeMinInstances` <a name="resetComputeMinInstances" id="@cdktn/provider-databricks.app.App.resetComputeMinInstances"></a>

```typescript
public resetComputeMinInstances(): void
```

##### `resetComputeSize` <a name="resetComputeSize" id="@cdktn/provider-databricks.app.App.resetComputeSize"></a>

```typescript
public resetComputeSize(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-databricks.app.App.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetGitRepository` <a name="resetGitRepository" id="@cdktn/provider-databricks.app.App.resetGitRepository"></a>

```typescript
public resetGitRepository(): void
```

##### `resetNoCompute` <a name="resetNoCompute" id="@cdktn/provider-databricks.app.App.resetNoCompute"></a>

```typescript
public resetNoCompute(): void
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.app.App.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

##### `resetResources` <a name="resetResources" id="@cdktn/provider-databricks.app.App.resetResources"></a>

```typescript
public resetResources(): void
```

##### `resetSpace` <a name="resetSpace" id="@cdktn/provider-databricks.app.App.resetSpace"></a>

```typescript
public resetSpace(): void
```

##### `resetTelemetryExportDestinations` <a name="resetTelemetryExportDestinations" id="@cdktn/provider-databricks.app.App.resetTelemetryExportDestinations"></a>

```typescript
public resetTelemetryExportDestinations(): void
```

##### `resetUsagePolicyId` <a name="resetUsagePolicyId" id="@cdktn/provider-databricks.app.App.resetUsagePolicyId"></a>

```typescript
public resetUsagePolicyId(): void
```

##### `resetUserApiScopes` <a name="resetUserApiScopes" id="@cdktn/provider-databricks.app.App.resetUserApiScopes"></a>

```typescript
public resetUserApiScopes(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.App.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.app.App.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a App resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.app.App.isConstruct"></a>

```typescript
import { app } from '@cdktn/provider-databricks'

app.App.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.app.App.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.app.App.isTerraformElement"></a>

```typescript
import { app } from '@cdktn/provider-databricks'

app.App.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.app.App.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-databricks.app.App.isTerraformResource"></a>

```typescript
import { app } from '@cdktn/provider-databricks'

app.App.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.app.App.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.app.App.generateConfigForImport"></a>

```typescript
import { app } from '@cdktn/provider-databricks'

app.App.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a App resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.app.App.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.app.App.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the App to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.app.App.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing App that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.app.App.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the App to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.App.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.app.App.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.activeDeployment">activeDeployment</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference">AppActiveDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.appStatus">appStatus</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppAppStatusOutputReference">AppAppStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.computeStatus">computeStatus</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppComputeStatusOutputReference">AppComputeStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.creator">creator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.defaultSourceCodePath">defaultSourceCodePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.effectiveBudgetPolicyId">effectiveBudgetPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.effectiveUsagePolicyId">effectiveUsagePolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.effectiveUserApiScopes">effectiveUserApiScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.gitRepository">gitRepository</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppGitRepositoryOutputReference">AppGitRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.oauth2AppClientId">oauth2AppClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.oauth2AppIntegrationId">oauth2AppIntegrationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.pendingDeployment">pendingDeployment</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference">AppPendingDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppProviderConfigOutputReference">AppProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.resources">resources</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppResourcesList">AppResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.servicePrincipalClientId">servicePrincipalClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.servicePrincipalId">servicePrincipalId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.servicePrincipalName">servicePrincipalName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.telemetryExportDestinations">telemetryExportDestinations</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsList">AppTelemetryExportDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.thumbnailUrl">thumbnailUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.updater">updater</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.budgetPolicyIdInput">budgetPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.computeMaxInstancesInput">computeMaxInstancesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.computeMinInstancesInput">computeMinInstancesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.computeSizeInput">computeSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.gitRepositoryInput">gitRepositoryInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.app.AppGitRepository">AppGitRepository</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.noComputeInput">noComputeInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.app.AppProviderConfig">AppProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.resourcesInput">resourcesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.app.AppResources">AppResources</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.spaceInput">spaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.telemetryExportDestinationsInput">telemetryExportDestinationsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinations">AppTelemetryExportDestinations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.usagePolicyIdInput">usagePolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.userApiScopesInput">userApiScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.budgetPolicyId">budgetPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.computeMaxInstances">computeMaxInstances</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.computeMinInstances">computeMinInstances</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.computeSize">computeSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.noCompute">noCompute</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.space">space</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.usagePolicyId">usagePolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.App.property.userApiScopes">userApiScopes</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.app.App.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.app.App.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.app.App.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.app.App.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.app.App.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.app.App.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.app.App.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.app.App.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.app.App.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.app.App.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.app.App.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.app.App.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.app.App.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.app.App.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `activeDeployment`<sup>Required</sup> <a name="activeDeployment" id="@cdktn/provider-databricks.app.App.property.activeDeployment"></a>

```typescript
public readonly activeDeployment: AppActiveDeploymentOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference">AppActiveDeploymentOutputReference</a>

---

##### `appStatus`<sup>Required</sup> <a name="appStatus" id="@cdktn/provider-databricks.app.App.property.appStatus"></a>

```typescript
public readonly appStatus: AppAppStatusOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppAppStatusOutputReference">AppAppStatusOutputReference</a>

---

##### `computeStatus`<sup>Required</sup> <a name="computeStatus" id="@cdktn/provider-databricks.app.App.property.computeStatus"></a>

```typescript
public readonly computeStatus: AppComputeStatusOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppComputeStatusOutputReference">AppComputeStatusOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.app.App.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `creator`<sup>Required</sup> <a name="creator" id="@cdktn/provider-databricks.app.App.property.creator"></a>

```typescript
public readonly creator: string;
```

- *Type:* string

---

##### `defaultSourceCodePath`<sup>Required</sup> <a name="defaultSourceCodePath" id="@cdktn/provider-databricks.app.App.property.defaultSourceCodePath"></a>

```typescript
public readonly defaultSourceCodePath: string;
```

- *Type:* string

---

##### `effectiveBudgetPolicyId`<sup>Required</sup> <a name="effectiveBudgetPolicyId" id="@cdktn/provider-databricks.app.App.property.effectiveBudgetPolicyId"></a>

```typescript
public readonly effectiveBudgetPolicyId: string;
```

- *Type:* string

---

##### `effectiveUsagePolicyId`<sup>Required</sup> <a name="effectiveUsagePolicyId" id="@cdktn/provider-databricks.app.App.property.effectiveUsagePolicyId"></a>

```typescript
public readonly effectiveUsagePolicyId: string;
```

- *Type:* string

---

##### `effectiveUserApiScopes`<sup>Required</sup> <a name="effectiveUserApiScopes" id="@cdktn/provider-databricks.app.App.property.effectiveUserApiScopes"></a>

```typescript
public readonly effectiveUserApiScopes: string[];
```

- *Type:* string[]

---

##### `gitRepository`<sup>Required</sup> <a name="gitRepository" id="@cdktn/provider-databricks.app.App.property.gitRepository"></a>

```typescript
public readonly gitRepository: AppGitRepositoryOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppGitRepositoryOutputReference">AppGitRepositoryOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.app.App.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `oauth2AppClientId`<sup>Required</sup> <a name="oauth2AppClientId" id="@cdktn/provider-databricks.app.App.property.oauth2AppClientId"></a>

```typescript
public readonly oauth2AppClientId: string;
```

- *Type:* string

---

##### `oauth2AppIntegrationId`<sup>Required</sup> <a name="oauth2AppIntegrationId" id="@cdktn/provider-databricks.app.App.property.oauth2AppIntegrationId"></a>

```typescript
public readonly oauth2AppIntegrationId: string;
```

- *Type:* string

---

##### `pendingDeployment`<sup>Required</sup> <a name="pendingDeployment" id="@cdktn/provider-databricks.app.App.property.pendingDeployment"></a>

```typescript
public readonly pendingDeployment: AppPendingDeploymentOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference">AppPendingDeploymentOutputReference</a>

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.app.App.property.providerConfig"></a>

```typescript
public readonly providerConfig: AppProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppProviderConfigOutputReference">AppProviderConfigOutputReference</a>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-databricks.app.App.property.resources"></a>

```typescript
public readonly resources: AppResourcesList;
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppResourcesList">AppResourcesList</a>

---

##### `servicePrincipalClientId`<sup>Required</sup> <a name="servicePrincipalClientId" id="@cdktn/provider-databricks.app.App.property.servicePrincipalClientId"></a>

```typescript
public readonly servicePrincipalClientId: string;
```

- *Type:* string

---

##### `servicePrincipalId`<sup>Required</sup> <a name="servicePrincipalId" id="@cdktn/provider-databricks.app.App.property.servicePrincipalId"></a>

```typescript
public readonly servicePrincipalId: number;
```

- *Type:* number

---

##### `servicePrincipalName`<sup>Required</sup> <a name="servicePrincipalName" id="@cdktn/provider-databricks.app.App.property.servicePrincipalName"></a>

```typescript
public readonly servicePrincipalName: string;
```

- *Type:* string

---

##### `telemetryExportDestinations`<sup>Required</sup> <a name="telemetryExportDestinations" id="@cdktn/provider-databricks.app.App.property.telemetryExportDestinations"></a>

```typescript
public readonly telemetryExportDestinations: AppTelemetryExportDestinationsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsList">AppTelemetryExportDestinationsList</a>

---

##### `thumbnailUrl`<sup>Required</sup> <a name="thumbnailUrl" id="@cdktn/provider-databricks.app.App.property.thumbnailUrl"></a>

```typescript
public readonly thumbnailUrl: string;
```

- *Type:* string

---

##### `updater`<sup>Required</sup> <a name="updater" id="@cdktn/provider-databricks.app.App.property.updater"></a>

```typescript
public readonly updater: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-databricks.app.App.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-databricks.app.App.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `budgetPolicyIdInput`<sup>Optional</sup> <a name="budgetPolicyIdInput" id="@cdktn/provider-databricks.app.App.property.budgetPolicyIdInput"></a>

```typescript
public readonly budgetPolicyIdInput: string;
```

- *Type:* string

---

##### `computeMaxInstancesInput`<sup>Optional</sup> <a name="computeMaxInstancesInput" id="@cdktn/provider-databricks.app.App.property.computeMaxInstancesInput"></a>

```typescript
public readonly computeMaxInstancesInput: number;
```

- *Type:* number

---

##### `computeMinInstancesInput`<sup>Optional</sup> <a name="computeMinInstancesInput" id="@cdktn/provider-databricks.app.App.property.computeMinInstancesInput"></a>

```typescript
public readonly computeMinInstancesInput: number;
```

- *Type:* number

---

##### `computeSizeInput`<sup>Optional</sup> <a name="computeSizeInput" id="@cdktn/provider-databricks.app.App.property.computeSizeInput"></a>

```typescript
public readonly computeSizeInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-databricks.app.App.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `gitRepositoryInput`<sup>Optional</sup> <a name="gitRepositoryInput" id="@cdktn/provider-databricks.app.App.property.gitRepositoryInput"></a>

```typescript
public readonly gitRepositoryInput: IResolvable | AppGitRepository;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.app.AppGitRepository">AppGitRepository</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.app.App.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `noComputeInput`<sup>Optional</sup> <a name="noComputeInput" id="@cdktn/provider-databricks.app.App.property.noComputeInput"></a>

```typescript
public readonly noComputeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.app.App.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | AppProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.app.AppProviderConfig">AppProviderConfig</a>

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktn/provider-databricks.app.App.property.resourcesInput"></a>

```typescript
public readonly resourcesInput: IResolvable | AppResources[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.app.AppResources">AppResources</a>[]

---

##### `spaceInput`<sup>Optional</sup> <a name="spaceInput" id="@cdktn/provider-databricks.app.App.property.spaceInput"></a>

```typescript
public readonly spaceInput: string;
```

- *Type:* string

---

##### `telemetryExportDestinationsInput`<sup>Optional</sup> <a name="telemetryExportDestinationsInput" id="@cdktn/provider-databricks.app.App.property.telemetryExportDestinationsInput"></a>

```typescript
public readonly telemetryExportDestinationsInput: IResolvable | AppTelemetryExportDestinations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinations">AppTelemetryExportDestinations</a>[]

---

##### `usagePolicyIdInput`<sup>Optional</sup> <a name="usagePolicyIdInput" id="@cdktn/provider-databricks.app.App.property.usagePolicyIdInput"></a>

```typescript
public readonly usagePolicyIdInput: string;
```

- *Type:* string

---

##### `userApiScopesInput`<sup>Optional</sup> <a name="userApiScopesInput" id="@cdktn/provider-databricks.app.App.property.userApiScopesInput"></a>

```typescript
public readonly userApiScopesInput: string[];
```

- *Type:* string[]

---

##### `budgetPolicyId`<sup>Required</sup> <a name="budgetPolicyId" id="@cdktn/provider-databricks.app.App.property.budgetPolicyId"></a>

```typescript
public readonly budgetPolicyId: string;
```

- *Type:* string

---

##### `computeMaxInstances`<sup>Required</sup> <a name="computeMaxInstances" id="@cdktn/provider-databricks.app.App.property.computeMaxInstances"></a>

```typescript
public readonly computeMaxInstances: number;
```

- *Type:* number

---

##### `computeMinInstances`<sup>Required</sup> <a name="computeMinInstances" id="@cdktn/provider-databricks.app.App.property.computeMinInstances"></a>

```typescript
public readonly computeMinInstances: number;
```

- *Type:* number

---

##### `computeSize`<sup>Required</sup> <a name="computeSize" id="@cdktn/provider-databricks.app.App.property.computeSize"></a>

```typescript
public readonly computeSize: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.app.App.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.app.App.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `noCompute`<sup>Required</sup> <a name="noCompute" id="@cdktn/provider-databricks.app.App.property.noCompute"></a>

```typescript
public readonly noCompute: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `space`<sup>Required</sup> <a name="space" id="@cdktn/provider-databricks.app.App.property.space"></a>

```typescript
public readonly space: string;
```

- *Type:* string

---

##### `usagePolicyId`<sup>Required</sup> <a name="usagePolicyId" id="@cdktn/provider-databricks.app.App.property.usagePolicyId"></a>

```typescript
public readonly usagePolicyId: string;
```

- *Type:* string

---

##### `userApiScopes`<sup>Required</sup> <a name="userApiScopes" id="@cdktn/provider-databricks.app.App.property.userApiScopes"></a>

```typescript
public readonly userApiScopes: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.App.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.app.App.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppActiveDeployment <a name="AppActiveDeployment" id="@cdktn/provider-databricks.app.AppActiveDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.app.AppActiveDeployment.Initializer"></a>

```typescript
import { app } from '@cdktn/provider-databricks'

const appActiveDeployment: app.AppActiveDeployment = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeployment.property.command">command</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#command App#command}. |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeployment.property.deploymentId">deploymentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#deployment_id App#deployment_id}. |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeployment.property.envVars">envVars</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVars">AppActiveDeploymentEnvVars</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#env_vars App#env_vars}. |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeployment.property.gitSource">gitSource</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSource">AppActiveDeploymentGitSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#git_source App#git_source}. |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeployment.property.mode">mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#mode App#mode}. |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeployment.property.sourceCodePath">sourceCodePath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#source_code_path App#source_code_path}. |

---

##### `command`<sup>Optional</sup> <a name="command" id="@cdktn/provider-databricks.app.AppActiveDeployment.property.command"></a>

```typescript
public readonly command: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#command App#command}.

---

##### `deploymentId`<sup>Optional</sup> <a name="deploymentId" id="@cdktn/provider-databricks.app.AppActiveDeployment.property.deploymentId"></a>

```typescript
public readonly deploymentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#deployment_id App#deployment_id}.

---

##### `envVars`<sup>Optional</sup> <a name="envVars" id="@cdktn/provider-databricks.app.AppActiveDeployment.property.envVars"></a>

```typescript
public readonly envVars: IResolvable | AppActiveDeploymentEnvVars[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVars">AppActiveDeploymentEnvVars</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#env_vars App#env_vars}.

---

##### `gitSource`<sup>Optional</sup> <a name="gitSource" id="@cdktn/provider-databricks.app.AppActiveDeployment.property.gitSource"></a>

```typescript
public readonly gitSource: AppActiveDeploymentGitSource;
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSource">AppActiveDeploymentGitSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#git_source App#git_source}.

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-databricks.app.AppActiveDeployment.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#mode App#mode}.

---

##### `sourceCodePath`<sup>Optional</sup> <a name="sourceCodePath" id="@cdktn/provider-databricks.app.AppActiveDeployment.property.sourceCodePath"></a>

```typescript
public readonly sourceCodePath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#source_code_path App#source_code_path}.

---

### AppActiveDeploymentDeploymentArtifacts <a name="AppActiveDeploymentDeploymentArtifacts" id="@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifacts.Initializer"></a>

```typescript
import { app } from '@cdktn/provider-databricks'

const appActiveDeploymentDeploymentArtifacts: app.AppActiveDeploymentDeploymentArtifacts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifacts.property.sourceCodePath">sourceCodePath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#source_code_path App#source_code_path}. |

---

##### `sourceCodePath`<sup>Optional</sup> <a name="sourceCodePath" id="@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifacts.property.sourceCodePath"></a>

```typescript
public readonly sourceCodePath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#source_code_path App#source_code_path}.

---

### AppActiveDeploymentEnvVars <a name="AppActiveDeploymentEnvVars" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVars"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVars.Initializer"></a>

```typescript
import { app } from '@cdktn/provider-databricks'

const appActiveDeploymentEnvVars: app.AppActiveDeploymentEnvVars = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVars.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#name App#name}. |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVars.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#value App#value}. |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVars.property.valueFrom">valueFrom</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#value_from App#value_from}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVars.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#name App#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVars.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#value App#value}.

---

##### `valueFrom`<sup>Optional</sup> <a name="valueFrom" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVars.property.valueFrom"></a>

```typescript
public readonly valueFrom: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#value_from App#value_from}.

---

### AppActiveDeploymentGitSource <a name="AppActiveDeploymentGitSource" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSource.Initializer"></a>

```typescript
import { app } from '@cdktn/provider-databricks'

const appActiveDeploymentGitSource: app.AppActiveDeploymentGitSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSource.property.branch">branch</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#branch App#branch}. |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSource.property.commit">commit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#commit App#commit}. |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSource.property.sourceCodePath">sourceCodePath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#source_code_path App#source_code_path}. |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSource.property.tag">tag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#tag App#tag}. |

---

##### `branch`<sup>Optional</sup> <a name="branch" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSource.property.branch"></a>

```typescript
public readonly branch: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#branch App#branch}.

---

##### `commit`<sup>Optional</sup> <a name="commit" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSource.property.commit"></a>

```typescript
public readonly commit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#commit App#commit}.

---

##### `sourceCodePath`<sup>Optional</sup> <a name="sourceCodePath" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSource.property.sourceCodePath"></a>

```typescript
public readonly sourceCodePath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#source_code_path App#source_code_path}.

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSource.property.tag"></a>

```typescript
public readonly tag: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#tag App#tag}.

---

### AppActiveDeploymentGitSourceGitRepository <a name="AppActiveDeploymentGitSourceGitRepository" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepository"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepository.Initializer"></a>

```typescript
import { app } from '@cdktn/provider-databricks'

const appActiveDeploymentGitSourceGitRepository: app.AppActiveDeploymentGitSourceGitRepository = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepository.property.provider">provider</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#provider App#provider}. |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepository.property.url">url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#url App#url}. |

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepository.property.provider"></a>

```typescript
public readonly provider: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#provider App#provider}.

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepository.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#url App#url}.

---

### AppActiveDeploymentStatus <a name="AppActiveDeploymentStatus" id="@cdktn/provider-databricks.app.AppActiveDeploymentStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.app.AppActiveDeploymentStatus.Initializer"></a>

```typescript
import { app } from '@cdktn/provider-databricks'

const appActiveDeploymentStatus: app.AppActiveDeploymentStatus = { ... }
```


### AppAppStatus <a name="AppAppStatus" id="@cdktn/provider-databricks.app.AppAppStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.app.AppAppStatus.Initializer"></a>

```typescript
import { app } from '@cdktn/provider-databricks'

const appAppStatus: app.AppAppStatus = { ... }
```


### AppComputeStatus <a name="AppComputeStatus" id="@cdktn/provider-databricks.app.AppComputeStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.app.AppComputeStatus.Initializer"></a>

```typescript
import { app } from '@cdktn/provider-databricks'

const appComputeStatus: app.AppComputeStatus = { ... }
```


### AppConfig <a name="AppConfig" id="@cdktn/provider-databricks.app.AppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.app.AppConfig.Initializer"></a>

```typescript
import { app } from '@cdktn/provider-databricks'

const appConfig: app.AppConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#name App#name}. |
| <code><a href="#@cdktn/provider-databricks.app.AppConfig.property.budgetPolicyId">budgetPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#budget_policy_id App#budget_policy_id}. |
| <code><a href="#@cdktn/provider-databricks.app.AppConfig.property.computeMaxInstances">computeMaxInstances</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#compute_max_instances App#compute_max_instances}. |
| <code><a href="#@cdktn/provider-databricks.app.AppConfig.property.computeMinInstances">computeMinInstances</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#compute_min_instances App#compute_min_instances}. |
| <code><a href="#@cdktn/provider-databricks.app.AppConfig.property.computeSize">computeSize</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#compute_size App#compute_size}. |
| <code><a href="#@cdktn/provider-databricks.app.AppConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#description App#description}. |
| <code><a href="#@cdktn/provider-databricks.app.AppConfig.property.gitRepository">gitRepository</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppGitRepository">AppGitRepository</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#git_repository App#git_repository}. |
| <code><a href="#@cdktn/provider-databricks.app.AppConfig.property.noCompute">noCompute</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#no_compute App#no_compute}. |
| <code><a href="#@cdktn/provider-databricks.app.AppConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppProviderConfig">AppProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#provider_config App#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.app.AppConfig.property.resources">resources</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.app.AppResources">AppResources</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#resources App#resources}. |
| <code><a href="#@cdktn/provider-databricks.app.AppConfig.property.space">space</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#space App#space}. |
| <code><a href="#@cdktn/provider-databricks.app.AppConfig.property.telemetryExportDestinations">telemetryExportDestinations</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinations">AppTelemetryExportDestinations</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#telemetry_export_destinations App#telemetry_export_destinations}. |
| <code><a href="#@cdktn/provider-databricks.app.AppConfig.property.usagePolicyId">usagePolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#usage_policy_id App#usage_policy_id}. |
| <code><a href="#@cdktn/provider-databricks.app.AppConfig.property.userApiScopes">userApiScopes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#user_api_scopes App#user_api_scopes}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.app.AppConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.app.AppConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.app.AppConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.app.AppConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.app.AppConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.app.AppConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.app.AppConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.app.AppConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#name App#name}.

---

##### `budgetPolicyId`<sup>Optional</sup> <a name="budgetPolicyId" id="@cdktn/provider-databricks.app.AppConfig.property.budgetPolicyId"></a>

```typescript
public readonly budgetPolicyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#budget_policy_id App#budget_policy_id}.

---

##### `computeMaxInstances`<sup>Optional</sup> <a name="computeMaxInstances" id="@cdktn/provider-databricks.app.AppConfig.property.computeMaxInstances"></a>

```typescript
public readonly computeMaxInstances: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#compute_max_instances App#compute_max_instances}.

---

##### `computeMinInstances`<sup>Optional</sup> <a name="computeMinInstances" id="@cdktn/provider-databricks.app.AppConfig.property.computeMinInstances"></a>

```typescript
public readonly computeMinInstances: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#compute_min_instances App#compute_min_instances}.

---

##### `computeSize`<sup>Optional</sup> <a name="computeSize" id="@cdktn/provider-databricks.app.AppConfig.property.computeSize"></a>

```typescript
public readonly computeSize: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#compute_size App#compute_size}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-databricks.app.AppConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#description App#description}.

---

##### `gitRepository`<sup>Optional</sup> <a name="gitRepository" id="@cdktn/provider-databricks.app.AppConfig.property.gitRepository"></a>

```typescript
public readonly gitRepository: AppGitRepository;
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppGitRepository">AppGitRepository</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#git_repository App#git_repository}.

---

##### `noCompute`<sup>Optional</sup> <a name="noCompute" id="@cdktn/provider-databricks.app.AppConfig.property.noCompute"></a>

```typescript
public readonly noCompute: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#no_compute App#no_compute}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.app.AppConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: AppProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppProviderConfig">AppProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#provider_config App#provider_config}.

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktn/provider-databricks.app.AppConfig.property.resources"></a>

```typescript
public readonly resources: IResolvable | AppResources[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.app.AppResources">AppResources</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#resources App#resources}.

---

##### `space`<sup>Optional</sup> <a name="space" id="@cdktn/provider-databricks.app.AppConfig.property.space"></a>

```typescript
public readonly space: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#space App#space}.

---

##### `telemetryExportDestinations`<sup>Optional</sup> <a name="telemetryExportDestinations" id="@cdktn/provider-databricks.app.AppConfig.property.telemetryExportDestinations"></a>

```typescript
public readonly telemetryExportDestinations: IResolvable | AppTelemetryExportDestinations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinations">AppTelemetryExportDestinations</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#telemetry_export_destinations App#telemetry_export_destinations}.

---

##### `usagePolicyId`<sup>Optional</sup> <a name="usagePolicyId" id="@cdktn/provider-databricks.app.AppConfig.property.usagePolicyId"></a>

```typescript
public readonly usagePolicyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#usage_policy_id App#usage_policy_id}.

---

##### `userApiScopes`<sup>Optional</sup> <a name="userApiScopes" id="@cdktn/provider-databricks.app.AppConfig.property.userApiScopes"></a>

```typescript
public readonly userApiScopes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#user_api_scopes App#user_api_scopes}.

---

### AppGitRepository <a name="AppGitRepository" id="@cdktn/provider-databricks.app.AppGitRepository"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.app.AppGitRepository.Initializer"></a>

```typescript
import { app } from '@cdktn/provider-databricks'

const appGitRepository: app.AppGitRepository = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppGitRepository.property.provider">provider</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#provider App#provider}. |
| <code><a href="#@cdktn/provider-databricks.app.AppGitRepository.property.url">url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#url App#url}. |

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktn/provider-databricks.app.AppGitRepository.property.provider"></a>

```typescript
public readonly provider: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#provider App#provider}.

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-databricks.app.AppGitRepository.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#url App#url}.

---

### AppPendingDeployment <a name="AppPendingDeployment" id="@cdktn/provider-databricks.app.AppPendingDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.app.AppPendingDeployment.Initializer"></a>

```typescript
import { app } from '@cdktn/provider-databricks'

const appPendingDeployment: app.AppPendingDeployment = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeployment.property.command">command</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#command App#command}. |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeployment.property.deploymentId">deploymentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#deployment_id App#deployment_id}. |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeployment.property.envVars">envVars</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVars">AppPendingDeploymentEnvVars</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#env_vars App#env_vars}. |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeployment.property.gitSource">gitSource</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSource">AppPendingDeploymentGitSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#git_source App#git_source}. |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeployment.property.mode">mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#mode App#mode}. |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeployment.property.sourceCodePath">sourceCodePath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#source_code_path App#source_code_path}. |

---

##### `command`<sup>Optional</sup> <a name="command" id="@cdktn/provider-databricks.app.AppPendingDeployment.property.command"></a>

```typescript
public readonly command: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#command App#command}.

---

##### `deploymentId`<sup>Optional</sup> <a name="deploymentId" id="@cdktn/provider-databricks.app.AppPendingDeployment.property.deploymentId"></a>

```typescript
public readonly deploymentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#deployment_id App#deployment_id}.

---

##### `envVars`<sup>Optional</sup> <a name="envVars" id="@cdktn/provider-databricks.app.AppPendingDeployment.property.envVars"></a>

```typescript
public readonly envVars: IResolvable | AppPendingDeploymentEnvVars[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVars">AppPendingDeploymentEnvVars</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#env_vars App#env_vars}.

---

##### `gitSource`<sup>Optional</sup> <a name="gitSource" id="@cdktn/provider-databricks.app.AppPendingDeployment.property.gitSource"></a>

```typescript
public readonly gitSource: AppPendingDeploymentGitSource;
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSource">AppPendingDeploymentGitSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#git_source App#git_source}.

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-databricks.app.AppPendingDeployment.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#mode App#mode}.

---

##### `sourceCodePath`<sup>Optional</sup> <a name="sourceCodePath" id="@cdktn/provider-databricks.app.AppPendingDeployment.property.sourceCodePath"></a>

```typescript
public readonly sourceCodePath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#source_code_path App#source_code_path}.

---

### AppPendingDeploymentDeploymentArtifacts <a name="AppPendingDeploymentDeploymentArtifacts" id="@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifacts.Initializer"></a>

```typescript
import { app } from '@cdktn/provider-databricks'

const appPendingDeploymentDeploymentArtifacts: app.AppPendingDeploymentDeploymentArtifacts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifacts.property.sourceCodePath">sourceCodePath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#source_code_path App#source_code_path}. |

---

##### `sourceCodePath`<sup>Optional</sup> <a name="sourceCodePath" id="@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifacts.property.sourceCodePath"></a>

```typescript
public readonly sourceCodePath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#source_code_path App#source_code_path}.

---

### AppPendingDeploymentEnvVars <a name="AppPendingDeploymentEnvVars" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVars"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVars.Initializer"></a>

```typescript
import { app } from '@cdktn/provider-databricks'

const appPendingDeploymentEnvVars: app.AppPendingDeploymentEnvVars = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVars.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#name App#name}. |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVars.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#value App#value}. |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVars.property.valueFrom">valueFrom</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#value_from App#value_from}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVars.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#name App#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVars.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#value App#value}.

---

##### `valueFrom`<sup>Optional</sup> <a name="valueFrom" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVars.property.valueFrom"></a>

```typescript
public readonly valueFrom: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#value_from App#value_from}.

---

### AppPendingDeploymentGitSource <a name="AppPendingDeploymentGitSource" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSource.Initializer"></a>

```typescript
import { app } from '@cdktn/provider-databricks'

const appPendingDeploymentGitSource: app.AppPendingDeploymentGitSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSource.property.branch">branch</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#branch App#branch}. |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSource.property.commit">commit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#commit App#commit}. |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSource.property.sourceCodePath">sourceCodePath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#source_code_path App#source_code_path}. |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSource.property.tag">tag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#tag App#tag}. |

---

##### `branch`<sup>Optional</sup> <a name="branch" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSource.property.branch"></a>

```typescript
public readonly branch: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#branch App#branch}.

---

##### `commit`<sup>Optional</sup> <a name="commit" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSource.property.commit"></a>

```typescript
public readonly commit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#commit App#commit}.

---

##### `sourceCodePath`<sup>Optional</sup> <a name="sourceCodePath" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSource.property.sourceCodePath"></a>

```typescript
public readonly sourceCodePath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#source_code_path App#source_code_path}.

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSource.property.tag"></a>

```typescript
public readonly tag: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#tag App#tag}.

---

### AppPendingDeploymentGitSourceGitRepository <a name="AppPendingDeploymentGitSourceGitRepository" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepository"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepository.Initializer"></a>

```typescript
import { app } from '@cdktn/provider-databricks'

const appPendingDeploymentGitSourceGitRepository: app.AppPendingDeploymentGitSourceGitRepository = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepository.property.provider">provider</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#provider App#provider}. |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepository.property.url">url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#url App#url}. |

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepository.property.provider"></a>

```typescript
public readonly provider: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#provider App#provider}.

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepository.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#url App#url}.

---

### AppPendingDeploymentStatus <a name="AppPendingDeploymentStatus" id="@cdktn/provider-databricks.app.AppPendingDeploymentStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.app.AppPendingDeploymentStatus.Initializer"></a>

```typescript
import { app } from '@cdktn/provider-databricks'

const appPendingDeploymentStatus: app.AppPendingDeploymentStatus = { ... }
```


### AppProviderConfig <a name="AppProviderConfig" id="@cdktn/provider-databricks.app.AppProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.app.AppProviderConfig.Initializer"></a>

```typescript
import { app } from '@cdktn/provider-databricks'

const appProviderConfig: app.AppProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#workspace_id App#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.app.AppProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#workspace_id App#workspace_id}.

---

### AppResources <a name="AppResources" id="@cdktn/provider-databricks.app.AppResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.app.AppResources.Initializer"></a>

```typescript
import { app } from '@cdktn/provider-databricks'

const appResources: app.AppResources = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResources.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#name App#name}. |
| <code><a href="#@cdktn/provider-databricks.app.AppResources.property.app">app</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppResourcesApp">AppResourcesApp</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#app App#app}. |
| <code><a href="#@cdktn/provider-databricks.app.AppResources.property.database">database</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppResourcesDatabase">AppResourcesDatabase</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#database App#database}. |
| <code><a href="#@cdktn/provider-databricks.app.AppResources.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#description App#description}. |
| <code><a href="#@cdktn/provider-databricks.app.AppResources.property.experiment">experiment</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppResourcesExperiment">AppResourcesExperiment</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#experiment App#experiment}. |
| <code><a href="#@cdktn/provider-databricks.app.AppResources.property.genieSpace">genieSpace</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppResourcesGenieSpace">AppResourcesGenieSpace</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#genie_space App#genie_space}. |
| <code><a href="#@cdktn/provider-databricks.app.AppResources.property.job">job</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppResourcesJob">AppResourcesJob</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#job App#job}. |
| <code><a href="#@cdktn/provider-databricks.app.AppResources.property.postgres">postgres</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppResourcesPostgres">AppResourcesPostgres</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#postgres App#postgres}. |
| <code><a href="#@cdktn/provider-databricks.app.AppResources.property.secret">secret</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppResourcesSecret">AppResourcesSecret</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#secret App#secret}. |
| <code><a href="#@cdktn/provider-databricks.app.AppResources.property.servingEndpoint">servingEndpoint</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppResourcesServingEndpoint">AppResourcesServingEndpoint</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#serving_endpoint App#serving_endpoint}. |
| <code><a href="#@cdktn/provider-databricks.app.AppResources.property.sqlWarehouse">sqlWarehouse</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppResourcesSqlWarehouse">AppResourcesSqlWarehouse</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#sql_warehouse App#sql_warehouse}. |
| <code><a href="#@cdktn/provider-databricks.app.AppResources.property.ucSecurable">ucSecurable</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppResourcesUcSecurable">AppResourcesUcSecurable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#uc_securable App#uc_securable}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.app.AppResources.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#name App#name}.

---

##### `app`<sup>Optional</sup> <a name="app" id="@cdktn/provider-databricks.app.AppResources.property.app"></a>

```typescript
public readonly app: AppResourcesApp;
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppResourcesApp">AppResourcesApp</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#app App#app}.

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktn/provider-databricks.app.AppResources.property.database"></a>

```typescript
public readonly database: AppResourcesDatabase;
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppResourcesDatabase">AppResourcesDatabase</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#database App#database}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-databricks.app.AppResources.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#description App#description}.

---

##### `experiment`<sup>Optional</sup> <a name="experiment" id="@cdktn/provider-databricks.app.AppResources.property.experiment"></a>

```typescript
public readonly experiment: AppResourcesExperiment;
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppResourcesExperiment">AppResourcesExperiment</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#experiment App#experiment}.

---

##### `genieSpace`<sup>Optional</sup> <a name="genieSpace" id="@cdktn/provider-databricks.app.AppResources.property.genieSpace"></a>

```typescript
public readonly genieSpace: AppResourcesGenieSpace;
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppResourcesGenieSpace">AppResourcesGenieSpace</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#genie_space App#genie_space}.

---

##### `job`<sup>Optional</sup> <a name="job" id="@cdktn/provider-databricks.app.AppResources.property.job"></a>

```typescript
public readonly job: AppResourcesJob;
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppResourcesJob">AppResourcesJob</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#job App#job}.

---

##### `postgres`<sup>Optional</sup> <a name="postgres" id="@cdktn/provider-databricks.app.AppResources.property.postgres"></a>

```typescript
public readonly postgres: AppResourcesPostgres;
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppResourcesPostgres">AppResourcesPostgres</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#postgres App#postgres}.

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktn/provider-databricks.app.AppResources.property.secret"></a>

```typescript
public readonly secret: AppResourcesSecret;
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppResourcesSecret">AppResourcesSecret</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#secret App#secret}.

---

##### `servingEndpoint`<sup>Optional</sup> <a name="servingEndpoint" id="@cdktn/provider-databricks.app.AppResources.property.servingEndpoint"></a>

```typescript
public readonly servingEndpoint: AppResourcesServingEndpoint;
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppResourcesServingEndpoint">AppResourcesServingEndpoint</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#serving_endpoint App#serving_endpoint}.

---

##### `sqlWarehouse`<sup>Optional</sup> <a name="sqlWarehouse" id="@cdktn/provider-databricks.app.AppResources.property.sqlWarehouse"></a>

```typescript
public readonly sqlWarehouse: AppResourcesSqlWarehouse;
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppResourcesSqlWarehouse">AppResourcesSqlWarehouse</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#sql_warehouse App#sql_warehouse}.

---

##### `ucSecurable`<sup>Optional</sup> <a name="ucSecurable" id="@cdktn/provider-databricks.app.AppResources.property.ucSecurable"></a>

```typescript
public readonly ucSecurable: AppResourcesUcSecurable;
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppResourcesUcSecurable">AppResourcesUcSecurable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#uc_securable App#uc_securable}.

---

### AppResourcesApp <a name="AppResourcesApp" id="@cdktn/provider-databricks.app.AppResourcesApp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.app.AppResourcesApp.Initializer"></a>

```typescript
import { app } from '@cdktn/provider-databricks'

const appResourcesApp: app.AppResourcesApp = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesApp.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#name App#name}. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesApp.property.permission">permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#permission App#permission}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-databricks.app.AppResourcesApp.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#name App#name}.

---

##### `permission`<sup>Optional</sup> <a name="permission" id="@cdktn/provider-databricks.app.AppResourcesApp.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#permission App#permission}.

---

### AppResourcesDatabase <a name="AppResourcesDatabase" id="@cdktn/provider-databricks.app.AppResourcesDatabase"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.app.AppResourcesDatabase.Initializer"></a>

```typescript
import { app } from '@cdktn/provider-databricks'

const appResourcesDatabase: app.AppResourcesDatabase = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesDatabase.property.databaseName">databaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#database_name App#database_name}. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesDatabase.property.instanceName">instanceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#instance_name App#instance_name}. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesDatabase.property.permission">permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#permission App#permission}. |

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-databricks.app.AppResourcesDatabase.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#database_name App#database_name}.

---

##### `instanceName`<sup>Required</sup> <a name="instanceName" id="@cdktn/provider-databricks.app.AppResourcesDatabase.property.instanceName"></a>

```typescript
public readonly instanceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#instance_name App#instance_name}.

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.app.AppResourcesDatabase.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#permission App#permission}.

---

### AppResourcesExperiment <a name="AppResourcesExperiment" id="@cdktn/provider-databricks.app.AppResourcesExperiment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.app.AppResourcesExperiment.Initializer"></a>

```typescript
import { app } from '@cdktn/provider-databricks'

const appResourcesExperiment: app.AppResourcesExperiment = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesExperiment.property.experimentId">experimentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#experiment_id App#experiment_id}. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesExperiment.property.permission">permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#permission App#permission}. |

---

##### `experimentId`<sup>Required</sup> <a name="experimentId" id="@cdktn/provider-databricks.app.AppResourcesExperiment.property.experimentId"></a>

```typescript
public readonly experimentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#experiment_id App#experiment_id}.

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.app.AppResourcesExperiment.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#permission App#permission}.

---

### AppResourcesGenieSpace <a name="AppResourcesGenieSpace" id="@cdktn/provider-databricks.app.AppResourcesGenieSpace"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.app.AppResourcesGenieSpace.Initializer"></a>

```typescript
import { app } from '@cdktn/provider-databricks'

const appResourcesGenieSpace: app.AppResourcesGenieSpace = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesGenieSpace.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#name App#name}. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesGenieSpace.property.permission">permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#permission App#permission}. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesGenieSpace.property.spaceId">spaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#space_id App#space_id}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.app.AppResourcesGenieSpace.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#name App#name}.

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.app.AppResourcesGenieSpace.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#permission App#permission}.

---

##### `spaceId`<sup>Required</sup> <a name="spaceId" id="@cdktn/provider-databricks.app.AppResourcesGenieSpace.property.spaceId"></a>

```typescript
public readonly spaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#space_id App#space_id}.

---

### AppResourcesJob <a name="AppResourcesJob" id="@cdktn/provider-databricks.app.AppResourcesJob"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.app.AppResourcesJob.Initializer"></a>

```typescript
import { app } from '@cdktn/provider-databricks'

const appResourcesJob: app.AppResourcesJob = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesJob.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#id App#id}. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesJob.property.permission">permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#permission App#permission}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.app.AppResourcesJob.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#id App#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.app.AppResourcesJob.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#permission App#permission}.

---

### AppResourcesPostgres <a name="AppResourcesPostgres" id="@cdktn/provider-databricks.app.AppResourcesPostgres"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.app.AppResourcesPostgres.Initializer"></a>

```typescript
import { app } from '@cdktn/provider-databricks'

const appResourcesPostgres: app.AppResourcesPostgres = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesPostgres.property.branch">branch</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#branch App#branch}. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesPostgres.property.database">database</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#database App#database}. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesPostgres.property.permission">permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#permission App#permission}. |

---

##### `branch`<sup>Optional</sup> <a name="branch" id="@cdktn/provider-databricks.app.AppResourcesPostgres.property.branch"></a>

```typescript
public readonly branch: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#branch App#branch}.

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktn/provider-databricks.app.AppResourcesPostgres.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#database App#database}.

---

##### `permission`<sup>Optional</sup> <a name="permission" id="@cdktn/provider-databricks.app.AppResourcesPostgres.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#permission App#permission}.

---

### AppResourcesSecret <a name="AppResourcesSecret" id="@cdktn/provider-databricks.app.AppResourcesSecret"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.app.AppResourcesSecret.Initializer"></a>

```typescript
import { app } from '@cdktn/provider-databricks'

const appResourcesSecret: app.AppResourcesSecret = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSecret.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#key App#key}. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSecret.property.permission">permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#permission App#permission}. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSecret.property.scope">scope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#scope App#scope}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.app.AppResourcesSecret.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#key App#key}.

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.app.AppResourcesSecret.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#permission App#permission}.

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.app.AppResourcesSecret.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#scope App#scope}.

---

### AppResourcesServingEndpoint <a name="AppResourcesServingEndpoint" id="@cdktn/provider-databricks.app.AppResourcesServingEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.app.AppResourcesServingEndpoint.Initializer"></a>

```typescript
import { app } from '@cdktn/provider-databricks'

const appResourcesServingEndpoint: app.AppResourcesServingEndpoint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesServingEndpoint.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#name App#name}. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesServingEndpoint.property.permission">permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#permission App#permission}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.app.AppResourcesServingEndpoint.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#name App#name}.

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.app.AppResourcesServingEndpoint.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#permission App#permission}.

---

### AppResourcesSqlWarehouse <a name="AppResourcesSqlWarehouse" id="@cdktn/provider-databricks.app.AppResourcesSqlWarehouse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.app.AppResourcesSqlWarehouse.Initializer"></a>

```typescript
import { app } from '@cdktn/provider-databricks'

const appResourcesSqlWarehouse: app.AppResourcesSqlWarehouse = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSqlWarehouse.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#id App#id}. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSqlWarehouse.property.permission">permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#permission App#permission}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.app.AppResourcesSqlWarehouse.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#id App#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.app.AppResourcesSqlWarehouse.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#permission App#permission}.

---

### AppResourcesUcSecurable <a name="AppResourcesUcSecurable" id="@cdktn/provider-databricks.app.AppResourcesUcSecurable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.app.AppResourcesUcSecurable.Initializer"></a>

```typescript
import { app } from '@cdktn/provider-databricks'

const appResourcesUcSecurable: app.AppResourcesUcSecurable = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesUcSecurable.property.permission">permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#permission App#permission}. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesUcSecurable.property.securableFullName">securableFullName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#securable_full_name App#securable_full_name}. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesUcSecurable.property.securableType">securableType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#securable_type App#securable_type}. |

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.app.AppResourcesUcSecurable.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#permission App#permission}.

---

##### `securableFullName`<sup>Required</sup> <a name="securableFullName" id="@cdktn/provider-databricks.app.AppResourcesUcSecurable.property.securableFullName"></a>

```typescript
public readonly securableFullName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#securable_full_name App#securable_full_name}.

---

##### `securableType`<sup>Required</sup> <a name="securableType" id="@cdktn/provider-databricks.app.AppResourcesUcSecurable.property.securableType"></a>

```typescript
public readonly securableType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#securable_type App#securable_type}.

---

### AppTelemetryExportDestinations <a name="AppTelemetryExportDestinations" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinations.Initializer"></a>

```typescript
import { app } from '@cdktn/provider-databricks'

const appTelemetryExportDestinations: app.AppTelemetryExportDestinations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinations.property.unityCatalog">unityCatalog</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalog">AppTelemetryExportDestinationsUnityCatalog</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#unity_catalog App#unity_catalog}. |

---

##### `unityCatalog`<sup>Optional</sup> <a name="unityCatalog" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinations.property.unityCatalog"></a>

```typescript
public readonly unityCatalog: AppTelemetryExportDestinationsUnityCatalog;
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalog">AppTelemetryExportDestinationsUnityCatalog</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#unity_catalog App#unity_catalog}.

---

### AppTelemetryExportDestinationsUnityCatalog <a name="AppTelemetryExportDestinationsUnityCatalog" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalog.Initializer"></a>

```typescript
import { app } from '@cdktn/provider-databricks'

const appTelemetryExportDestinationsUnityCatalog: app.AppTelemetryExportDestinationsUnityCatalog = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalog.property.logsTable">logsTable</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#logs_table App#logs_table}. |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalog.property.metricsTable">metricsTable</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#metrics_table App#metrics_table}. |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalog.property.tracesTable">tracesTable</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#traces_table App#traces_table}. |

---

##### `logsTable`<sup>Required</sup> <a name="logsTable" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalog.property.logsTable"></a>

```typescript
public readonly logsTable: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#logs_table App#logs_table}.

---

##### `metricsTable`<sup>Required</sup> <a name="metricsTable" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalog.property.metricsTable"></a>

```typescript
public readonly metricsTable: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#metrics_table App#metrics_table}.

---

##### `tracesTable`<sup>Required</sup> <a name="tracesTable" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalog.property.tracesTable"></a>

```typescript
public readonly tracesTable: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/app#traces_table App#traces_table}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppActiveDeploymentDeploymentArtifactsOutputReference <a name="AppActiveDeploymentDeploymentArtifactsOutputReference" id="@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.Initializer"></a>

```typescript
import { app } from '@cdktn/provider-databricks'

new app.AppActiveDeploymentDeploymentArtifactsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.resetSourceCodePath">resetSourceCodePath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSourceCodePath` <a name="resetSourceCodePath" id="@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.resetSourceCodePath"></a>

```typescript
public resetSourceCodePath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.property.sourceCodePathInput">sourceCodePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.property.sourceCodePath">sourceCodePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifacts">AppActiveDeploymentDeploymentArtifacts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sourceCodePathInput`<sup>Optional</sup> <a name="sourceCodePathInput" id="@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.property.sourceCodePathInput"></a>

```typescript
public readonly sourceCodePathInput: string;
```

- *Type:* string

---

##### `sourceCodePath`<sup>Required</sup> <a name="sourceCodePath" id="@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.property.sourceCodePath"></a>

```typescript
public readonly sourceCodePath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppActiveDeploymentDeploymentArtifacts;
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifacts">AppActiveDeploymentDeploymentArtifacts</a>

---


### AppActiveDeploymentEnvVarsList <a name="AppActiveDeploymentEnvVarsList" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsList.Initializer"></a>

```typescript
import { app } from '@cdktn/provider-databricks'

new app.AppActiveDeploymentEnvVarsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsList.get"></a>

```typescript
public get(index: number): AppActiveDeploymentEnvVarsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVars">AppActiveDeploymentEnvVars</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppActiveDeploymentEnvVars[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVars">AppActiveDeploymentEnvVars</a>[]

---


### AppActiveDeploymentEnvVarsOutputReference <a name="AppActiveDeploymentEnvVarsOutputReference" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.Initializer"></a>

```typescript
import { app } from '@cdktn/provider-databricks'

new app.AppActiveDeploymentEnvVarsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.resetValue">resetValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.resetValueFrom">resetValueFrom</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```

##### `resetValueFrom` <a name="resetValueFrom" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.resetValueFrom"></a>

```typescript
public resetValueFrom(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.property.valueFromInput">valueFromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.property.valueFrom">valueFrom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVars">AppActiveDeploymentEnvVars</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueFromInput`<sup>Optional</sup> <a name="valueFromInput" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.property.valueFromInput"></a>

```typescript
public readonly valueFromInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `valueFrom`<sup>Required</sup> <a name="valueFrom" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.property.valueFrom"></a>

```typescript
public readonly valueFrom: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppActiveDeploymentEnvVars;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVars">AppActiveDeploymentEnvVars</a>

---


### AppActiveDeploymentGitSourceGitRepositoryOutputReference <a name="AppActiveDeploymentGitSourceGitRepositoryOutputReference" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.Initializer"></a>

```typescript
import { app } from '@cdktn/provider-databricks'

new app.AppActiveDeploymentGitSourceGitRepositoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.property.providerInput">providerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.property.provider">provider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepository">AppActiveDeploymentGitSourceGitRepository</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `providerInput`<sup>Optional</sup> <a name="providerInput" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.property.providerInput"></a>

```typescript
public readonly providerInput: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.property.provider"></a>

```typescript
public readonly provider: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppActiveDeploymentGitSourceGitRepository;
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepository">AppActiveDeploymentGitSourceGitRepository</a>

---


### AppActiveDeploymentGitSourceOutputReference <a name="AppActiveDeploymentGitSourceOutputReference" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.Initializer"></a>

```typescript
import { app } from '@cdktn/provider-databricks'

new app.AppActiveDeploymentGitSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.resetBranch">resetBranch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.resetCommit">resetCommit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.resetSourceCodePath">resetSourceCodePath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.resetTag">resetTag</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBranch` <a name="resetBranch" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.resetBranch"></a>

```typescript
public resetBranch(): void
```

##### `resetCommit` <a name="resetCommit" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.resetCommit"></a>

```typescript
public resetCommit(): void
```

##### `resetSourceCodePath` <a name="resetSourceCodePath" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.resetSourceCodePath"></a>

```typescript
public resetSourceCodePath(): void
```

##### `resetTag` <a name="resetTag" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.resetTag"></a>

```typescript
public resetTag(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.property.gitRepository">gitRepository</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference">AppActiveDeploymentGitSourceGitRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.property.resolvedCommit">resolvedCommit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.property.branchInput">branchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.property.commitInput">commitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.property.sourceCodePathInput">sourceCodePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.property.tagInput">tagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.property.branch">branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.property.commit">commit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.property.sourceCodePath">sourceCodePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.property.tag">tag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSource">AppActiveDeploymentGitSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `gitRepository`<sup>Required</sup> <a name="gitRepository" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.property.gitRepository"></a>

```typescript
public readonly gitRepository: AppActiveDeploymentGitSourceGitRepositoryOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceGitRepositoryOutputReference">AppActiveDeploymentGitSourceGitRepositoryOutputReference</a>

---

##### `resolvedCommit`<sup>Required</sup> <a name="resolvedCommit" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.property.resolvedCommit"></a>

```typescript
public readonly resolvedCommit: string;
```

- *Type:* string

---

##### `branchInput`<sup>Optional</sup> <a name="branchInput" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.property.branchInput"></a>

```typescript
public readonly branchInput: string;
```

- *Type:* string

---

##### `commitInput`<sup>Optional</sup> <a name="commitInput" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.property.commitInput"></a>

```typescript
public readonly commitInput: string;
```

- *Type:* string

---

##### `sourceCodePathInput`<sup>Optional</sup> <a name="sourceCodePathInput" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.property.sourceCodePathInput"></a>

```typescript
public readonly sourceCodePathInput: string;
```

- *Type:* string

---

##### `tagInput`<sup>Optional</sup> <a name="tagInput" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.property.tagInput"></a>

```typescript
public readonly tagInput: string;
```

- *Type:* string

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.property.branch"></a>

```typescript
public readonly branch: string;
```

- *Type:* string

---

##### `commit`<sup>Required</sup> <a name="commit" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.property.commit"></a>

```typescript
public readonly commit: string;
```

- *Type:* string

---

##### `sourceCodePath`<sup>Required</sup> <a name="sourceCodePath" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.property.sourceCodePath"></a>

```typescript
public readonly sourceCodePath: string;
```

- *Type:* string

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.property.tag"></a>

```typescript
public readonly tag: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppActiveDeploymentGitSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSource">AppActiveDeploymentGitSource</a>

---


### AppActiveDeploymentOutputReference <a name="AppActiveDeploymentOutputReference" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.Initializer"></a>

```typescript
import { app } from '@cdktn/provider-databricks'

new app.AppActiveDeploymentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.putEnvVars">putEnvVars</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.putGitSource">putGitSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.resetCommand">resetCommand</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.resetDeploymentId">resetDeploymentId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.resetEnvVars">resetEnvVars</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.resetGitSource">resetGitSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.resetSourceCodePath">resetSourceCodePath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEnvVars` <a name="putEnvVars" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.putEnvVars"></a>

```typescript
public putEnvVars(value: IResolvable | AppActiveDeploymentEnvVars[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.putEnvVars.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVars">AppActiveDeploymentEnvVars</a>[]

---

##### `putGitSource` <a name="putGitSource" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.putGitSource"></a>

```typescript
public putGitSource(value: AppActiveDeploymentGitSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.putGitSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSource">AppActiveDeploymentGitSource</a>

---

##### `resetCommand` <a name="resetCommand" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.resetCommand"></a>

```typescript
public resetCommand(): void
```

##### `resetDeploymentId` <a name="resetDeploymentId" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.resetDeploymentId"></a>

```typescript
public resetDeploymentId(): void
```

##### `resetEnvVars` <a name="resetEnvVars" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.resetEnvVars"></a>

```typescript
public resetEnvVars(): void
```

##### `resetGitSource` <a name="resetGitSource" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.resetGitSource"></a>

```typescript
public resetGitSource(): void
```

##### `resetMode` <a name="resetMode" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.resetMode"></a>

```typescript
public resetMode(): void
```

##### `resetSourceCodePath` <a name="resetSourceCodePath" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.resetSourceCodePath"></a>

```typescript
public resetSourceCodePath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.property.creator">creator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.property.deploymentArtifacts">deploymentArtifacts</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference">AppActiveDeploymentDeploymentArtifactsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.property.envVars">envVars</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsList">AppActiveDeploymentEnvVarsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.property.gitSource">gitSource</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference">AppActiveDeploymentGitSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.property.status">status</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference">AppActiveDeploymentStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.property.commandInput">commandInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.property.deploymentIdInput">deploymentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.property.envVarsInput">envVarsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVars">AppActiveDeploymentEnvVars</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.property.gitSourceInput">gitSourceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSource">AppActiveDeploymentGitSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.property.sourceCodePathInput">sourceCodePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.property.command">command</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.property.deploymentId">deploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.property.sourceCodePath">sourceCodePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppActiveDeployment">AppActiveDeployment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `creator`<sup>Required</sup> <a name="creator" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.property.creator"></a>

```typescript
public readonly creator: string;
```

- *Type:* string

---

##### `deploymentArtifacts`<sup>Required</sup> <a name="deploymentArtifacts" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.property.deploymentArtifacts"></a>

```typescript
public readonly deploymentArtifacts: AppActiveDeploymentDeploymentArtifactsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppActiveDeploymentDeploymentArtifactsOutputReference">AppActiveDeploymentDeploymentArtifactsOutputReference</a>

---

##### `envVars`<sup>Required</sup> <a name="envVars" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.property.envVars"></a>

```typescript
public readonly envVars: AppActiveDeploymentEnvVarsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVarsList">AppActiveDeploymentEnvVarsList</a>

---

##### `gitSource`<sup>Required</sup> <a name="gitSource" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.property.gitSource"></a>

```typescript
public readonly gitSource: AppActiveDeploymentGitSourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSourceOutputReference">AppActiveDeploymentGitSourceOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.property.status"></a>

```typescript
public readonly status: AppActiveDeploymentStatusOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference">AppActiveDeploymentStatusOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `commandInput`<sup>Optional</sup> <a name="commandInput" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.property.commandInput"></a>

```typescript
public readonly commandInput: string[];
```

- *Type:* string[]

---

##### `deploymentIdInput`<sup>Optional</sup> <a name="deploymentIdInput" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.property.deploymentIdInput"></a>

```typescript
public readonly deploymentIdInput: string;
```

- *Type:* string

---

##### `envVarsInput`<sup>Optional</sup> <a name="envVarsInput" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.property.envVarsInput"></a>

```typescript
public readonly envVarsInput: IResolvable | AppActiveDeploymentEnvVars[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.app.AppActiveDeploymentEnvVars">AppActiveDeploymentEnvVars</a>[]

---

##### `gitSourceInput`<sup>Optional</sup> <a name="gitSourceInput" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.property.gitSourceInput"></a>

```typescript
public readonly gitSourceInput: IResolvable | AppActiveDeploymentGitSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.app.AppActiveDeploymentGitSource">AppActiveDeploymentGitSource</a>

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `sourceCodePathInput`<sup>Optional</sup> <a name="sourceCodePathInput" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.property.sourceCodePathInput"></a>

```typescript
public readonly sourceCodePathInput: string;
```

- *Type:* string

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.property.command"></a>

```typescript
public readonly command: string[];
```

- *Type:* string[]

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.property.deploymentId"></a>

```typescript
public readonly deploymentId: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `sourceCodePath`<sup>Required</sup> <a name="sourceCodePath" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.property.sourceCodePath"></a>

```typescript
public readonly sourceCodePath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.app.AppActiveDeploymentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppActiveDeployment;
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppActiveDeployment">AppActiveDeployment</a>

---


### AppActiveDeploymentStatusOutputReference <a name="AppActiveDeploymentStatusOutputReference" id="@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.Initializer"></a>

```typescript
import { app } from '@cdktn/provider-databricks'

new app.AppActiveDeploymentStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppActiveDeploymentStatus">AppActiveDeploymentStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.app.AppActiveDeploymentStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppActiveDeploymentStatus;
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppActiveDeploymentStatus">AppActiveDeploymentStatus</a>

---


### AppAppStatusOutputReference <a name="AppAppStatusOutputReference" id="@cdktn/provider-databricks.app.AppAppStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.app.AppAppStatusOutputReference.Initializer"></a>

```typescript
import { app } from '@cdktn/provider-databricks'

new app.AppAppStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppAppStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.app.AppAppStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.app.AppAppStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppAppStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppAppStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppAppStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppAppStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppAppStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppAppStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppAppStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppAppStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppAppStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppAppStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppAppStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppAppStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppAppStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.app.AppAppStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.app.AppAppStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.app.AppAppStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppAppStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.app.AppAppStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppAppStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.app.AppAppStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppAppStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.app.AppAppStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppAppStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.app.AppAppStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppAppStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.app.AppAppStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppAppStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.app.AppAppStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppAppStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.app.AppAppStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppAppStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.app.AppAppStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppAppStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.app.AppAppStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.app.AppAppStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.app.AppAppStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.app.AppAppStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.app.AppAppStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppAppStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.app.AppAppStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppAppStatusOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppAppStatusOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppAppStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppAppStatus">AppAppStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.app.AppAppStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.app.AppAppStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-databricks.app.AppAppStatusOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-databricks.app.AppAppStatusOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.app.AppAppStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppAppStatus;
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppAppStatus">AppAppStatus</a>

---


### AppComputeStatusOutputReference <a name="AppComputeStatusOutputReference" id="@cdktn/provider-databricks.app.AppComputeStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.app.AppComputeStatusOutputReference.Initializer"></a>

```typescript
import { app } from '@cdktn/provider-databricks'

new app.AppComputeStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppComputeStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.app.AppComputeStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.app.AppComputeStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppComputeStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppComputeStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppComputeStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppComputeStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppComputeStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppComputeStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppComputeStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppComputeStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppComputeStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppComputeStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppComputeStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppComputeStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppComputeStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.app.AppComputeStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.app.AppComputeStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.app.AppComputeStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppComputeStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.app.AppComputeStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppComputeStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.app.AppComputeStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppComputeStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.app.AppComputeStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppComputeStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.app.AppComputeStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppComputeStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.app.AppComputeStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppComputeStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.app.AppComputeStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppComputeStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.app.AppComputeStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppComputeStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.app.AppComputeStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppComputeStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.app.AppComputeStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.app.AppComputeStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.app.AppComputeStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.app.AppComputeStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.app.AppComputeStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppComputeStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.app.AppComputeStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppComputeStatusOutputReference.property.activeInstances">activeInstances</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppComputeStatusOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppComputeStatusOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppComputeStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppComputeStatus">AppComputeStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.app.AppComputeStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.app.AppComputeStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `activeInstances`<sup>Required</sup> <a name="activeInstances" id="@cdktn/provider-databricks.app.AppComputeStatusOutputReference.property.activeInstances"></a>

```typescript
public readonly activeInstances: number;
```

- *Type:* number

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-databricks.app.AppComputeStatusOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-databricks.app.AppComputeStatusOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.app.AppComputeStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppComputeStatus;
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppComputeStatus">AppComputeStatus</a>

---


### AppGitRepositoryOutputReference <a name="AppGitRepositoryOutputReference" id="@cdktn/provider-databricks.app.AppGitRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.Initializer"></a>

```typescript
import { app } from '@cdktn/provider-databricks'

new app.AppGitRepositoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.property.providerInput">providerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.property.provider">provider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.app.AppGitRepository">AppGitRepository</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `providerInput`<sup>Optional</sup> <a name="providerInput" id="@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.property.providerInput"></a>

```typescript
public readonly providerInput: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.property.provider"></a>

```typescript
public readonly provider: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.app.AppGitRepositoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppGitRepository;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.app.AppGitRepository">AppGitRepository</a>

---


### AppPendingDeploymentDeploymentArtifactsOutputReference <a name="AppPendingDeploymentDeploymentArtifactsOutputReference" id="@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.Initializer"></a>

```typescript
import { app } from '@cdktn/provider-databricks'

new app.AppPendingDeploymentDeploymentArtifactsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.resetSourceCodePath">resetSourceCodePath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSourceCodePath` <a name="resetSourceCodePath" id="@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.resetSourceCodePath"></a>

```typescript
public resetSourceCodePath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.property.sourceCodePathInput">sourceCodePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.property.sourceCodePath">sourceCodePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifacts">AppPendingDeploymentDeploymentArtifacts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sourceCodePathInput`<sup>Optional</sup> <a name="sourceCodePathInput" id="@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.property.sourceCodePathInput"></a>

```typescript
public readonly sourceCodePathInput: string;
```

- *Type:* string

---

##### `sourceCodePath`<sup>Required</sup> <a name="sourceCodePath" id="@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.property.sourceCodePath"></a>

```typescript
public readonly sourceCodePath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppPendingDeploymentDeploymentArtifacts;
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifacts">AppPendingDeploymentDeploymentArtifacts</a>

---


### AppPendingDeploymentEnvVarsList <a name="AppPendingDeploymentEnvVarsList" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsList.Initializer"></a>

```typescript
import { app } from '@cdktn/provider-databricks'

new app.AppPendingDeploymentEnvVarsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsList.get"></a>

```typescript
public get(index: number): AppPendingDeploymentEnvVarsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVars">AppPendingDeploymentEnvVars</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppPendingDeploymentEnvVars[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVars">AppPendingDeploymentEnvVars</a>[]

---


### AppPendingDeploymentEnvVarsOutputReference <a name="AppPendingDeploymentEnvVarsOutputReference" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.Initializer"></a>

```typescript
import { app } from '@cdktn/provider-databricks'

new app.AppPendingDeploymentEnvVarsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.resetValue">resetValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.resetValueFrom">resetValueFrom</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```

##### `resetValueFrom` <a name="resetValueFrom" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.resetValueFrom"></a>

```typescript
public resetValueFrom(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.property.valueFromInput">valueFromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.property.valueFrom">valueFrom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVars">AppPendingDeploymentEnvVars</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueFromInput`<sup>Optional</sup> <a name="valueFromInput" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.property.valueFromInput"></a>

```typescript
public readonly valueFromInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `valueFrom`<sup>Required</sup> <a name="valueFrom" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.property.valueFrom"></a>

```typescript
public readonly valueFrom: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppPendingDeploymentEnvVars;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVars">AppPendingDeploymentEnvVars</a>

---


### AppPendingDeploymentGitSourceGitRepositoryOutputReference <a name="AppPendingDeploymentGitSourceGitRepositoryOutputReference" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.Initializer"></a>

```typescript
import { app } from '@cdktn/provider-databricks'

new app.AppPendingDeploymentGitSourceGitRepositoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.property.providerInput">providerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.property.provider">provider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepository">AppPendingDeploymentGitSourceGitRepository</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `providerInput`<sup>Optional</sup> <a name="providerInput" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.property.providerInput"></a>

```typescript
public readonly providerInput: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.property.provider"></a>

```typescript
public readonly provider: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppPendingDeploymentGitSourceGitRepository;
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepository">AppPendingDeploymentGitSourceGitRepository</a>

---


### AppPendingDeploymentGitSourceOutputReference <a name="AppPendingDeploymentGitSourceOutputReference" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.Initializer"></a>

```typescript
import { app } from '@cdktn/provider-databricks'

new app.AppPendingDeploymentGitSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.resetBranch">resetBranch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.resetCommit">resetCommit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.resetSourceCodePath">resetSourceCodePath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.resetTag">resetTag</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBranch` <a name="resetBranch" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.resetBranch"></a>

```typescript
public resetBranch(): void
```

##### `resetCommit` <a name="resetCommit" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.resetCommit"></a>

```typescript
public resetCommit(): void
```

##### `resetSourceCodePath` <a name="resetSourceCodePath" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.resetSourceCodePath"></a>

```typescript
public resetSourceCodePath(): void
```

##### `resetTag` <a name="resetTag" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.resetTag"></a>

```typescript
public resetTag(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.property.gitRepository">gitRepository</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference">AppPendingDeploymentGitSourceGitRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.property.resolvedCommit">resolvedCommit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.property.branchInput">branchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.property.commitInput">commitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.property.sourceCodePathInput">sourceCodePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.property.tagInput">tagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.property.branch">branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.property.commit">commit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.property.sourceCodePath">sourceCodePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.property.tag">tag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSource">AppPendingDeploymentGitSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `gitRepository`<sup>Required</sup> <a name="gitRepository" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.property.gitRepository"></a>

```typescript
public readonly gitRepository: AppPendingDeploymentGitSourceGitRepositoryOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceGitRepositoryOutputReference">AppPendingDeploymentGitSourceGitRepositoryOutputReference</a>

---

##### `resolvedCommit`<sup>Required</sup> <a name="resolvedCommit" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.property.resolvedCommit"></a>

```typescript
public readonly resolvedCommit: string;
```

- *Type:* string

---

##### `branchInput`<sup>Optional</sup> <a name="branchInput" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.property.branchInput"></a>

```typescript
public readonly branchInput: string;
```

- *Type:* string

---

##### `commitInput`<sup>Optional</sup> <a name="commitInput" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.property.commitInput"></a>

```typescript
public readonly commitInput: string;
```

- *Type:* string

---

##### `sourceCodePathInput`<sup>Optional</sup> <a name="sourceCodePathInput" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.property.sourceCodePathInput"></a>

```typescript
public readonly sourceCodePathInput: string;
```

- *Type:* string

---

##### `tagInput`<sup>Optional</sup> <a name="tagInput" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.property.tagInput"></a>

```typescript
public readonly tagInput: string;
```

- *Type:* string

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.property.branch"></a>

```typescript
public readonly branch: string;
```

- *Type:* string

---

##### `commit`<sup>Required</sup> <a name="commit" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.property.commit"></a>

```typescript
public readonly commit: string;
```

- *Type:* string

---

##### `sourceCodePath`<sup>Required</sup> <a name="sourceCodePath" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.property.sourceCodePath"></a>

```typescript
public readonly sourceCodePath: string;
```

- *Type:* string

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.property.tag"></a>

```typescript
public readonly tag: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppPendingDeploymentGitSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSource">AppPendingDeploymentGitSource</a>

---


### AppPendingDeploymentOutputReference <a name="AppPendingDeploymentOutputReference" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.Initializer"></a>

```typescript
import { app } from '@cdktn/provider-databricks'

new app.AppPendingDeploymentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.putEnvVars">putEnvVars</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.putGitSource">putGitSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.resetCommand">resetCommand</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.resetDeploymentId">resetDeploymentId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.resetEnvVars">resetEnvVars</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.resetGitSource">resetGitSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.resetSourceCodePath">resetSourceCodePath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEnvVars` <a name="putEnvVars" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.putEnvVars"></a>

```typescript
public putEnvVars(value: IResolvable | AppPendingDeploymentEnvVars[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.putEnvVars.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVars">AppPendingDeploymentEnvVars</a>[]

---

##### `putGitSource` <a name="putGitSource" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.putGitSource"></a>

```typescript
public putGitSource(value: AppPendingDeploymentGitSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.putGitSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSource">AppPendingDeploymentGitSource</a>

---

##### `resetCommand` <a name="resetCommand" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.resetCommand"></a>

```typescript
public resetCommand(): void
```

##### `resetDeploymentId` <a name="resetDeploymentId" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.resetDeploymentId"></a>

```typescript
public resetDeploymentId(): void
```

##### `resetEnvVars` <a name="resetEnvVars" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.resetEnvVars"></a>

```typescript
public resetEnvVars(): void
```

##### `resetGitSource` <a name="resetGitSource" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.resetGitSource"></a>

```typescript
public resetGitSource(): void
```

##### `resetMode` <a name="resetMode" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.resetMode"></a>

```typescript
public resetMode(): void
```

##### `resetSourceCodePath` <a name="resetSourceCodePath" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.resetSourceCodePath"></a>

```typescript
public resetSourceCodePath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.property.creator">creator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.property.deploymentArtifacts">deploymentArtifacts</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference">AppPendingDeploymentDeploymentArtifactsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.property.envVars">envVars</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsList">AppPendingDeploymentEnvVarsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.property.gitSource">gitSource</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference">AppPendingDeploymentGitSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.property.status">status</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference">AppPendingDeploymentStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.property.commandInput">commandInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.property.deploymentIdInput">deploymentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.property.envVarsInput">envVarsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVars">AppPendingDeploymentEnvVars</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.property.gitSourceInput">gitSourceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSource">AppPendingDeploymentGitSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.property.sourceCodePathInput">sourceCodePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.property.command">command</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.property.deploymentId">deploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.property.sourceCodePath">sourceCodePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppPendingDeployment">AppPendingDeployment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `creator`<sup>Required</sup> <a name="creator" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.property.creator"></a>

```typescript
public readonly creator: string;
```

- *Type:* string

---

##### `deploymentArtifacts`<sup>Required</sup> <a name="deploymentArtifacts" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.property.deploymentArtifacts"></a>

```typescript
public readonly deploymentArtifacts: AppPendingDeploymentDeploymentArtifactsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppPendingDeploymentDeploymentArtifactsOutputReference">AppPendingDeploymentDeploymentArtifactsOutputReference</a>

---

##### `envVars`<sup>Required</sup> <a name="envVars" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.property.envVars"></a>

```typescript
public readonly envVars: AppPendingDeploymentEnvVarsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVarsList">AppPendingDeploymentEnvVarsList</a>

---

##### `gitSource`<sup>Required</sup> <a name="gitSource" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.property.gitSource"></a>

```typescript
public readonly gitSource: AppPendingDeploymentGitSourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSourceOutputReference">AppPendingDeploymentGitSourceOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.property.status"></a>

```typescript
public readonly status: AppPendingDeploymentStatusOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference">AppPendingDeploymentStatusOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `commandInput`<sup>Optional</sup> <a name="commandInput" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.property.commandInput"></a>

```typescript
public readonly commandInput: string[];
```

- *Type:* string[]

---

##### `deploymentIdInput`<sup>Optional</sup> <a name="deploymentIdInput" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.property.deploymentIdInput"></a>

```typescript
public readonly deploymentIdInput: string;
```

- *Type:* string

---

##### `envVarsInput`<sup>Optional</sup> <a name="envVarsInput" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.property.envVarsInput"></a>

```typescript
public readonly envVarsInput: IResolvable | AppPendingDeploymentEnvVars[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.app.AppPendingDeploymentEnvVars">AppPendingDeploymentEnvVars</a>[]

---

##### `gitSourceInput`<sup>Optional</sup> <a name="gitSourceInput" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.property.gitSourceInput"></a>

```typescript
public readonly gitSourceInput: IResolvable | AppPendingDeploymentGitSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.app.AppPendingDeploymentGitSource">AppPendingDeploymentGitSource</a>

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `sourceCodePathInput`<sup>Optional</sup> <a name="sourceCodePathInput" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.property.sourceCodePathInput"></a>

```typescript
public readonly sourceCodePathInput: string;
```

- *Type:* string

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.property.command"></a>

```typescript
public readonly command: string[];
```

- *Type:* string[]

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.property.deploymentId"></a>

```typescript
public readonly deploymentId: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `sourceCodePath`<sup>Required</sup> <a name="sourceCodePath" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.property.sourceCodePath"></a>

```typescript
public readonly sourceCodePath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.app.AppPendingDeploymentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppPendingDeployment;
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppPendingDeployment">AppPendingDeployment</a>

---


### AppPendingDeploymentStatusOutputReference <a name="AppPendingDeploymentStatusOutputReference" id="@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.Initializer"></a>

```typescript
import { app } from '@cdktn/provider-databricks'

new app.AppPendingDeploymentStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppPendingDeploymentStatus">AppPendingDeploymentStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.app.AppPendingDeploymentStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppPendingDeploymentStatus;
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppPendingDeploymentStatus">AppPendingDeploymentStatus</a>

---


### AppProviderConfigOutputReference <a name="AppProviderConfigOutputReference" id="@cdktn/provider-databricks.app.AppProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.app.AppProviderConfigOutputReference.Initializer"></a>

```typescript
import { app } from '@cdktn/provider-databricks'

new app.AppProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.app.AppProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.app.AppProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.app.AppProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.app.AppProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.app.AppProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.app.AppProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.app.AppProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.app.AppProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.app.AppProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.app.AppProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.app.AppProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.app.AppProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.app.AppProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.app.AppProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.app.AppProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.app.AppProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.app.AppProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.app.AppProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.app.AppProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.app.AppProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.app.AppProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.app.AppProviderConfig">AppProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.app.AppProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.app.AppProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.app.AppProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.app.AppProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.app.AppProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.app.AppProviderConfig">AppProviderConfig</a>

---


### AppResourcesAppOutputReference <a name="AppResourcesAppOutputReference" id="@cdktn/provider-databricks.app.AppResourcesAppOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.app.AppResourcesAppOutputReference.Initializer"></a>

```typescript
import { app } from '@cdktn/provider-databricks'

new app.AppResourcesAppOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesAppOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesAppOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.app.AppResourcesAppOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesAppOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesAppOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesAppOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesAppOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesAppOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesAppOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesAppOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesAppOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesAppOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesAppOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesAppOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesAppOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesAppOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesAppOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesAppOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesAppOutputReference.resetPermission">resetPermission</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.app.AppResourcesAppOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.app.AppResourcesAppOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesAppOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.app.AppResourcesAppOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesAppOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.app.AppResourcesAppOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesAppOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.app.AppResourcesAppOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesAppOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.app.AppResourcesAppOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesAppOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.app.AppResourcesAppOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesAppOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.app.AppResourcesAppOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesAppOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.app.AppResourcesAppOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesAppOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.app.AppResourcesAppOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesAppOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.app.AppResourcesAppOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.app.AppResourcesAppOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.app.AppResourcesAppOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.app.AppResourcesAppOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.app.AppResourcesAppOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-databricks.app.AppResourcesAppOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPermission` <a name="resetPermission" id="@cdktn/provider-databricks.app.AppResourcesAppOutputReference.resetPermission"></a>

```typescript
public resetPermission(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesAppOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesAppOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesAppOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesAppOutputReference.property.permissionInput">permissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesAppOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesAppOutputReference.property.permission">permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesAppOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.app.AppResourcesApp">AppResourcesApp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.app.AppResourcesAppOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.app.AppResourcesAppOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.app.AppResourcesAppOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktn/provider-databricks.app.AppResourcesAppOutputReference.property.permissionInput"></a>

```typescript
public readonly permissionInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.app.AppResourcesAppOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.app.AppResourcesAppOutputReference.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.app.AppResourcesAppOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppResourcesApp;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.app.AppResourcesApp">AppResourcesApp</a>

---


### AppResourcesDatabaseOutputReference <a name="AppResourcesDatabaseOutputReference" id="@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.Initializer"></a>

```typescript
import { app } from '@cdktn/provider-databricks'

new app.AppResourcesDatabaseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.property.instanceNameInput">instanceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.property.permissionInput">permissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.property.instanceName">instanceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.property.permission">permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.app.AppResourcesDatabase">AppResourcesDatabase</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `instanceNameInput`<sup>Optional</sup> <a name="instanceNameInput" id="@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.property.instanceNameInput"></a>

```typescript
public readonly instanceNameInput: string;
```

- *Type:* string

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.property.permissionInput"></a>

```typescript
public readonly permissionInput: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `instanceName`<sup>Required</sup> <a name="instanceName" id="@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.property.instanceName"></a>

```typescript
public readonly instanceName: string;
```

- *Type:* string

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppResourcesDatabase;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.app.AppResourcesDatabase">AppResourcesDatabase</a>

---


### AppResourcesExperimentOutputReference <a name="AppResourcesExperimentOutputReference" id="@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.Initializer"></a>

```typescript
import { app } from '@cdktn/provider-databricks'

new app.AppResourcesExperimentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.property.experimentIdInput">experimentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.property.permissionInput">permissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.property.experimentId">experimentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.property.permission">permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.app.AppResourcesExperiment">AppResourcesExperiment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `experimentIdInput`<sup>Optional</sup> <a name="experimentIdInput" id="@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.property.experimentIdInput"></a>

```typescript
public readonly experimentIdInput: string;
```

- *Type:* string

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.property.permissionInput"></a>

```typescript
public readonly permissionInput: string;
```

- *Type:* string

---

##### `experimentId`<sup>Required</sup> <a name="experimentId" id="@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.property.experimentId"></a>

```typescript
public readonly experimentId: string;
```

- *Type:* string

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppResourcesExperiment;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.app.AppResourcesExperiment">AppResourcesExperiment</a>

---


### AppResourcesGenieSpaceOutputReference <a name="AppResourcesGenieSpaceOutputReference" id="@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.Initializer"></a>

```typescript
import { app } from '@cdktn/provider-databricks'

new app.AppResourcesGenieSpaceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.property.permissionInput">permissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.property.spaceIdInput">spaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.property.permission">permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.property.spaceId">spaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.app.AppResourcesGenieSpace">AppResourcesGenieSpace</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.property.permissionInput"></a>

```typescript
public readonly permissionInput: string;
```

- *Type:* string

---

##### `spaceIdInput`<sup>Optional</sup> <a name="spaceIdInput" id="@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.property.spaceIdInput"></a>

```typescript
public readonly spaceIdInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

---

##### `spaceId`<sup>Required</sup> <a name="spaceId" id="@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.property.spaceId"></a>

```typescript
public readonly spaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppResourcesGenieSpace;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.app.AppResourcesGenieSpace">AppResourcesGenieSpace</a>

---


### AppResourcesJobOutputReference <a name="AppResourcesJobOutputReference" id="@cdktn/provider-databricks.app.AppResourcesJobOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.app.AppResourcesJobOutputReference.Initializer"></a>

```typescript
import { app } from '@cdktn/provider-databricks'

new app.AppResourcesJobOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesJobOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesJobOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.app.AppResourcesJobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesJobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesJobOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesJobOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesJobOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesJobOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesJobOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesJobOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesJobOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesJobOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesJobOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesJobOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesJobOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesJobOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesJobOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.app.AppResourcesJobOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.app.AppResourcesJobOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesJobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.app.AppResourcesJobOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesJobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.app.AppResourcesJobOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesJobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.app.AppResourcesJobOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesJobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.app.AppResourcesJobOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesJobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.app.AppResourcesJobOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesJobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.app.AppResourcesJobOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesJobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.app.AppResourcesJobOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesJobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.app.AppResourcesJobOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesJobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.app.AppResourcesJobOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.app.AppResourcesJobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.app.AppResourcesJobOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.app.AppResourcesJobOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.app.AppResourcesJobOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesJobOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesJobOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesJobOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesJobOutputReference.property.permissionInput">permissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesJobOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesJobOutputReference.property.permission">permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesJobOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.app.AppResourcesJob">AppResourcesJob</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.app.AppResourcesJobOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.app.AppResourcesJobOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.app.AppResourcesJobOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktn/provider-databricks.app.AppResourcesJobOutputReference.property.permissionInput"></a>

```typescript
public readonly permissionInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.app.AppResourcesJobOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.app.AppResourcesJobOutputReference.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.app.AppResourcesJobOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppResourcesJob;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.app.AppResourcesJob">AppResourcesJob</a>

---


### AppResourcesList <a name="AppResourcesList" id="@cdktn/provider-databricks.app.AppResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.app.AppResourcesList.Initializer"></a>

```typescript
import { app } from '@cdktn/provider-databricks'

new app.AppResourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.app.AppResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.app.AppResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.app.AppResourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.app.AppResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.app.AppResourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.app.AppResourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.app.AppResourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.app.AppResourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.app.AppResourcesList.get"></a>

```typescript
public get(index: number): AppResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.app.AppResourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.app.AppResources">AppResources</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.app.AppResourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.app.AppResourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.app.AppResourcesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppResources[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.app.AppResources">AppResources</a>[]

---


### AppResourcesOutputReference <a name="AppResourcesOutputReference" id="@cdktn/provider-databricks.app.AppResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.Initializer"></a>

```typescript
import { app } from '@cdktn/provider-databricks'

new app.AppResourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.putApp">putApp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.putDatabase">putDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.putExperiment">putExperiment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.putGenieSpace">putGenieSpace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.putJob">putJob</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.putPostgres">putPostgres</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.putSecret">putSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.putServingEndpoint">putServingEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.putSqlWarehouse">putSqlWarehouse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.putUcSecurable">putUcSecurable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.resetApp">resetApp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.resetDatabase">resetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.resetExperiment">resetExperiment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.resetGenieSpace">resetGenieSpace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.resetJob">resetJob</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.resetPostgres">resetPostgres</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.resetSecret">resetSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.resetServingEndpoint">resetServingEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.resetSqlWarehouse">resetSqlWarehouse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.resetUcSecurable">resetUcSecurable</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApp` <a name="putApp" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.putApp"></a>

```typescript
public putApp(value: AppResourcesApp): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.putApp.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.app.AppResourcesApp">AppResourcesApp</a>

---

##### `putDatabase` <a name="putDatabase" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.putDatabase"></a>

```typescript
public putDatabase(value: AppResourcesDatabase): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.putDatabase.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.app.AppResourcesDatabase">AppResourcesDatabase</a>

---

##### `putExperiment` <a name="putExperiment" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.putExperiment"></a>

```typescript
public putExperiment(value: AppResourcesExperiment): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.putExperiment.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.app.AppResourcesExperiment">AppResourcesExperiment</a>

---

##### `putGenieSpace` <a name="putGenieSpace" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.putGenieSpace"></a>

```typescript
public putGenieSpace(value: AppResourcesGenieSpace): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.putGenieSpace.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.app.AppResourcesGenieSpace">AppResourcesGenieSpace</a>

---

##### `putJob` <a name="putJob" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.putJob"></a>

```typescript
public putJob(value: AppResourcesJob): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.putJob.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.app.AppResourcesJob">AppResourcesJob</a>

---

##### `putPostgres` <a name="putPostgres" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.putPostgres"></a>

```typescript
public putPostgres(value: AppResourcesPostgres): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.putPostgres.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.app.AppResourcesPostgres">AppResourcesPostgres</a>

---

##### `putSecret` <a name="putSecret" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.putSecret"></a>

```typescript
public putSecret(value: AppResourcesSecret): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.putSecret.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.app.AppResourcesSecret">AppResourcesSecret</a>

---

##### `putServingEndpoint` <a name="putServingEndpoint" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.putServingEndpoint"></a>

```typescript
public putServingEndpoint(value: AppResourcesServingEndpoint): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.putServingEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.app.AppResourcesServingEndpoint">AppResourcesServingEndpoint</a>

---

##### `putSqlWarehouse` <a name="putSqlWarehouse" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.putSqlWarehouse"></a>

```typescript
public putSqlWarehouse(value: AppResourcesSqlWarehouse): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.putSqlWarehouse.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.app.AppResourcesSqlWarehouse">AppResourcesSqlWarehouse</a>

---

##### `putUcSecurable` <a name="putUcSecurable" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.putUcSecurable"></a>

```typescript
public putUcSecurable(value: AppResourcesUcSecurable): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.putUcSecurable.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.app.AppResourcesUcSecurable">AppResourcesUcSecurable</a>

---

##### `resetApp` <a name="resetApp" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.resetApp"></a>

```typescript
public resetApp(): void
```

##### `resetDatabase` <a name="resetDatabase" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.resetDatabase"></a>

```typescript
public resetDatabase(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetExperiment` <a name="resetExperiment" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.resetExperiment"></a>

```typescript
public resetExperiment(): void
```

##### `resetGenieSpace` <a name="resetGenieSpace" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.resetGenieSpace"></a>

```typescript
public resetGenieSpace(): void
```

##### `resetJob` <a name="resetJob" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.resetJob"></a>

```typescript
public resetJob(): void
```

##### `resetPostgres` <a name="resetPostgres" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.resetPostgres"></a>

```typescript
public resetPostgres(): void
```

##### `resetSecret` <a name="resetSecret" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.resetSecret"></a>

```typescript
public resetSecret(): void
```

##### `resetServingEndpoint` <a name="resetServingEndpoint" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.resetServingEndpoint"></a>

```typescript
public resetServingEndpoint(): void
```

##### `resetSqlWarehouse` <a name="resetSqlWarehouse" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.resetSqlWarehouse"></a>

```typescript
public resetSqlWarehouse(): void
```

##### `resetUcSecurable` <a name="resetUcSecurable" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.resetUcSecurable"></a>

```typescript
public resetUcSecurable(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.property.app">app</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppResourcesAppOutputReference">AppResourcesAppOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.property.database">database</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference">AppResourcesDatabaseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.property.experiment">experiment</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference">AppResourcesExperimentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.property.genieSpace">genieSpace</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference">AppResourcesGenieSpaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.property.job">job</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppResourcesJobOutputReference">AppResourcesJobOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.property.postgres">postgres</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference">AppResourcesPostgresOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.property.secret">secret</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppResourcesSecretOutputReference">AppResourcesSecretOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.property.servingEndpoint">servingEndpoint</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference">AppResourcesServingEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.property.sqlWarehouse">sqlWarehouse</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference">AppResourcesSqlWarehouseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.property.ucSecurable">ucSecurable</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference">AppResourcesUcSecurableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.property.appInput">appInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.app.AppResourcesApp">AppResourcesApp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.property.databaseInput">databaseInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.app.AppResourcesDatabase">AppResourcesDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.property.experimentInput">experimentInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.app.AppResourcesExperiment">AppResourcesExperiment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.property.genieSpaceInput">genieSpaceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.app.AppResourcesGenieSpace">AppResourcesGenieSpace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.property.jobInput">jobInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.app.AppResourcesJob">AppResourcesJob</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.property.postgresInput">postgresInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.app.AppResourcesPostgres">AppResourcesPostgres</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.property.secretInput">secretInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.app.AppResourcesSecret">AppResourcesSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.property.servingEndpointInput">servingEndpointInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.app.AppResourcesServingEndpoint">AppResourcesServingEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.property.sqlWarehouseInput">sqlWarehouseInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.app.AppResourcesSqlWarehouse">AppResourcesSqlWarehouse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.property.ucSecurableInput">ucSecurableInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.app.AppResourcesUcSecurable">AppResourcesUcSecurable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.app.AppResources">AppResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.property.app"></a>

```typescript
public readonly app: AppResourcesAppOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppResourcesAppOutputReference">AppResourcesAppOutputReference</a>

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.property.database"></a>

```typescript
public readonly database: AppResourcesDatabaseOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppResourcesDatabaseOutputReference">AppResourcesDatabaseOutputReference</a>

---

##### `experiment`<sup>Required</sup> <a name="experiment" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.property.experiment"></a>

```typescript
public readonly experiment: AppResourcesExperimentOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppResourcesExperimentOutputReference">AppResourcesExperimentOutputReference</a>

---

##### `genieSpace`<sup>Required</sup> <a name="genieSpace" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.property.genieSpace"></a>

```typescript
public readonly genieSpace: AppResourcesGenieSpaceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppResourcesGenieSpaceOutputReference">AppResourcesGenieSpaceOutputReference</a>

---

##### `job`<sup>Required</sup> <a name="job" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.property.job"></a>

```typescript
public readonly job: AppResourcesJobOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppResourcesJobOutputReference">AppResourcesJobOutputReference</a>

---

##### `postgres`<sup>Required</sup> <a name="postgres" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.property.postgres"></a>

```typescript
public readonly postgres: AppResourcesPostgresOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference">AppResourcesPostgresOutputReference</a>

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.property.secret"></a>

```typescript
public readonly secret: AppResourcesSecretOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppResourcesSecretOutputReference">AppResourcesSecretOutputReference</a>

---

##### `servingEndpoint`<sup>Required</sup> <a name="servingEndpoint" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.property.servingEndpoint"></a>

```typescript
public readonly servingEndpoint: AppResourcesServingEndpointOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference">AppResourcesServingEndpointOutputReference</a>

---

##### `sqlWarehouse`<sup>Required</sup> <a name="sqlWarehouse" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.property.sqlWarehouse"></a>

```typescript
public readonly sqlWarehouse: AppResourcesSqlWarehouseOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference">AppResourcesSqlWarehouseOutputReference</a>

---

##### `ucSecurable`<sup>Required</sup> <a name="ucSecurable" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.property.ucSecurable"></a>

```typescript
public readonly ucSecurable: AppResourcesUcSecurableOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference">AppResourcesUcSecurableOutputReference</a>

---

##### `appInput`<sup>Optional</sup> <a name="appInput" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.property.appInput"></a>

```typescript
public readonly appInput: IResolvable | AppResourcesApp;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.app.AppResourcesApp">AppResourcesApp</a>

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.property.databaseInput"></a>

```typescript
public readonly databaseInput: IResolvable | AppResourcesDatabase;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.app.AppResourcesDatabase">AppResourcesDatabase</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `experimentInput`<sup>Optional</sup> <a name="experimentInput" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.property.experimentInput"></a>

```typescript
public readonly experimentInput: IResolvable | AppResourcesExperiment;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.app.AppResourcesExperiment">AppResourcesExperiment</a>

---

##### `genieSpaceInput`<sup>Optional</sup> <a name="genieSpaceInput" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.property.genieSpaceInput"></a>

```typescript
public readonly genieSpaceInput: IResolvable | AppResourcesGenieSpace;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.app.AppResourcesGenieSpace">AppResourcesGenieSpace</a>

---

##### `jobInput`<sup>Optional</sup> <a name="jobInput" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.property.jobInput"></a>

```typescript
public readonly jobInput: IResolvable | AppResourcesJob;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.app.AppResourcesJob">AppResourcesJob</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `postgresInput`<sup>Optional</sup> <a name="postgresInput" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.property.postgresInput"></a>

```typescript
public readonly postgresInput: IResolvable | AppResourcesPostgres;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.app.AppResourcesPostgres">AppResourcesPostgres</a>

---

##### `secretInput`<sup>Optional</sup> <a name="secretInput" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.property.secretInput"></a>

```typescript
public readonly secretInput: IResolvable | AppResourcesSecret;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.app.AppResourcesSecret">AppResourcesSecret</a>

---

##### `servingEndpointInput`<sup>Optional</sup> <a name="servingEndpointInput" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.property.servingEndpointInput"></a>

```typescript
public readonly servingEndpointInput: IResolvable | AppResourcesServingEndpoint;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.app.AppResourcesServingEndpoint">AppResourcesServingEndpoint</a>

---

##### `sqlWarehouseInput`<sup>Optional</sup> <a name="sqlWarehouseInput" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.property.sqlWarehouseInput"></a>

```typescript
public readonly sqlWarehouseInput: IResolvable | AppResourcesSqlWarehouse;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.app.AppResourcesSqlWarehouse">AppResourcesSqlWarehouse</a>

---

##### `ucSecurableInput`<sup>Optional</sup> <a name="ucSecurableInput" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.property.ucSecurableInput"></a>

```typescript
public readonly ucSecurableInput: IResolvable | AppResourcesUcSecurable;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.app.AppResourcesUcSecurable">AppResourcesUcSecurable</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.app.AppResourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppResources;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.app.AppResources">AppResources</a>

---


### AppResourcesPostgresOutputReference <a name="AppResourcesPostgresOutputReference" id="@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.Initializer"></a>

```typescript
import { app } from '@cdktn/provider-databricks'

new app.AppResourcesPostgresOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.resetBranch">resetBranch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.resetDatabase">resetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.resetPermission">resetPermission</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBranch` <a name="resetBranch" id="@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.resetBranch"></a>

```typescript
public resetBranch(): void
```

##### `resetDatabase` <a name="resetDatabase" id="@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.resetDatabase"></a>

```typescript
public resetDatabase(): void
```

##### `resetPermission` <a name="resetPermission" id="@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.resetPermission"></a>

```typescript
public resetPermission(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.property.branchInput">branchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.property.permissionInput">permissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.property.branch">branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.property.permission">permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.app.AppResourcesPostgres">AppResourcesPostgres</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `branchInput`<sup>Optional</sup> <a name="branchInput" id="@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.property.branchInput"></a>

```typescript
public readonly branchInput: string;
```

- *Type:* string

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.property.permissionInput"></a>

```typescript
public readonly permissionInput: string;
```

- *Type:* string

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.property.branch"></a>

```typescript
public readonly branch: string;
```

- *Type:* string

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.app.AppResourcesPostgresOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppResourcesPostgres;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.app.AppResourcesPostgres">AppResourcesPostgres</a>

---


### AppResourcesSecretOutputReference <a name="AppResourcesSecretOutputReference" id="@cdktn/provider-databricks.app.AppResourcesSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.Initializer"></a>

```typescript
import { app } from '@cdktn/provider-databricks'

new app.AppResourcesSecretOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.property.permissionInput">permissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.property.permission">permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.property.scope">scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.app.AppResourcesSecret">AppResourcesSecret</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.property.permissionInput"></a>

```typescript
public readonly permissionInput: string;
```

- *Type:* string

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.app.AppResourcesSecretOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppResourcesSecret;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.app.AppResourcesSecret">AppResourcesSecret</a>

---


### AppResourcesServingEndpointOutputReference <a name="AppResourcesServingEndpointOutputReference" id="@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.Initializer"></a>

```typescript
import { app } from '@cdktn/provider-databricks'

new app.AppResourcesServingEndpointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.property.permissionInput">permissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.property.permission">permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.app.AppResourcesServingEndpoint">AppResourcesServingEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.property.permissionInput"></a>

```typescript
public readonly permissionInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.app.AppResourcesServingEndpointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppResourcesServingEndpoint;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.app.AppResourcesServingEndpoint">AppResourcesServingEndpoint</a>

---


### AppResourcesSqlWarehouseOutputReference <a name="AppResourcesSqlWarehouseOutputReference" id="@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.Initializer"></a>

```typescript
import { app } from '@cdktn/provider-databricks'

new app.AppResourcesSqlWarehouseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.property.permissionInput">permissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.property.permission">permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.app.AppResourcesSqlWarehouse">AppResourcesSqlWarehouse</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.property.permissionInput"></a>

```typescript
public readonly permissionInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.app.AppResourcesSqlWarehouseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppResourcesSqlWarehouse;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.app.AppResourcesSqlWarehouse">AppResourcesSqlWarehouse</a>

---


### AppResourcesUcSecurableOutputReference <a name="AppResourcesUcSecurableOutputReference" id="@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.Initializer"></a>

```typescript
import { app } from '@cdktn/provider-databricks'

new app.AppResourcesUcSecurableOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.property.securableKind">securableKind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.property.permissionInput">permissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.property.securableFullNameInput">securableFullNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.property.securableTypeInput">securableTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.property.permission">permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.property.securableFullName">securableFullName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.property.securableType">securableType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.app.AppResourcesUcSecurable">AppResourcesUcSecurable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `securableKind`<sup>Required</sup> <a name="securableKind" id="@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.property.securableKind"></a>

```typescript
public readonly securableKind: string;
```

- *Type:* string

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.property.permissionInput"></a>

```typescript
public readonly permissionInput: string;
```

- *Type:* string

---

##### `securableFullNameInput`<sup>Optional</sup> <a name="securableFullNameInput" id="@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.property.securableFullNameInput"></a>

```typescript
public readonly securableFullNameInput: string;
```

- *Type:* string

---

##### `securableTypeInput`<sup>Optional</sup> <a name="securableTypeInput" id="@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.property.securableTypeInput"></a>

```typescript
public readonly securableTypeInput: string;
```

- *Type:* string

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

---

##### `securableFullName`<sup>Required</sup> <a name="securableFullName" id="@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.property.securableFullName"></a>

```typescript
public readonly securableFullName: string;
```

- *Type:* string

---

##### `securableType`<sup>Required</sup> <a name="securableType" id="@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.property.securableType"></a>

```typescript
public readonly securableType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.app.AppResourcesUcSecurableOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppResourcesUcSecurable;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.app.AppResourcesUcSecurable">AppResourcesUcSecurable</a>

---


### AppTelemetryExportDestinationsList <a name="AppTelemetryExportDestinationsList" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsList.Initializer"></a>

```typescript
import { app } from '@cdktn/provider-databricks'

new app.AppTelemetryExportDestinationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsList.get"></a>

```typescript
public get(index: number): AppTelemetryExportDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinations">AppTelemetryExportDestinations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppTelemetryExportDestinations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinations">AppTelemetryExportDestinations</a>[]

---


### AppTelemetryExportDestinationsOutputReference <a name="AppTelemetryExportDestinationsOutputReference" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.Initializer"></a>

```typescript
import { app } from '@cdktn/provider-databricks'

new app.AppTelemetryExportDestinationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.putUnityCatalog">putUnityCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.resetUnityCatalog">resetUnityCatalog</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putUnityCatalog` <a name="putUnityCatalog" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.putUnityCatalog"></a>

```typescript
public putUnityCatalog(value: AppTelemetryExportDestinationsUnityCatalog): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.putUnityCatalog.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalog">AppTelemetryExportDestinationsUnityCatalog</a>

---

##### `resetUnityCatalog` <a name="resetUnityCatalog" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.resetUnityCatalog"></a>

```typescript
public resetUnityCatalog(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.property.unityCatalog">unityCatalog</a></code> | <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference">AppTelemetryExportDestinationsUnityCatalogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.property.unityCatalogInput">unityCatalogInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalog">AppTelemetryExportDestinationsUnityCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinations">AppTelemetryExportDestinations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `unityCatalog`<sup>Required</sup> <a name="unityCatalog" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.property.unityCatalog"></a>

```typescript
public readonly unityCatalog: AppTelemetryExportDestinationsUnityCatalogOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference">AppTelemetryExportDestinationsUnityCatalogOutputReference</a>

---

##### `unityCatalogInput`<sup>Optional</sup> <a name="unityCatalogInput" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.property.unityCatalogInput"></a>

```typescript
public readonly unityCatalogInput: IResolvable | AppTelemetryExportDestinationsUnityCatalog;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalog">AppTelemetryExportDestinationsUnityCatalog</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppTelemetryExportDestinations;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinations">AppTelemetryExportDestinations</a>

---


### AppTelemetryExportDestinationsUnityCatalogOutputReference <a name="AppTelemetryExportDestinationsUnityCatalogOutputReference" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.Initializer"></a>

```typescript
import { app } from '@cdktn/provider-databricks'

new app.AppTelemetryExportDestinationsUnityCatalogOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.property.logsTableInput">logsTableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.property.metricsTableInput">metricsTableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.property.tracesTableInput">tracesTableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.property.logsTable">logsTable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.property.metricsTable">metricsTable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.property.tracesTable">tracesTable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalog">AppTelemetryExportDestinationsUnityCatalog</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logsTableInput`<sup>Optional</sup> <a name="logsTableInput" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.property.logsTableInput"></a>

```typescript
public readonly logsTableInput: string;
```

- *Type:* string

---

##### `metricsTableInput`<sup>Optional</sup> <a name="metricsTableInput" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.property.metricsTableInput"></a>

```typescript
public readonly metricsTableInput: string;
```

- *Type:* string

---

##### `tracesTableInput`<sup>Optional</sup> <a name="tracesTableInput" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.property.tracesTableInput"></a>

```typescript
public readonly tracesTableInput: string;
```

- *Type:* string

---

##### `logsTable`<sup>Required</sup> <a name="logsTable" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.property.logsTable"></a>

```typescript
public readonly logsTable: string;
```

- *Type:* string

---

##### `metricsTable`<sup>Required</sup> <a name="metricsTable" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.property.metricsTable"></a>

```typescript
public readonly metricsTable: string;
```

- *Type:* string

---

##### `tracesTable`<sup>Required</sup> <a name="tracesTable" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.property.tracesTable"></a>

```typescript
public readonly tracesTable: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalogOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppTelemetryExportDestinationsUnityCatalog;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.app.AppTelemetryExportDestinationsUnityCatalog">AppTelemetryExportDestinationsUnityCatalog</a>

---



