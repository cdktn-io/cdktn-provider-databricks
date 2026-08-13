# `appSpace` Submodule <a name="`appSpace` Submodule" id="@cdktn/provider-databricks.appSpace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppSpace <a name="AppSpace" id="@cdktn/provider-databricks.appSpace.AppSpace"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/app_space databricks_app_space}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.appSpace.AppSpace.Initializer"></a>

```typescript
import { appSpace } from '@cdktn/provider-databricks'

new appSpace.AppSpace(scope: Construct, id: string, config: AppSpaceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpace.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpace.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpace.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceConfig">AppSpaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.appSpace.AppSpace.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.appSpace.AppSpace.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.appSpace.AppSpace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.appSpace.AppSpaceConfig">AppSpaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpace.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpace.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpace.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpace.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpace.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpace.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpace.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpace.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpace.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpace.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpace.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpace.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpace.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpace.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpace.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpace.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpace.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpace.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpace.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpace.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpace.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpace.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpace.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpace.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpace.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpace.putResources">putResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpace.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpace.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpace.resetResources">resetResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpace.resetUsagePolicyId">resetUsagePolicyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpace.resetUserApiScopes">resetUserApiScopes</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.appSpace.AppSpace.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.appSpace.AppSpace.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.appSpace.AppSpace.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.appSpace.AppSpace.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.appSpace.AppSpace.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.appSpace.AppSpace.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.appSpace.AppSpace.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.appSpace.AppSpace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.appSpace.AppSpace.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.appSpace.AppSpace.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.appSpace.AppSpace.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.appSpace.AppSpace.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-databricks.appSpace.AppSpace.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.appSpace.AppSpace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.appSpace.AppSpace.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.appSpace.AppSpace.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.appSpace.AppSpace.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.appSpace.AppSpace.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.appSpace.AppSpace.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.appSpace.AppSpace.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.appSpace.AppSpace.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.appSpace.AppSpace.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.appSpace.AppSpace.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-databricks.appSpace.AppSpace.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-databricks.appSpace.AppSpace.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.appSpace.AppSpace.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.appSpace.AppSpace.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.appSpace.AppSpace.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-databricks.appSpace.AppSpace.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.appSpace.AppSpace.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-databricks.appSpace.AppSpace.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.appSpace.AppSpace.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.appSpace.AppSpace.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-databricks.appSpace.AppSpace.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.appSpace.AppSpace.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.appSpace.AppSpace.putProviderConfig"></a>

```typescript
public putProviderConfig(value: AppSpaceProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.appSpace.AppSpace.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.appSpace.AppSpaceProviderConfig">AppSpaceProviderConfig</a>

---

##### `putResources` <a name="putResources" id="@cdktn/provider-databricks.appSpace.AppSpace.putResources"></a>

```typescript
public putResources(value: IResolvable | AppSpaceResources[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.appSpace.AppSpace.putResources.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.appSpace.AppSpaceResources">AppSpaceResources</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-databricks.appSpace.AppSpace.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.appSpace.AppSpace.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

##### `resetResources` <a name="resetResources" id="@cdktn/provider-databricks.appSpace.AppSpace.resetResources"></a>

```typescript
public resetResources(): void
```

##### `resetUsagePolicyId` <a name="resetUsagePolicyId" id="@cdktn/provider-databricks.appSpace.AppSpace.resetUsagePolicyId"></a>

```typescript
public resetUsagePolicyId(): void
```

##### `resetUserApiScopes` <a name="resetUserApiScopes" id="@cdktn/provider-databricks.appSpace.AppSpace.resetUserApiScopes"></a>

```typescript
public resetUserApiScopes(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpace.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpace.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpace.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpace.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AppSpace resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.appSpace.AppSpace.isConstruct"></a>

```typescript
import { appSpace } from '@cdktn/provider-databricks'

appSpace.AppSpace.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.appSpace.AppSpace.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.appSpace.AppSpace.isTerraformElement"></a>

```typescript
import { appSpace } from '@cdktn/provider-databricks'

appSpace.AppSpace.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.appSpace.AppSpace.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-databricks.appSpace.AppSpace.isTerraformResource"></a>

```typescript
import { appSpace } from '@cdktn/provider-databricks'

appSpace.AppSpace.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.appSpace.AppSpace.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.appSpace.AppSpace.generateConfigForImport"></a>

```typescript
import { appSpace } from '@cdktn/provider-databricks'

appSpace.AppSpace.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a AppSpace resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.appSpace.AppSpace.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.appSpace.AppSpace.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppSpace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.appSpace.AppSpace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppSpace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/app_space#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.appSpace.AppSpace.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AppSpace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpace.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpace.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpace.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpace.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpace.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpace.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpace.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpace.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpace.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpace.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpace.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpace.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpace.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpace.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpace.property.creator">creator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpace.property.effectiveUsagePolicyId">effectiveUsagePolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpace.property.effectiveUserApiScopes">effectiveUserApiScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpace.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpace.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceProviderConfigOutputReference">AppSpaceProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpace.property.resources">resources</a></code> | <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesList">AppSpaceResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpace.property.servicePrincipalClientId">servicePrincipalClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpace.property.servicePrincipalId">servicePrincipalId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpace.property.servicePrincipalName">servicePrincipalName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpace.property.status">status</a></code> | <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceStatusOutputReference">AppSpaceStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpace.property.updater">updater</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpace.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpace.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpace.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpace.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.appSpace.AppSpaceProviderConfig">AppSpaceProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpace.property.resourcesInput">resourcesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.appSpace.AppSpaceResources">AppSpaceResources</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpace.property.usagePolicyIdInput">usagePolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpace.property.userApiScopesInput">userApiScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpace.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpace.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpace.property.usagePolicyId">usagePolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpace.property.userApiScopes">userApiScopes</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.appSpace.AppSpace.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.appSpace.AppSpace.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.appSpace.AppSpace.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.appSpace.AppSpace.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.appSpace.AppSpace.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.appSpace.AppSpace.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.appSpace.AppSpace.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.appSpace.AppSpace.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.appSpace.AppSpace.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.appSpace.AppSpace.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.appSpace.AppSpace.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.appSpace.AppSpace.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.appSpace.AppSpace.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.appSpace.AppSpace.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.appSpace.AppSpace.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `creator`<sup>Required</sup> <a name="creator" id="@cdktn/provider-databricks.appSpace.AppSpace.property.creator"></a>

```typescript
public readonly creator: string;
```

- *Type:* string

---

##### `effectiveUsagePolicyId`<sup>Required</sup> <a name="effectiveUsagePolicyId" id="@cdktn/provider-databricks.appSpace.AppSpace.property.effectiveUsagePolicyId"></a>

```typescript
public readonly effectiveUsagePolicyId: string;
```

- *Type:* string

---

##### `effectiveUserApiScopes`<sup>Required</sup> <a name="effectiveUserApiScopes" id="@cdktn/provider-databricks.appSpace.AppSpace.property.effectiveUserApiScopes"></a>

```typescript
public readonly effectiveUserApiScopes: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.appSpace.AppSpace.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.appSpace.AppSpace.property.providerConfig"></a>

```typescript
public readonly providerConfig: AppSpaceProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.appSpace.AppSpaceProviderConfigOutputReference">AppSpaceProviderConfigOutputReference</a>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-databricks.appSpace.AppSpace.property.resources"></a>

```typescript
public readonly resources: AppSpaceResourcesList;
```

- *Type:* <a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesList">AppSpaceResourcesList</a>

---

##### `servicePrincipalClientId`<sup>Required</sup> <a name="servicePrincipalClientId" id="@cdktn/provider-databricks.appSpace.AppSpace.property.servicePrincipalClientId"></a>

```typescript
public readonly servicePrincipalClientId: string;
```

- *Type:* string

---

##### `servicePrincipalId`<sup>Required</sup> <a name="servicePrincipalId" id="@cdktn/provider-databricks.appSpace.AppSpace.property.servicePrincipalId"></a>

```typescript
public readonly servicePrincipalId: number;
```

- *Type:* number

---

##### `servicePrincipalName`<sup>Required</sup> <a name="servicePrincipalName" id="@cdktn/provider-databricks.appSpace.AppSpace.property.servicePrincipalName"></a>

```typescript
public readonly servicePrincipalName: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-databricks.appSpace.AppSpace.property.status"></a>

```typescript
public readonly status: AppSpaceStatusOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.appSpace.AppSpaceStatusOutputReference">AppSpaceStatusOutputReference</a>

---

##### `updater`<sup>Required</sup> <a name="updater" id="@cdktn/provider-databricks.appSpace.AppSpace.property.updater"></a>

```typescript
public readonly updater: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-databricks.appSpace.AppSpace.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-databricks.appSpace.AppSpace.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.appSpace.AppSpace.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.appSpace.AppSpace.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | AppSpaceProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.appSpace.AppSpaceProviderConfig">AppSpaceProviderConfig</a>

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktn/provider-databricks.appSpace.AppSpace.property.resourcesInput"></a>

```typescript
public readonly resourcesInput: IResolvable | AppSpaceResources[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.appSpace.AppSpaceResources">AppSpaceResources</a>[]

---

##### `usagePolicyIdInput`<sup>Optional</sup> <a name="usagePolicyIdInput" id="@cdktn/provider-databricks.appSpace.AppSpace.property.usagePolicyIdInput"></a>

```typescript
public readonly usagePolicyIdInput: string;
```

- *Type:* string

---

##### `userApiScopesInput`<sup>Optional</sup> <a name="userApiScopesInput" id="@cdktn/provider-databricks.appSpace.AppSpace.property.userApiScopesInput"></a>

```typescript
public readonly userApiScopesInput: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.appSpace.AppSpace.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.appSpace.AppSpace.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `usagePolicyId`<sup>Required</sup> <a name="usagePolicyId" id="@cdktn/provider-databricks.appSpace.AppSpace.property.usagePolicyId"></a>

```typescript
public readonly usagePolicyId: string;
```

- *Type:* string

---

##### `userApiScopes`<sup>Required</sup> <a name="userApiScopes" id="@cdktn/provider-databricks.appSpace.AppSpace.property.userApiScopes"></a>

```typescript
public readonly userApiScopes: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpace.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.appSpace.AppSpace.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppSpaceConfig <a name="AppSpaceConfig" id="@cdktn/provider-databricks.appSpace.AppSpaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.appSpace.AppSpaceConfig.Initializer"></a>

```typescript
import { appSpace } from '@cdktn/provider-databricks'

const appSpaceConfig: appSpace.AppSpaceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/app_space#name AppSpace#name}. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/app_space#description AppSpace#description}. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceProviderConfig">AppSpaceProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/app_space#provider_config AppSpace#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceConfig.property.resources">resources</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.appSpace.AppSpaceResources">AppSpaceResources</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/app_space#resources AppSpace#resources}. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceConfig.property.usagePolicyId">usagePolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/app_space#usage_policy_id AppSpace#usage_policy_id}. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceConfig.property.userApiScopes">userApiScopes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/app_space#user_api_scopes AppSpace#user_api_scopes}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.appSpace.AppSpaceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.appSpace.AppSpaceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.appSpace.AppSpaceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.appSpace.AppSpaceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.appSpace.AppSpaceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.appSpace.AppSpaceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.appSpace.AppSpaceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.appSpace.AppSpaceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/app_space#name AppSpace#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-databricks.appSpace.AppSpaceConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/app_space#description AppSpace#description}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.appSpace.AppSpaceConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: AppSpaceProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.appSpace.AppSpaceProviderConfig">AppSpaceProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/app_space#provider_config AppSpace#provider_config}.

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktn/provider-databricks.appSpace.AppSpaceConfig.property.resources"></a>

```typescript
public readonly resources: IResolvable | AppSpaceResources[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.appSpace.AppSpaceResources">AppSpaceResources</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/app_space#resources AppSpace#resources}.

---

##### `usagePolicyId`<sup>Optional</sup> <a name="usagePolicyId" id="@cdktn/provider-databricks.appSpace.AppSpaceConfig.property.usagePolicyId"></a>

```typescript
public readonly usagePolicyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/app_space#usage_policy_id AppSpace#usage_policy_id}.

---

##### `userApiScopes`<sup>Optional</sup> <a name="userApiScopes" id="@cdktn/provider-databricks.appSpace.AppSpaceConfig.property.userApiScopes"></a>

```typescript
public readonly userApiScopes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/app_space#user_api_scopes AppSpace#user_api_scopes}.

---

### AppSpaceProviderConfig <a name="AppSpaceProviderConfig" id="@cdktn/provider-databricks.appSpace.AppSpaceProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.appSpace.AppSpaceProviderConfig.Initializer"></a>

```typescript
import { appSpace } from '@cdktn/provider-databricks'

const appSpaceProviderConfig: appSpace.AppSpaceProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/app_space#workspace_id AppSpace#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.appSpace.AppSpaceProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/app_space#workspace_id AppSpace#workspace_id}.

---

### AppSpaceResources <a name="AppSpaceResources" id="@cdktn/provider-databricks.appSpace.AppSpaceResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.appSpace.AppSpaceResources.Initializer"></a>

```typescript
import { appSpace } from '@cdktn/provider-databricks'

const appSpaceResources: appSpace.AppSpaceResources = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResources.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/app_space#name AppSpace#name}. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResources.property.app">app</a></code> | <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesApp">AppSpaceResourcesApp</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/app_space#app AppSpace#app}. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResources.property.database">database</a></code> | <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesDatabase">AppSpaceResourcesDatabase</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/app_space#database AppSpace#database}. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResources.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/app_space#description AppSpace#description}. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResources.property.experiment">experiment</a></code> | <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesExperiment">AppSpaceResourcesExperiment</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/app_space#experiment AppSpace#experiment}. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResources.property.genieSpace">genieSpace</a></code> | <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesGenieSpace">AppSpaceResourcesGenieSpace</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/app_space#genie_space AppSpace#genie_space}. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResources.property.job">job</a></code> | <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesJob">AppSpaceResourcesJob</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/app_space#job AppSpace#job}. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResources.property.postgres">postgres</a></code> | <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesPostgres">AppSpaceResourcesPostgres</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/app_space#postgres AppSpace#postgres}. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResources.property.secret">secret</a></code> | <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesSecret">AppSpaceResourcesSecret</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/app_space#secret AppSpace#secret}. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResources.property.servingEndpoint">servingEndpoint</a></code> | <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesServingEndpoint">AppSpaceResourcesServingEndpoint</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/app_space#serving_endpoint AppSpace#serving_endpoint}. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResources.property.sqlWarehouse">sqlWarehouse</a></code> | <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesSqlWarehouse">AppSpaceResourcesSqlWarehouse</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/app_space#sql_warehouse AppSpace#sql_warehouse}. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResources.property.ucSecurable">ucSecurable</a></code> | <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesUcSecurable">AppSpaceResourcesUcSecurable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/app_space#uc_securable AppSpace#uc_securable}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.appSpace.AppSpaceResources.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/app_space#name AppSpace#name}.

---

##### `app`<sup>Optional</sup> <a name="app" id="@cdktn/provider-databricks.appSpace.AppSpaceResources.property.app"></a>

```typescript
public readonly app: AppSpaceResourcesApp;
```

- *Type:* <a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesApp">AppSpaceResourcesApp</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/app_space#app AppSpace#app}.

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktn/provider-databricks.appSpace.AppSpaceResources.property.database"></a>

```typescript
public readonly database: AppSpaceResourcesDatabase;
```

- *Type:* <a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesDatabase">AppSpaceResourcesDatabase</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/app_space#database AppSpace#database}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-databricks.appSpace.AppSpaceResources.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/app_space#description AppSpace#description}.

---

##### `experiment`<sup>Optional</sup> <a name="experiment" id="@cdktn/provider-databricks.appSpace.AppSpaceResources.property.experiment"></a>

```typescript
public readonly experiment: AppSpaceResourcesExperiment;
```

- *Type:* <a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesExperiment">AppSpaceResourcesExperiment</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/app_space#experiment AppSpace#experiment}.

---

##### `genieSpace`<sup>Optional</sup> <a name="genieSpace" id="@cdktn/provider-databricks.appSpace.AppSpaceResources.property.genieSpace"></a>

```typescript
public readonly genieSpace: AppSpaceResourcesGenieSpace;
```

- *Type:* <a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesGenieSpace">AppSpaceResourcesGenieSpace</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/app_space#genie_space AppSpace#genie_space}.

---

##### `job`<sup>Optional</sup> <a name="job" id="@cdktn/provider-databricks.appSpace.AppSpaceResources.property.job"></a>

```typescript
public readonly job: AppSpaceResourcesJob;
```

- *Type:* <a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesJob">AppSpaceResourcesJob</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/app_space#job AppSpace#job}.

---

##### `postgres`<sup>Optional</sup> <a name="postgres" id="@cdktn/provider-databricks.appSpace.AppSpaceResources.property.postgres"></a>

```typescript
public readonly postgres: AppSpaceResourcesPostgres;
```

- *Type:* <a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesPostgres">AppSpaceResourcesPostgres</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/app_space#postgres AppSpace#postgres}.

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktn/provider-databricks.appSpace.AppSpaceResources.property.secret"></a>

```typescript
public readonly secret: AppSpaceResourcesSecret;
```

- *Type:* <a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesSecret">AppSpaceResourcesSecret</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/app_space#secret AppSpace#secret}.

---

##### `servingEndpoint`<sup>Optional</sup> <a name="servingEndpoint" id="@cdktn/provider-databricks.appSpace.AppSpaceResources.property.servingEndpoint"></a>

```typescript
public readonly servingEndpoint: AppSpaceResourcesServingEndpoint;
```

- *Type:* <a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesServingEndpoint">AppSpaceResourcesServingEndpoint</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/app_space#serving_endpoint AppSpace#serving_endpoint}.

---

##### `sqlWarehouse`<sup>Optional</sup> <a name="sqlWarehouse" id="@cdktn/provider-databricks.appSpace.AppSpaceResources.property.sqlWarehouse"></a>

```typescript
public readonly sqlWarehouse: AppSpaceResourcesSqlWarehouse;
```

- *Type:* <a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesSqlWarehouse">AppSpaceResourcesSqlWarehouse</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/app_space#sql_warehouse AppSpace#sql_warehouse}.

---

##### `ucSecurable`<sup>Optional</sup> <a name="ucSecurable" id="@cdktn/provider-databricks.appSpace.AppSpaceResources.property.ucSecurable"></a>

```typescript
public readonly ucSecurable: AppSpaceResourcesUcSecurable;
```

- *Type:* <a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesUcSecurable">AppSpaceResourcesUcSecurable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/app_space#uc_securable AppSpace#uc_securable}.

---

### AppSpaceResourcesApp <a name="AppSpaceResourcesApp" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesApp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesApp.Initializer"></a>

```typescript
import { appSpace } from '@cdktn/provider-databricks'

const appSpaceResourcesApp: appSpace.AppSpaceResourcesApp = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesApp.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/app_space#name AppSpace#name}. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesApp.property.permission">permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/app_space#permission AppSpace#permission}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesApp.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/app_space#name AppSpace#name}.

---

##### `permission`<sup>Optional</sup> <a name="permission" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesApp.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/app_space#permission AppSpace#permission}.

---

### AppSpaceResourcesDatabase <a name="AppSpaceResourcesDatabase" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesDatabase"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesDatabase.Initializer"></a>

```typescript
import { appSpace } from '@cdktn/provider-databricks'

const appSpaceResourcesDatabase: appSpace.AppSpaceResourcesDatabase = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesDatabase.property.databaseName">databaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/app_space#database_name AppSpace#database_name}. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesDatabase.property.instanceName">instanceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/app_space#instance_name AppSpace#instance_name}. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesDatabase.property.permission">permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/app_space#permission AppSpace#permission}. |

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesDatabase.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/app_space#database_name AppSpace#database_name}.

---

##### `instanceName`<sup>Required</sup> <a name="instanceName" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesDatabase.property.instanceName"></a>

```typescript
public readonly instanceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/app_space#instance_name AppSpace#instance_name}.

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesDatabase.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/app_space#permission AppSpace#permission}.

---

### AppSpaceResourcesExperiment <a name="AppSpaceResourcesExperiment" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesExperiment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesExperiment.Initializer"></a>

```typescript
import { appSpace } from '@cdktn/provider-databricks'

const appSpaceResourcesExperiment: appSpace.AppSpaceResourcesExperiment = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesExperiment.property.experimentId">experimentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/app_space#experiment_id AppSpace#experiment_id}. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesExperiment.property.permission">permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/app_space#permission AppSpace#permission}. |

---

##### `experimentId`<sup>Required</sup> <a name="experimentId" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesExperiment.property.experimentId"></a>

```typescript
public readonly experimentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/app_space#experiment_id AppSpace#experiment_id}.

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesExperiment.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/app_space#permission AppSpace#permission}.

---

### AppSpaceResourcesGenieSpace <a name="AppSpaceResourcesGenieSpace" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesGenieSpace"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesGenieSpace.Initializer"></a>

```typescript
import { appSpace } from '@cdktn/provider-databricks'

const appSpaceResourcesGenieSpace: appSpace.AppSpaceResourcesGenieSpace = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesGenieSpace.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/app_space#name AppSpace#name}. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesGenieSpace.property.permission">permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/app_space#permission AppSpace#permission}. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesGenieSpace.property.spaceId">spaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/app_space#space_id AppSpace#space_id}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesGenieSpace.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/app_space#name AppSpace#name}.

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesGenieSpace.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/app_space#permission AppSpace#permission}.

---

##### `spaceId`<sup>Required</sup> <a name="spaceId" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesGenieSpace.property.spaceId"></a>

```typescript
public readonly spaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/app_space#space_id AppSpace#space_id}.

---

### AppSpaceResourcesJob <a name="AppSpaceResourcesJob" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesJob"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesJob.Initializer"></a>

```typescript
import { appSpace } from '@cdktn/provider-databricks'

const appSpaceResourcesJob: appSpace.AppSpaceResourcesJob = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesJob.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/app_space#id AppSpace#id}. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesJob.property.permission">permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/app_space#permission AppSpace#permission}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesJob.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/app_space#id AppSpace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesJob.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/app_space#permission AppSpace#permission}.

---

### AppSpaceResourcesPostgres <a name="AppSpaceResourcesPostgres" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesPostgres"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesPostgres.Initializer"></a>

```typescript
import { appSpace } from '@cdktn/provider-databricks'

const appSpaceResourcesPostgres: appSpace.AppSpaceResourcesPostgres = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesPostgres.property.branch">branch</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/app_space#branch AppSpace#branch}. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesPostgres.property.database">database</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/app_space#database AppSpace#database}. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesPostgres.property.permission">permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/app_space#permission AppSpace#permission}. |

---

##### `branch`<sup>Optional</sup> <a name="branch" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesPostgres.property.branch"></a>

```typescript
public readonly branch: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/app_space#branch AppSpace#branch}.

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesPostgres.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/app_space#database AppSpace#database}.

---

##### `permission`<sup>Optional</sup> <a name="permission" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesPostgres.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/app_space#permission AppSpace#permission}.

---

### AppSpaceResourcesSecret <a name="AppSpaceResourcesSecret" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesSecret"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesSecret.Initializer"></a>

```typescript
import { appSpace } from '@cdktn/provider-databricks'

const appSpaceResourcesSecret: appSpace.AppSpaceResourcesSecret = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesSecret.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/app_space#key AppSpace#key}. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesSecret.property.permission">permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/app_space#permission AppSpace#permission}. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesSecret.property.scope">scope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/app_space#scope AppSpace#scope}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesSecret.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/app_space#key AppSpace#key}.

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesSecret.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/app_space#permission AppSpace#permission}.

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesSecret.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/app_space#scope AppSpace#scope}.

---

### AppSpaceResourcesServingEndpoint <a name="AppSpaceResourcesServingEndpoint" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesServingEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesServingEndpoint.Initializer"></a>

```typescript
import { appSpace } from '@cdktn/provider-databricks'

const appSpaceResourcesServingEndpoint: appSpace.AppSpaceResourcesServingEndpoint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesServingEndpoint.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/app_space#name AppSpace#name}. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesServingEndpoint.property.permission">permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/app_space#permission AppSpace#permission}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesServingEndpoint.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/app_space#name AppSpace#name}.

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesServingEndpoint.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/app_space#permission AppSpace#permission}.

---

### AppSpaceResourcesSqlWarehouse <a name="AppSpaceResourcesSqlWarehouse" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesSqlWarehouse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesSqlWarehouse.Initializer"></a>

```typescript
import { appSpace } from '@cdktn/provider-databricks'

const appSpaceResourcesSqlWarehouse: appSpace.AppSpaceResourcesSqlWarehouse = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesSqlWarehouse.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/app_space#id AppSpace#id}. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesSqlWarehouse.property.permission">permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/app_space#permission AppSpace#permission}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesSqlWarehouse.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/app_space#id AppSpace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesSqlWarehouse.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/app_space#permission AppSpace#permission}.

---

### AppSpaceResourcesUcSecurable <a name="AppSpaceResourcesUcSecurable" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesUcSecurable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesUcSecurable.Initializer"></a>

```typescript
import { appSpace } from '@cdktn/provider-databricks'

const appSpaceResourcesUcSecurable: appSpace.AppSpaceResourcesUcSecurable = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesUcSecurable.property.permission">permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/app_space#permission AppSpace#permission}. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesUcSecurable.property.securableFullName">securableFullName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/app_space#securable_full_name AppSpace#securable_full_name}. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesUcSecurable.property.securableType">securableType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/app_space#securable_type AppSpace#securable_type}. |

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesUcSecurable.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/app_space#permission AppSpace#permission}.

---

##### `securableFullName`<sup>Required</sup> <a name="securableFullName" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesUcSecurable.property.securableFullName"></a>

```typescript
public readonly securableFullName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/app_space#securable_full_name AppSpace#securable_full_name}.

---

##### `securableType`<sup>Required</sup> <a name="securableType" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesUcSecurable.property.securableType"></a>

```typescript
public readonly securableType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/app_space#securable_type AppSpace#securable_type}.

---

### AppSpaceStatus <a name="AppSpaceStatus" id="@cdktn/provider-databricks.appSpace.AppSpaceStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.appSpace.AppSpaceStatus.Initializer"></a>

```typescript
import { appSpace } from '@cdktn/provider-databricks'

const appSpaceStatus: appSpace.AppSpaceStatus = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### AppSpaceProviderConfigOutputReference <a name="AppSpaceProviderConfigOutputReference" id="@cdktn/provider-databricks.appSpace.AppSpaceProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.appSpace.AppSpaceProviderConfigOutputReference.Initializer"></a>

```typescript
import { appSpace } from '@cdktn/provider-databricks'

new appSpace.AppSpaceProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.appSpace.AppSpaceProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.appSpace.AppSpaceProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.appSpace.AppSpaceProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.appSpace.AppSpaceProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.appSpace.AppSpaceProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.appSpace.AppSpaceProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.appSpace.AppSpaceProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.appSpace.AppSpaceProviderConfig">AppSpaceProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.appSpace.AppSpaceProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.appSpace.AppSpaceProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.appSpace.AppSpaceProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.appSpace.AppSpaceProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.appSpace.AppSpaceProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppSpaceProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.appSpace.AppSpaceProviderConfig">AppSpaceProviderConfig</a>

---


### AppSpaceResourcesAppOutputReference <a name="AppSpaceResourcesAppOutputReference" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesAppOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesAppOutputReference.Initializer"></a>

```typescript
import { appSpace } from '@cdktn/provider-databricks'

new appSpace.AppSpaceResourcesAppOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesAppOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesAppOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesAppOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesAppOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesAppOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesAppOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesAppOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesAppOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesAppOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesAppOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesAppOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesAppOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesAppOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesAppOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesAppOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesAppOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesAppOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesAppOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesAppOutputReference.resetPermission">resetPermission</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesAppOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesAppOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesAppOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesAppOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesAppOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesAppOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesAppOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesAppOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesAppOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesAppOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesAppOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesAppOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesAppOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesAppOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesAppOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesAppOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesAppOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesAppOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesAppOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesAppOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesAppOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesAppOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesAppOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesAppOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesAppOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPermission` <a name="resetPermission" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesAppOutputReference.resetPermission"></a>

```typescript
public resetPermission(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesAppOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesAppOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesAppOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesAppOutputReference.property.permissionInput">permissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesAppOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesAppOutputReference.property.permission">permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesAppOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesApp">AppSpaceResourcesApp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesAppOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesAppOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesAppOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesAppOutputReference.property.permissionInput"></a>

```typescript
public readonly permissionInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesAppOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesAppOutputReference.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesAppOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppSpaceResourcesApp;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesApp">AppSpaceResourcesApp</a>

---


### AppSpaceResourcesDatabaseOutputReference <a name="AppSpaceResourcesDatabaseOutputReference" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesDatabaseOutputReference.Initializer"></a>

```typescript
import { appSpace } from '@cdktn/provider-databricks'

new appSpace.AppSpaceResourcesDatabaseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesDatabaseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesDatabaseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesDatabaseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesDatabaseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesDatabaseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesDatabaseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesDatabaseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesDatabaseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesDatabaseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesDatabaseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesDatabaseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesDatabaseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesDatabaseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesDatabaseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesDatabaseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesDatabaseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesDatabaseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesDatabaseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesDatabaseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesDatabaseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesDatabaseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesDatabaseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesDatabaseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesDatabaseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesDatabaseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesDatabaseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesDatabaseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesDatabaseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesDatabaseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesDatabaseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesDatabaseOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesDatabaseOutputReference.property.instanceNameInput">instanceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesDatabaseOutputReference.property.permissionInput">permissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesDatabaseOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesDatabaseOutputReference.property.instanceName">instanceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesDatabaseOutputReference.property.permission">permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesDatabaseOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesDatabase">AppSpaceResourcesDatabase</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesDatabaseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesDatabaseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesDatabaseOutputReference.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `instanceNameInput`<sup>Optional</sup> <a name="instanceNameInput" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesDatabaseOutputReference.property.instanceNameInput"></a>

```typescript
public readonly instanceNameInput: string;
```

- *Type:* string

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesDatabaseOutputReference.property.permissionInput"></a>

```typescript
public readonly permissionInput: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesDatabaseOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `instanceName`<sup>Required</sup> <a name="instanceName" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesDatabaseOutputReference.property.instanceName"></a>

```typescript
public readonly instanceName: string;
```

- *Type:* string

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesDatabaseOutputReference.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesDatabaseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppSpaceResourcesDatabase;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesDatabase">AppSpaceResourcesDatabase</a>

---


### AppSpaceResourcesExperimentOutputReference <a name="AppSpaceResourcesExperimentOutputReference" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesExperimentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesExperimentOutputReference.Initializer"></a>

```typescript
import { appSpace } from '@cdktn/provider-databricks'

new appSpace.AppSpaceResourcesExperimentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesExperimentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesExperimentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesExperimentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesExperimentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesExperimentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesExperimentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesExperimentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesExperimentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesExperimentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesExperimentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesExperimentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesExperimentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesExperimentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesExperimentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesExperimentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesExperimentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesExperimentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesExperimentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesExperimentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesExperimentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesExperimentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesExperimentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesExperimentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesExperimentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesExperimentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesExperimentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesExperimentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesExperimentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesExperimentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesExperimentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesExperimentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesExperimentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesExperimentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesExperimentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesExperimentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesExperimentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesExperimentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesExperimentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesExperimentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesExperimentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesExperimentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesExperimentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesExperimentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesExperimentOutputReference.property.experimentIdInput">experimentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesExperimentOutputReference.property.permissionInput">permissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesExperimentOutputReference.property.experimentId">experimentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesExperimentOutputReference.property.permission">permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesExperimentOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesExperiment">AppSpaceResourcesExperiment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesExperimentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesExperimentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `experimentIdInput`<sup>Optional</sup> <a name="experimentIdInput" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesExperimentOutputReference.property.experimentIdInput"></a>

```typescript
public readonly experimentIdInput: string;
```

- *Type:* string

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesExperimentOutputReference.property.permissionInput"></a>

```typescript
public readonly permissionInput: string;
```

- *Type:* string

---

##### `experimentId`<sup>Required</sup> <a name="experimentId" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesExperimentOutputReference.property.experimentId"></a>

```typescript
public readonly experimentId: string;
```

- *Type:* string

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesExperimentOutputReference.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesExperimentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppSpaceResourcesExperiment;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesExperiment">AppSpaceResourcesExperiment</a>

---


### AppSpaceResourcesGenieSpaceOutputReference <a name="AppSpaceResourcesGenieSpaceOutputReference" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesGenieSpaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesGenieSpaceOutputReference.Initializer"></a>

```typescript
import { appSpace } from '@cdktn/provider-databricks'

new appSpace.AppSpaceResourcesGenieSpaceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesGenieSpaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesGenieSpaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesGenieSpaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesGenieSpaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesGenieSpaceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesGenieSpaceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesGenieSpaceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesGenieSpaceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesGenieSpaceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesGenieSpaceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesGenieSpaceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesGenieSpaceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesGenieSpaceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesGenieSpaceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesGenieSpaceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesGenieSpaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesGenieSpaceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesGenieSpaceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesGenieSpaceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesGenieSpaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesGenieSpaceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesGenieSpaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesGenieSpaceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesGenieSpaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesGenieSpaceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesGenieSpaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesGenieSpaceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesGenieSpaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesGenieSpaceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesGenieSpaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesGenieSpaceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesGenieSpaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesGenieSpaceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesGenieSpaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesGenieSpaceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesGenieSpaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesGenieSpaceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesGenieSpaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesGenieSpaceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesGenieSpaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesGenieSpaceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesGenieSpaceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesGenieSpaceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesGenieSpaceOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesGenieSpaceOutputReference.property.permissionInput">permissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesGenieSpaceOutputReference.property.spaceIdInput">spaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesGenieSpaceOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesGenieSpaceOutputReference.property.permission">permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesGenieSpaceOutputReference.property.spaceId">spaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesGenieSpaceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesGenieSpace">AppSpaceResourcesGenieSpace</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesGenieSpaceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesGenieSpaceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesGenieSpaceOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesGenieSpaceOutputReference.property.permissionInput"></a>

```typescript
public readonly permissionInput: string;
```

- *Type:* string

---

##### `spaceIdInput`<sup>Optional</sup> <a name="spaceIdInput" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesGenieSpaceOutputReference.property.spaceIdInput"></a>

```typescript
public readonly spaceIdInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesGenieSpaceOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesGenieSpaceOutputReference.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

---

##### `spaceId`<sup>Required</sup> <a name="spaceId" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesGenieSpaceOutputReference.property.spaceId"></a>

```typescript
public readonly spaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesGenieSpaceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppSpaceResourcesGenieSpace;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesGenieSpace">AppSpaceResourcesGenieSpace</a>

---


### AppSpaceResourcesJobOutputReference <a name="AppSpaceResourcesJobOutputReference" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesJobOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesJobOutputReference.Initializer"></a>

```typescript
import { appSpace } from '@cdktn/provider-databricks'

new appSpace.AppSpaceResourcesJobOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesJobOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesJobOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesJobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesJobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesJobOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesJobOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesJobOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesJobOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesJobOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesJobOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesJobOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesJobOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesJobOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesJobOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesJobOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesJobOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesJobOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesJobOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesJobOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesJobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesJobOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesJobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesJobOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesJobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesJobOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesJobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesJobOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesJobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesJobOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesJobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesJobOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesJobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesJobOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesJobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesJobOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesJobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesJobOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesJobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesJobOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesJobOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesJobOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesJobOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesJobOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesJobOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesJobOutputReference.property.permissionInput">permissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesJobOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesJobOutputReference.property.permission">permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesJobOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesJob">AppSpaceResourcesJob</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesJobOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesJobOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesJobOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesJobOutputReference.property.permissionInput"></a>

```typescript
public readonly permissionInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesJobOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesJobOutputReference.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesJobOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppSpaceResourcesJob;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesJob">AppSpaceResourcesJob</a>

---


### AppSpaceResourcesList <a name="AppSpaceResourcesList" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesList.Initializer"></a>

```typescript
import { appSpace } from '@cdktn/provider-databricks'

new appSpace.AppSpaceResourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesList.get"></a>

```typescript
public get(index: number): AppSpaceResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.appSpace.AppSpaceResources">AppSpaceResources</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppSpaceResources[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.appSpace.AppSpaceResources">AppSpaceResources</a>[]

---


### AppSpaceResourcesOutputReference <a name="AppSpaceResourcesOutputReference" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.Initializer"></a>

```typescript
import { appSpace } from '@cdktn/provider-databricks'

new appSpace.AppSpaceResourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.putApp">putApp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.putDatabase">putDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.putExperiment">putExperiment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.putGenieSpace">putGenieSpace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.putJob">putJob</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.putPostgres">putPostgres</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.putSecret">putSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.putServingEndpoint">putServingEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.putSqlWarehouse">putSqlWarehouse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.putUcSecurable">putUcSecurable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.resetApp">resetApp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.resetDatabase">resetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.resetExperiment">resetExperiment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.resetGenieSpace">resetGenieSpace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.resetJob">resetJob</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.resetPostgres">resetPostgres</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.resetSecret">resetSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.resetServingEndpoint">resetServingEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.resetSqlWarehouse">resetSqlWarehouse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.resetUcSecurable">resetUcSecurable</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApp` <a name="putApp" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.putApp"></a>

```typescript
public putApp(value: AppSpaceResourcesApp): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.putApp.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesApp">AppSpaceResourcesApp</a>

---

##### `putDatabase` <a name="putDatabase" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.putDatabase"></a>

```typescript
public putDatabase(value: AppSpaceResourcesDatabase): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.putDatabase.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesDatabase">AppSpaceResourcesDatabase</a>

---

##### `putExperiment` <a name="putExperiment" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.putExperiment"></a>

```typescript
public putExperiment(value: AppSpaceResourcesExperiment): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.putExperiment.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesExperiment">AppSpaceResourcesExperiment</a>

---

##### `putGenieSpace` <a name="putGenieSpace" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.putGenieSpace"></a>

```typescript
public putGenieSpace(value: AppSpaceResourcesGenieSpace): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.putGenieSpace.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesGenieSpace">AppSpaceResourcesGenieSpace</a>

---

##### `putJob` <a name="putJob" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.putJob"></a>

```typescript
public putJob(value: AppSpaceResourcesJob): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.putJob.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesJob">AppSpaceResourcesJob</a>

---

##### `putPostgres` <a name="putPostgres" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.putPostgres"></a>

```typescript
public putPostgres(value: AppSpaceResourcesPostgres): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.putPostgres.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesPostgres">AppSpaceResourcesPostgres</a>

---

##### `putSecret` <a name="putSecret" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.putSecret"></a>

```typescript
public putSecret(value: AppSpaceResourcesSecret): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.putSecret.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesSecret">AppSpaceResourcesSecret</a>

---

##### `putServingEndpoint` <a name="putServingEndpoint" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.putServingEndpoint"></a>

```typescript
public putServingEndpoint(value: AppSpaceResourcesServingEndpoint): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.putServingEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesServingEndpoint">AppSpaceResourcesServingEndpoint</a>

---

##### `putSqlWarehouse` <a name="putSqlWarehouse" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.putSqlWarehouse"></a>

```typescript
public putSqlWarehouse(value: AppSpaceResourcesSqlWarehouse): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.putSqlWarehouse.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesSqlWarehouse">AppSpaceResourcesSqlWarehouse</a>

---

##### `putUcSecurable` <a name="putUcSecurable" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.putUcSecurable"></a>

```typescript
public putUcSecurable(value: AppSpaceResourcesUcSecurable): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.putUcSecurable.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesUcSecurable">AppSpaceResourcesUcSecurable</a>

---

##### `resetApp` <a name="resetApp" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.resetApp"></a>

```typescript
public resetApp(): void
```

##### `resetDatabase` <a name="resetDatabase" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.resetDatabase"></a>

```typescript
public resetDatabase(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetExperiment` <a name="resetExperiment" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.resetExperiment"></a>

```typescript
public resetExperiment(): void
```

##### `resetGenieSpace` <a name="resetGenieSpace" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.resetGenieSpace"></a>

```typescript
public resetGenieSpace(): void
```

##### `resetJob` <a name="resetJob" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.resetJob"></a>

```typescript
public resetJob(): void
```

##### `resetPostgres` <a name="resetPostgres" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.resetPostgres"></a>

```typescript
public resetPostgres(): void
```

##### `resetSecret` <a name="resetSecret" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.resetSecret"></a>

```typescript
public resetSecret(): void
```

##### `resetServingEndpoint` <a name="resetServingEndpoint" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.resetServingEndpoint"></a>

```typescript
public resetServingEndpoint(): void
```

##### `resetSqlWarehouse` <a name="resetSqlWarehouse" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.resetSqlWarehouse"></a>

```typescript
public resetSqlWarehouse(): void
```

##### `resetUcSecurable` <a name="resetUcSecurable" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.resetUcSecurable"></a>

```typescript
public resetUcSecurable(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.property.app">app</a></code> | <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesAppOutputReference">AppSpaceResourcesAppOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.property.database">database</a></code> | <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesDatabaseOutputReference">AppSpaceResourcesDatabaseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.property.experiment">experiment</a></code> | <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesExperimentOutputReference">AppSpaceResourcesExperimentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.property.genieSpace">genieSpace</a></code> | <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesGenieSpaceOutputReference">AppSpaceResourcesGenieSpaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.property.job">job</a></code> | <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesJobOutputReference">AppSpaceResourcesJobOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.property.postgres">postgres</a></code> | <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesPostgresOutputReference">AppSpaceResourcesPostgresOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.property.secret">secret</a></code> | <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesSecretOutputReference">AppSpaceResourcesSecretOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.property.servingEndpoint">servingEndpoint</a></code> | <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesServingEndpointOutputReference">AppSpaceResourcesServingEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.property.sqlWarehouse">sqlWarehouse</a></code> | <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesSqlWarehouseOutputReference">AppSpaceResourcesSqlWarehouseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.property.ucSecurable">ucSecurable</a></code> | <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesUcSecurableOutputReference">AppSpaceResourcesUcSecurableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.property.appInput">appInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesApp">AppSpaceResourcesApp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.property.databaseInput">databaseInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesDatabase">AppSpaceResourcesDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.property.experimentInput">experimentInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesExperiment">AppSpaceResourcesExperiment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.property.genieSpaceInput">genieSpaceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesGenieSpace">AppSpaceResourcesGenieSpace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.property.jobInput">jobInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesJob">AppSpaceResourcesJob</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.property.postgresInput">postgresInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesPostgres">AppSpaceResourcesPostgres</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.property.secretInput">secretInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesSecret">AppSpaceResourcesSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.property.servingEndpointInput">servingEndpointInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesServingEndpoint">AppSpaceResourcesServingEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.property.sqlWarehouseInput">sqlWarehouseInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesSqlWarehouse">AppSpaceResourcesSqlWarehouse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.property.ucSecurableInput">ucSecurableInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesUcSecurable">AppSpaceResourcesUcSecurable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.appSpace.AppSpaceResources">AppSpaceResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.property.app"></a>

```typescript
public readonly app: AppSpaceResourcesAppOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesAppOutputReference">AppSpaceResourcesAppOutputReference</a>

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.property.database"></a>

```typescript
public readonly database: AppSpaceResourcesDatabaseOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesDatabaseOutputReference">AppSpaceResourcesDatabaseOutputReference</a>

---

##### `experiment`<sup>Required</sup> <a name="experiment" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.property.experiment"></a>

```typescript
public readonly experiment: AppSpaceResourcesExperimentOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesExperimentOutputReference">AppSpaceResourcesExperimentOutputReference</a>

---

##### `genieSpace`<sup>Required</sup> <a name="genieSpace" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.property.genieSpace"></a>

```typescript
public readonly genieSpace: AppSpaceResourcesGenieSpaceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesGenieSpaceOutputReference">AppSpaceResourcesGenieSpaceOutputReference</a>

---

##### `job`<sup>Required</sup> <a name="job" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.property.job"></a>

```typescript
public readonly job: AppSpaceResourcesJobOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesJobOutputReference">AppSpaceResourcesJobOutputReference</a>

---

##### `postgres`<sup>Required</sup> <a name="postgres" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.property.postgres"></a>

```typescript
public readonly postgres: AppSpaceResourcesPostgresOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesPostgresOutputReference">AppSpaceResourcesPostgresOutputReference</a>

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.property.secret"></a>

```typescript
public readonly secret: AppSpaceResourcesSecretOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesSecretOutputReference">AppSpaceResourcesSecretOutputReference</a>

---

##### `servingEndpoint`<sup>Required</sup> <a name="servingEndpoint" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.property.servingEndpoint"></a>

```typescript
public readonly servingEndpoint: AppSpaceResourcesServingEndpointOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesServingEndpointOutputReference">AppSpaceResourcesServingEndpointOutputReference</a>

---

##### `sqlWarehouse`<sup>Required</sup> <a name="sqlWarehouse" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.property.sqlWarehouse"></a>

```typescript
public readonly sqlWarehouse: AppSpaceResourcesSqlWarehouseOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesSqlWarehouseOutputReference">AppSpaceResourcesSqlWarehouseOutputReference</a>

---

##### `ucSecurable`<sup>Required</sup> <a name="ucSecurable" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.property.ucSecurable"></a>

```typescript
public readonly ucSecurable: AppSpaceResourcesUcSecurableOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesUcSecurableOutputReference">AppSpaceResourcesUcSecurableOutputReference</a>

---

##### `appInput`<sup>Optional</sup> <a name="appInput" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.property.appInput"></a>

```typescript
public readonly appInput: IResolvable | AppSpaceResourcesApp;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesApp">AppSpaceResourcesApp</a>

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.property.databaseInput"></a>

```typescript
public readonly databaseInput: IResolvable | AppSpaceResourcesDatabase;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesDatabase">AppSpaceResourcesDatabase</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `experimentInput`<sup>Optional</sup> <a name="experimentInput" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.property.experimentInput"></a>

```typescript
public readonly experimentInput: IResolvable | AppSpaceResourcesExperiment;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesExperiment">AppSpaceResourcesExperiment</a>

---

##### `genieSpaceInput`<sup>Optional</sup> <a name="genieSpaceInput" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.property.genieSpaceInput"></a>

```typescript
public readonly genieSpaceInput: IResolvable | AppSpaceResourcesGenieSpace;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesGenieSpace">AppSpaceResourcesGenieSpace</a>

---

##### `jobInput`<sup>Optional</sup> <a name="jobInput" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.property.jobInput"></a>

```typescript
public readonly jobInput: IResolvable | AppSpaceResourcesJob;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesJob">AppSpaceResourcesJob</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `postgresInput`<sup>Optional</sup> <a name="postgresInput" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.property.postgresInput"></a>

```typescript
public readonly postgresInput: IResolvable | AppSpaceResourcesPostgres;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesPostgres">AppSpaceResourcesPostgres</a>

---

##### `secretInput`<sup>Optional</sup> <a name="secretInput" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.property.secretInput"></a>

```typescript
public readonly secretInput: IResolvable | AppSpaceResourcesSecret;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesSecret">AppSpaceResourcesSecret</a>

---

##### `servingEndpointInput`<sup>Optional</sup> <a name="servingEndpointInput" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.property.servingEndpointInput"></a>

```typescript
public readonly servingEndpointInput: IResolvable | AppSpaceResourcesServingEndpoint;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesServingEndpoint">AppSpaceResourcesServingEndpoint</a>

---

##### `sqlWarehouseInput`<sup>Optional</sup> <a name="sqlWarehouseInput" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.property.sqlWarehouseInput"></a>

```typescript
public readonly sqlWarehouseInput: IResolvable | AppSpaceResourcesSqlWarehouse;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesSqlWarehouse">AppSpaceResourcesSqlWarehouse</a>

---

##### `ucSecurableInput`<sup>Optional</sup> <a name="ucSecurableInput" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.property.ucSecurableInput"></a>

```typescript
public readonly ucSecurableInput: IResolvable | AppSpaceResourcesUcSecurable;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesUcSecurable">AppSpaceResourcesUcSecurable</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppSpaceResources;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.appSpace.AppSpaceResources">AppSpaceResources</a>

---


### AppSpaceResourcesPostgresOutputReference <a name="AppSpaceResourcesPostgresOutputReference" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesPostgresOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesPostgresOutputReference.Initializer"></a>

```typescript
import { appSpace } from '@cdktn/provider-databricks'

new appSpace.AppSpaceResourcesPostgresOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesPostgresOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesPostgresOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesPostgresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesPostgresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesPostgresOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesPostgresOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesPostgresOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesPostgresOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesPostgresOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesPostgresOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesPostgresOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesPostgresOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesPostgresOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesPostgresOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesPostgresOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesPostgresOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesPostgresOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesPostgresOutputReference.resetBranch">resetBranch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesPostgresOutputReference.resetDatabase">resetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesPostgresOutputReference.resetPermission">resetPermission</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesPostgresOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesPostgresOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesPostgresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesPostgresOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesPostgresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesPostgresOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesPostgresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesPostgresOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesPostgresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesPostgresOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesPostgresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesPostgresOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesPostgresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesPostgresOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesPostgresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesPostgresOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesPostgresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesPostgresOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesPostgresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesPostgresOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesPostgresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesPostgresOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesPostgresOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesPostgresOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBranch` <a name="resetBranch" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesPostgresOutputReference.resetBranch"></a>

```typescript
public resetBranch(): void
```

##### `resetDatabase` <a name="resetDatabase" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesPostgresOutputReference.resetDatabase"></a>

```typescript
public resetDatabase(): void
```

##### `resetPermission` <a name="resetPermission" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesPostgresOutputReference.resetPermission"></a>

```typescript
public resetPermission(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesPostgresOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesPostgresOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesPostgresOutputReference.property.branchInput">branchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesPostgresOutputReference.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesPostgresOutputReference.property.permissionInput">permissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesPostgresOutputReference.property.branch">branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesPostgresOutputReference.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesPostgresOutputReference.property.permission">permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesPostgresOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesPostgres">AppSpaceResourcesPostgres</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesPostgresOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesPostgresOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `branchInput`<sup>Optional</sup> <a name="branchInput" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesPostgresOutputReference.property.branchInput"></a>

```typescript
public readonly branchInput: string;
```

- *Type:* string

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesPostgresOutputReference.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesPostgresOutputReference.property.permissionInput"></a>

```typescript
public readonly permissionInput: string;
```

- *Type:* string

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesPostgresOutputReference.property.branch"></a>

```typescript
public readonly branch: string;
```

- *Type:* string

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesPostgresOutputReference.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesPostgresOutputReference.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesPostgresOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppSpaceResourcesPostgres;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesPostgres">AppSpaceResourcesPostgres</a>

---


### AppSpaceResourcesSecretOutputReference <a name="AppSpaceResourcesSecretOutputReference" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesSecretOutputReference.Initializer"></a>

```typescript
import { appSpace } from '@cdktn/provider-databricks'

new appSpace.AppSpaceResourcesSecretOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesSecretOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesSecretOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesSecretOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesSecretOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesSecretOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesSecretOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesSecretOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesSecretOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesSecretOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesSecretOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesSecretOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesSecretOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesSecretOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesSecretOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesSecretOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesSecretOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesSecretOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesSecretOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesSecretOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesSecretOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesSecretOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesSecretOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesSecretOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesSecretOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesSecretOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesSecretOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesSecretOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesSecretOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesSecretOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesSecretOutputReference.property.permissionInput">permissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesSecretOutputReference.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesSecretOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesSecretOutputReference.property.permission">permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesSecretOutputReference.property.scope">scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesSecretOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesSecret">AppSpaceResourcesSecret</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesSecretOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesSecretOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesSecretOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesSecretOutputReference.property.permissionInput"></a>

```typescript
public readonly permissionInput: string;
```

- *Type:* string

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesSecretOutputReference.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesSecretOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesSecretOutputReference.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesSecretOutputReference.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesSecretOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppSpaceResourcesSecret;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesSecret">AppSpaceResourcesSecret</a>

---


### AppSpaceResourcesServingEndpointOutputReference <a name="AppSpaceResourcesServingEndpointOutputReference" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesServingEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesServingEndpointOutputReference.Initializer"></a>

```typescript
import { appSpace } from '@cdktn/provider-databricks'

new appSpace.AppSpaceResourcesServingEndpointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesServingEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesServingEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesServingEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesServingEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesServingEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesServingEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesServingEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesServingEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesServingEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesServingEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesServingEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesServingEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesServingEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesServingEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesServingEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesServingEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesServingEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesServingEndpointOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesServingEndpointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesServingEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesServingEndpointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesServingEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesServingEndpointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesServingEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesServingEndpointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesServingEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesServingEndpointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesServingEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesServingEndpointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesServingEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesServingEndpointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesServingEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesServingEndpointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesServingEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesServingEndpointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesServingEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesServingEndpointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesServingEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesServingEndpointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesServingEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesServingEndpointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesServingEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesServingEndpointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesServingEndpointOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesServingEndpointOutputReference.property.permissionInput">permissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesServingEndpointOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesServingEndpointOutputReference.property.permission">permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesServingEndpointOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesServingEndpoint">AppSpaceResourcesServingEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesServingEndpointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesServingEndpointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesServingEndpointOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesServingEndpointOutputReference.property.permissionInput"></a>

```typescript
public readonly permissionInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesServingEndpointOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesServingEndpointOutputReference.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesServingEndpointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppSpaceResourcesServingEndpoint;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesServingEndpoint">AppSpaceResourcesServingEndpoint</a>

---


### AppSpaceResourcesSqlWarehouseOutputReference <a name="AppSpaceResourcesSqlWarehouseOutputReference" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesSqlWarehouseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesSqlWarehouseOutputReference.Initializer"></a>

```typescript
import { appSpace } from '@cdktn/provider-databricks'

new appSpace.AppSpaceResourcesSqlWarehouseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesSqlWarehouseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesSqlWarehouseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesSqlWarehouseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesSqlWarehouseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesSqlWarehouseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesSqlWarehouseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesSqlWarehouseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesSqlWarehouseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesSqlWarehouseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesSqlWarehouseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesSqlWarehouseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesSqlWarehouseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesSqlWarehouseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesSqlWarehouseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesSqlWarehouseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesSqlWarehouseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesSqlWarehouseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesSqlWarehouseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesSqlWarehouseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesSqlWarehouseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesSqlWarehouseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesSqlWarehouseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesSqlWarehouseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesSqlWarehouseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesSqlWarehouseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesSqlWarehouseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesSqlWarehouseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesSqlWarehouseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesSqlWarehouseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesSqlWarehouseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesSqlWarehouseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesSqlWarehouseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesSqlWarehouseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesSqlWarehouseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesSqlWarehouseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesSqlWarehouseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesSqlWarehouseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesSqlWarehouseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesSqlWarehouseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesSqlWarehouseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesSqlWarehouseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesSqlWarehouseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesSqlWarehouseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesSqlWarehouseOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesSqlWarehouseOutputReference.property.permissionInput">permissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesSqlWarehouseOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesSqlWarehouseOutputReference.property.permission">permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesSqlWarehouseOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesSqlWarehouse">AppSpaceResourcesSqlWarehouse</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesSqlWarehouseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesSqlWarehouseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesSqlWarehouseOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesSqlWarehouseOutputReference.property.permissionInput"></a>

```typescript
public readonly permissionInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesSqlWarehouseOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesSqlWarehouseOutputReference.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesSqlWarehouseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppSpaceResourcesSqlWarehouse;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesSqlWarehouse">AppSpaceResourcesSqlWarehouse</a>

---


### AppSpaceResourcesUcSecurableOutputReference <a name="AppSpaceResourcesUcSecurableOutputReference" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesUcSecurableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesUcSecurableOutputReference.Initializer"></a>

```typescript
import { appSpace } from '@cdktn/provider-databricks'

new appSpace.AppSpaceResourcesUcSecurableOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesUcSecurableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesUcSecurableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesUcSecurableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesUcSecurableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesUcSecurableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesUcSecurableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesUcSecurableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesUcSecurableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesUcSecurableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesUcSecurableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesUcSecurableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesUcSecurableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesUcSecurableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesUcSecurableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesUcSecurableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesUcSecurableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesUcSecurableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesUcSecurableOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesUcSecurableOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesUcSecurableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesUcSecurableOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesUcSecurableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesUcSecurableOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesUcSecurableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesUcSecurableOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesUcSecurableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesUcSecurableOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesUcSecurableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesUcSecurableOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesUcSecurableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesUcSecurableOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesUcSecurableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesUcSecurableOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesUcSecurableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesUcSecurableOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesUcSecurableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesUcSecurableOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesUcSecurableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesUcSecurableOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesUcSecurableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesUcSecurableOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesUcSecurableOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesUcSecurableOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesUcSecurableOutputReference.property.securableKind">securableKind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesUcSecurableOutputReference.property.permissionInput">permissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesUcSecurableOutputReference.property.securableFullNameInput">securableFullNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesUcSecurableOutputReference.property.securableTypeInput">securableTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesUcSecurableOutputReference.property.permission">permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesUcSecurableOutputReference.property.securableFullName">securableFullName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesUcSecurableOutputReference.property.securableType">securableType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesUcSecurableOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesUcSecurable">AppSpaceResourcesUcSecurable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesUcSecurableOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesUcSecurableOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `securableKind`<sup>Required</sup> <a name="securableKind" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesUcSecurableOutputReference.property.securableKind"></a>

```typescript
public readonly securableKind: string;
```

- *Type:* string

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesUcSecurableOutputReference.property.permissionInput"></a>

```typescript
public readonly permissionInput: string;
```

- *Type:* string

---

##### `securableFullNameInput`<sup>Optional</sup> <a name="securableFullNameInput" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesUcSecurableOutputReference.property.securableFullNameInput"></a>

```typescript
public readonly securableFullNameInput: string;
```

- *Type:* string

---

##### `securableTypeInput`<sup>Optional</sup> <a name="securableTypeInput" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesUcSecurableOutputReference.property.securableTypeInput"></a>

```typescript
public readonly securableTypeInput: string;
```

- *Type:* string

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesUcSecurableOutputReference.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

---

##### `securableFullName`<sup>Required</sup> <a name="securableFullName" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesUcSecurableOutputReference.property.securableFullName"></a>

```typescript
public readonly securableFullName: string;
```

- *Type:* string

---

##### `securableType`<sup>Required</sup> <a name="securableType" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesUcSecurableOutputReference.property.securableType"></a>

```typescript
public readonly securableType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.appSpace.AppSpaceResourcesUcSecurableOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppSpaceResourcesUcSecurable;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.appSpace.AppSpaceResourcesUcSecurable">AppSpaceResourcesUcSecurable</a>

---


### AppSpaceStatusOutputReference <a name="AppSpaceStatusOutputReference" id="@cdktn/provider-databricks.appSpace.AppSpaceStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.appSpace.AppSpaceStatusOutputReference.Initializer"></a>

```typescript
import { appSpace } from '@cdktn/provider-databricks'

new appSpace.AppSpaceStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.appSpace.AppSpaceStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.appSpace.AppSpaceStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.appSpace.AppSpaceStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.appSpace.AppSpaceStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.appSpace.AppSpaceStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.appSpace.AppSpaceStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.appSpace.AppSpaceStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceStatusOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceStatusOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.appSpace.AppSpaceStatus">AppSpaceStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.appSpace.AppSpaceStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.appSpace.AppSpaceStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-databricks.appSpace.AppSpaceStatusOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-databricks.appSpace.AppSpaceStatusOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.appSpace.AppSpaceStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppSpaceStatus;
```

- *Type:* <a href="#@cdktn/provider-databricks.appSpace.AppSpaceStatus">AppSpaceStatus</a>

---



