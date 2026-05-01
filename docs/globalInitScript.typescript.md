# `globalInitScript` Submodule <a name="`globalInitScript` Submodule" id="@cdktn/provider-databricks.globalInitScript"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlobalInitScript <a name="GlobalInitScript" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/global_init_script databricks_global_init_script}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.Initializer"></a>

```typescript
import { globalInitScript } from '@cdktn/provider-databricks'

new globalInitScript.GlobalInitScript(scope: Construct, id: string, config: GlobalInitScriptConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScript.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScript.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScript.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScriptConfig">GlobalInitScriptConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScriptConfig">GlobalInitScriptConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScript.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScript.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScript.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScript.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScript.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScript.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScript.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScript.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScript.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScript.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScript.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScript.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScript.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScript.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScript.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScript.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScript.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScript.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScript.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScript.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScript.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScript.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScript.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScript.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScript.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScript.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScript.resetContentBase64">resetContentBase64</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScript.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScript.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScript.resetMd5">resetMd5</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScript.resetPosition">resetPosition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScript.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScript.resetSource">resetSource</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.putProviderConfig"></a>

```typescript
public putProviderConfig(value: GlobalInitScriptProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScriptProviderConfig">GlobalInitScriptProviderConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.putTimeouts"></a>

```typescript
public putTimeouts(value: GlobalInitScriptTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScriptTimeouts">GlobalInitScriptTimeouts</a>

---

##### `resetContentBase64` <a name="resetContentBase64" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.resetContentBase64"></a>

```typescript
public resetContentBase64(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMd5` <a name="resetMd5" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.resetMd5"></a>

```typescript
public resetMd5(): void
```

##### `resetPosition` <a name="resetPosition" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.resetPosition"></a>

```typescript
public resetPosition(): void
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

##### `resetSource` <a name="resetSource" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.resetSource"></a>

```typescript
public resetSource(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScript.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScript.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScript.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScript.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GlobalInitScript resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.isConstruct"></a>

```typescript
import { globalInitScript } from '@cdktn/provider-databricks'

globalInitScript.GlobalInitScript.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.isTerraformElement"></a>

```typescript
import { globalInitScript } from '@cdktn/provider-databricks'

globalInitScript.GlobalInitScript.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.isTerraformResource"></a>

```typescript
import { globalInitScript } from '@cdktn/provider-databricks'

globalInitScript.GlobalInitScript.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.generateConfigForImport"></a>

```typescript
import { globalInitScript } from '@cdktn/provider-databricks'

globalInitScript.GlobalInitScript.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GlobalInitScript resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GlobalInitScript to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GlobalInitScript that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/global_init_script#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GlobalInitScript to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScript.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScript.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScript.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScript.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScript.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScript.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScript.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScript.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScript.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScript.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScript.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScript.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScript.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScript.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScript.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScriptProviderConfigOutputReference">GlobalInitScriptProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScript.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference">GlobalInitScriptTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScript.property.contentBase64Input">contentBase64Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScript.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScript.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScript.property.md5Input">md5Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScript.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScript.property.positionInput">positionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScript.property.providerConfigInput">providerConfigInput</a></code> | <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScriptProviderConfig">GlobalInitScriptProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScript.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScript.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScriptTimeouts">GlobalInitScriptTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScript.property.contentBase64">contentBase64</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScript.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScript.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScript.property.md5">md5</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScript.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScript.property.position">position</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScript.property.source">source</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.property.providerConfig"></a>

```typescript
public readonly providerConfig: GlobalInitScriptProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScriptProviderConfigOutputReference">GlobalInitScriptProviderConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.property.timeouts"></a>

```typescript
public readonly timeouts: GlobalInitScriptTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference">GlobalInitScriptTimeoutsOutputReference</a>

---

##### `contentBase64Input`<sup>Optional</sup> <a name="contentBase64Input" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.property.contentBase64Input"></a>

```typescript
public readonly contentBase64Input: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `md5Input`<sup>Optional</sup> <a name="md5Input" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.property.md5Input"></a>

```typescript
public readonly md5Input: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `positionInput`<sup>Optional</sup> <a name="positionInput" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.property.positionInput"></a>

```typescript
public readonly positionInput: number;
```

- *Type:* number

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: GlobalInitScriptProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScriptProviderConfig">GlobalInitScriptProviderConfig</a>

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GlobalInitScriptTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScriptTimeouts">GlobalInitScriptTimeouts</a>

---

##### `contentBase64`<sup>Required</sup> <a name="contentBase64" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.property.contentBase64"></a>

```typescript
public readonly contentBase64: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `md5`<sup>Required</sup> <a name="md5" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.property.md5"></a>

```typescript
public readonly md5: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.property.position"></a>

```typescript
public readonly position: number;
```

- *Type:* number

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScript.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScript.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GlobalInitScriptConfig <a name="GlobalInitScriptConfig" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScriptConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScriptConfig.Initializer"></a>

```typescript
import { globalInitScript } from '@cdktn/provider-databricks'

const globalInitScriptConfig: globalInitScript.GlobalInitScriptConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/global_init_script#name GlobalInitScript#name}. |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.contentBase64">contentBase64</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/global_init_script#content_base64 GlobalInitScript#content_base64}. |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/global_init_script#enabled GlobalInitScript#enabled}. |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/global_init_script#id GlobalInitScript#id}. |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.md5">md5</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/global_init_script#md5 GlobalInitScript#md5}. |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.position">position</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/global_init_script#position GlobalInitScript#position}. |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScriptProviderConfig">GlobalInitScriptProviderConfig</a></code> | provider_config block. |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.source">source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/global_init_script#source GlobalInitScript#source}. |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScriptTimeouts">GlobalInitScriptTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/global_init_script#name GlobalInitScript#name}.

---

##### `contentBase64`<sup>Optional</sup> <a name="contentBase64" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.contentBase64"></a>

```typescript
public readonly contentBase64: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/global_init_script#content_base64 GlobalInitScript#content_base64}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/global_init_script#enabled GlobalInitScript#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/global_init_script#id GlobalInitScript#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `md5`<sup>Optional</sup> <a name="md5" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.md5"></a>

```typescript
public readonly md5: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/global_init_script#md5 GlobalInitScript#md5}.

---

##### `position`<sup>Optional</sup> <a name="position" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.position"></a>

```typescript
public readonly position: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/global_init_script#position GlobalInitScript#position}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: GlobalInitScriptProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScriptProviderConfig">GlobalInitScriptProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/global_init_script#provider_config GlobalInitScript#provider_config}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/global_init_script#source GlobalInitScript#source}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GlobalInitScriptTimeouts;
```

- *Type:* <a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScriptTimeouts">GlobalInitScriptTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/global_init_script#timeouts GlobalInitScript#timeouts}

---

### GlobalInitScriptProviderConfig <a name="GlobalInitScriptProviderConfig" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScriptProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScriptProviderConfig.Initializer"></a>

```typescript
import { globalInitScript } from '@cdktn/provider-databricks'

const globalInitScriptProviderConfig: globalInitScript.GlobalInitScriptProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScriptProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/global_init_script#workspace_id GlobalInitScript#workspace_id}. |

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScriptProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/global_init_script#workspace_id GlobalInitScript#workspace_id}.

---

### GlobalInitScriptTimeouts <a name="GlobalInitScriptTimeouts" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScriptTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScriptTimeouts.Initializer"></a>

```typescript
import { globalInitScript } from '@cdktn/provider-databricks'

const globalInitScriptTimeouts: globalInitScript.GlobalInitScriptTimeouts = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### GlobalInitScriptProviderConfigOutputReference <a name="GlobalInitScriptProviderConfigOutputReference" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScriptProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScriptProviderConfigOutputReference.Initializer"></a>

```typescript
import { globalInitScript } from '@cdktn/provider-databricks'

new globalInitScript.GlobalInitScriptProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScriptProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScriptProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScriptProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScriptProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScriptProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScriptProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScriptProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScriptProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScriptProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScriptProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScriptProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScriptProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScriptProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScriptProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScriptProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScriptProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScriptProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScriptProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScriptProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScriptProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScriptProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScriptProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScriptProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScriptProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScriptProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScriptProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScriptProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScriptProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScriptProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScriptProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScriptProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScriptProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScriptProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScriptProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScriptProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScriptProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScriptProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScriptProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScriptProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScriptProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScriptProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScriptProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScriptProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScriptProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScriptProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScriptProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScriptProviderConfig">GlobalInitScriptProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScriptProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScriptProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScriptProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScriptProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScriptProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GlobalInitScriptProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScriptProviderConfig">GlobalInitScriptProviderConfig</a>

---


### GlobalInitScriptTimeoutsOutputReference <a name="GlobalInitScriptTimeoutsOutputReference" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.Initializer"></a>

```typescript
import { globalInitScript } from '@cdktn/provider-databricks'

new globalInitScript.GlobalInitScriptTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScriptTimeouts">GlobalInitScriptTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlobalInitScriptTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.globalInitScript.GlobalInitScriptTimeouts">GlobalInitScriptTimeouts</a>

---



