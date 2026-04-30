# `defaultNamespaceSetting` Submodule <a name="`defaultNamespaceSetting` Submodule" id="@cdktn/provider-databricks.defaultNamespaceSetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DefaultNamespaceSetting <a name="DefaultNamespaceSetting" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/default_namespace_setting databricks_default_namespace_setting}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.Initializer"></a>

```typescript
import { defaultNamespaceSetting } from '@cdktn/provider-databricks'

new defaultNamespaceSetting.DefaultNamespaceSetting(scope: Construct, id: string, config: DefaultNamespaceSettingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingConfig">DefaultNamespaceSettingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingConfig">DefaultNamespaceSettingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.putNamespace">putNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.resetEtag">resetEtag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.resetSettingName">resetSettingName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putNamespace` <a name="putNamespace" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.putNamespace"></a>

```typescript
public putNamespace(value: DefaultNamespaceSettingNamespace): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.putNamespace.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespace">DefaultNamespaceSettingNamespace</a>

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.putProviderConfig"></a>

```typescript
public putProviderConfig(value: DefaultNamespaceSettingProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingProviderConfig">DefaultNamespaceSettingProviderConfig</a>

---

##### `resetEtag` <a name="resetEtag" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.resetEtag"></a>

```typescript
public resetEtag(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

##### `resetSettingName` <a name="resetSettingName" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.resetSettingName"></a>

```typescript
public resetSettingName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DefaultNamespaceSetting resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.isConstruct"></a>

```typescript
import { defaultNamespaceSetting } from '@cdktn/provider-databricks'

defaultNamespaceSetting.DefaultNamespaceSetting.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.isTerraformElement"></a>

```typescript
import { defaultNamespaceSetting } from '@cdktn/provider-databricks'

defaultNamespaceSetting.DefaultNamespaceSetting.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.isTerraformResource"></a>

```typescript
import { defaultNamespaceSetting } from '@cdktn/provider-databricks'

defaultNamespaceSetting.DefaultNamespaceSetting.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.generateConfigForImport"></a>

```typescript
import { defaultNamespaceSetting } from '@cdktn/provider-databricks'

defaultNamespaceSetting.DefaultNamespaceSetting.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DefaultNamespaceSetting resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DefaultNamespaceSetting to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DefaultNamespaceSetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/default_namespace_setting#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DefaultNamespaceSetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.namespace">namespace</a></code> | <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference">DefaultNamespaceSettingNamespaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingProviderConfigOutputReference">DefaultNamespaceSettingProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.etagInput">etagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.namespaceInput">namespaceInput</a></code> | <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespace">DefaultNamespaceSettingNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.providerConfigInput">providerConfigInput</a></code> | <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingProviderConfig">DefaultNamespaceSettingProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.settingNameInput">settingNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.settingName">settingName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.namespace"></a>

```typescript
public readonly namespace: DefaultNamespaceSettingNamespaceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference">DefaultNamespaceSettingNamespaceOutputReference</a>

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.providerConfig"></a>

```typescript
public readonly providerConfig: DefaultNamespaceSettingProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingProviderConfigOutputReference">DefaultNamespaceSettingProviderConfigOutputReference</a>

---

##### `etagInput`<sup>Optional</sup> <a name="etagInput" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.etagInput"></a>

```typescript
public readonly etagInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: DefaultNamespaceSettingNamespace;
```

- *Type:* <a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespace">DefaultNamespaceSettingNamespace</a>

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: DefaultNamespaceSettingProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingProviderConfig">DefaultNamespaceSettingProviderConfig</a>

---

##### `settingNameInput`<sup>Optional</sup> <a name="settingNameInput" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.settingNameInput"></a>

```typescript
public readonly settingNameInput: string;
```

- *Type:* string

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `settingName`<sup>Required</sup> <a name="settingName" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.settingName"></a>

```typescript
public readonly settingName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DefaultNamespaceSettingConfig <a name="DefaultNamespaceSettingConfig" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingConfig.Initializer"></a>

```typescript
import { defaultNamespaceSetting } from '@cdktn/provider-databricks'

const defaultNamespaceSettingConfig: defaultNamespaceSetting.DefaultNamespaceSettingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingConfig.property.namespace">namespace</a></code> | <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespace">DefaultNamespaceSettingNamespace</a></code> | namespace block. |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingConfig.property.etag">etag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/default_namespace_setting#etag DefaultNamespaceSetting#etag}. |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/default_namespace_setting#id DefaultNamespaceSetting#id}. |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingProviderConfig">DefaultNamespaceSettingProviderConfig</a></code> | provider_config block. |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingConfig.property.settingName">settingName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/default_namespace_setting#setting_name DefaultNamespaceSetting#setting_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingConfig.property.namespace"></a>

```typescript
public readonly namespace: DefaultNamespaceSettingNamespace;
```

- *Type:* <a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespace">DefaultNamespaceSettingNamespace</a>

namespace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/default_namespace_setting#namespace DefaultNamespaceSetting#namespace}

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingConfig.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/default_namespace_setting#etag DefaultNamespaceSetting#etag}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/default_namespace_setting#id DefaultNamespaceSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: DefaultNamespaceSettingProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingProviderConfig">DefaultNamespaceSettingProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/default_namespace_setting#provider_config DefaultNamespaceSetting#provider_config}

---

##### `settingName`<sup>Optional</sup> <a name="settingName" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingConfig.property.settingName"></a>

```typescript
public readonly settingName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/default_namespace_setting#setting_name DefaultNamespaceSetting#setting_name}.

---

### DefaultNamespaceSettingNamespace <a name="DefaultNamespaceSettingNamespace" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespace"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespace.Initializer"></a>

```typescript
import { defaultNamespaceSetting } from '@cdktn/provider-databricks'

const defaultNamespaceSettingNamespace: defaultNamespaceSetting.DefaultNamespaceSettingNamespace = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespace.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/default_namespace_setting#value DefaultNamespaceSetting#value}. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespace.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/default_namespace_setting#value DefaultNamespaceSetting#value}.

---

### DefaultNamespaceSettingProviderConfig <a name="DefaultNamespaceSettingProviderConfig" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingProviderConfig.Initializer"></a>

```typescript
import { defaultNamespaceSetting } from '@cdktn/provider-databricks'

const defaultNamespaceSettingProviderConfig: defaultNamespaceSetting.DefaultNamespaceSettingProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/default_namespace_setting#workspace_id DefaultNamespaceSetting#workspace_id}. |

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/resources/default_namespace_setting#workspace_id DefaultNamespaceSetting#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DefaultNamespaceSettingNamespaceOutputReference <a name="DefaultNamespaceSettingNamespaceOutputReference" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.Initializer"></a>

```typescript
import { defaultNamespaceSetting } from '@cdktn/provider-databricks'

new defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespace">DefaultNamespaceSettingNamespace</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DefaultNamespaceSettingNamespace;
```

- *Type:* <a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespace">DefaultNamespaceSettingNamespace</a>

---


### DefaultNamespaceSettingProviderConfigOutputReference <a name="DefaultNamespaceSettingProviderConfigOutputReference" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingProviderConfigOutputReference.Initializer"></a>

```typescript
import { defaultNamespaceSetting } from '@cdktn/provider-databricks'

new defaultNamespaceSetting.DefaultNamespaceSettingProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingProviderConfig">DefaultNamespaceSettingProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DefaultNamespaceSettingProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingProviderConfig">DefaultNamespaceSettingProviderConfig</a>

---



