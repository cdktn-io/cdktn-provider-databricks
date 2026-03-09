# `dataDatabricksAccountSettingUserPreferenceV2` Submodule <a name="`dataDatabricksAccountSettingUserPreferenceV2` Submodule" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAccountSettingUserPreferenceV2 <a name="DataDatabricksAccountSettingUserPreferenceV2" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/account_setting_user_preference_v2 databricks_account_setting_user_preference_v2}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.Initializer"></a>

```typescript
import { dataDatabricksAccountSettingUserPreferenceV2 } from '@cdktn/provider-databricks'

new dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2(scope: Construct, id: string, config: DataDatabricksAccountSettingUserPreferenceV2Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2Config">DataDatabricksAccountSettingUserPreferenceV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2Config">DataDatabricksAccountSettingUserPreferenceV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksAccountSettingUserPreferenceV2 resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.isConstruct"></a>

```typescript
import { dataDatabricksAccountSettingUserPreferenceV2 } from '@cdktn/provider-databricks'

dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.isTerraformElement"></a>

```typescript
import { dataDatabricksAccountSettingUserPreferenceV2 } from '@cdktn/provider-databricks'

dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.isTerraformDataSource"></a>

```typescript
import { dataDatabricksAccountSettingUserPreferenceV2 } from '@cdktn/provider-databricks'

dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.generateConfigForImport"></a>

```typescript
import { dataDatabricksAccountSettingUserPreferenceV2 } from '@cdktn/provider-databricks'

dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataDatabricksAccountSettingUserPreferenceV2 resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksAccountSettingUserPreferenceV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksAccountSettingUserPreferenceV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/account_setting_user_preference_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksAccountSettingUserPreferenceV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.booleanVal">booleanVal</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference">DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.effectiveBooleanVal">effectiveBooleanVal</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference">DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.effectiveStringVal">effectiveStringVal</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference">DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.stringVal">stringVal</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference">DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.userIdInput">userIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.userId">userId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `booleanVal`<sup>Required</sup> <a name="booleanVal" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.booleanVal"></a>

```typescript
public readonly booleanVal: DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference">DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference</a>

---

##### `effectiveBooleanVal`<sup>Required</sup> <a name="effectiveBooleanVal" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.effectiveBooleanVal"></a>

```typescript
public readonly effectiveBooleanVal: DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference">DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference</a>

---

##### `effectiveStringVal`<sup>Required</sup> <a name="effectiveStringVal" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.effectiveStringVal"></a>

```typescript
public readonly effectiveStringVal: DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference">DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference</a>

---

##### `stringVal`<sup>Required</sup> <a name="stringVal" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.stringVal"></a>

```typescript
public readonly stringVal: DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference">DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `userIdInput`<sup>Optional</sup> <a name="userIdInput" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.userIdInput"></a>

```typescript
public readonly userIdInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAccountSettingUserPreferenceV2BooleanVal <a name="DataDatabricksAccountSettingUserPreferenceV2BooleanVal" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanVal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanVal.Initializer"></a>

```typescript
import { dataDatabricksAccountSettingUserPreferenceV2 } from '@cdktn/provider-databricks'

const dataDatabricksAccountSettingUserPreferenceV2BooleanVal: dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanVal = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanVal.property.value">value</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/account_setting_user_preference_v2#value DataDatabricksAccountSettingUserPreferenceV2#value}. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanVal.property.value"></a>

```typescript
public readonly value: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/account_setting_user_preference_v2#value DataDatabricksAccountSettingUserPreferenceV2#value}.

---

### DataDatabricksAccountSettingUserPreferenceV2Config <a name="DataDatabricksAccountSettingUserPreferenceV2Config" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2Config.Initializer"></a>

```typescript
import { dataDatabricksAccountSettingUserPreferenceV2 } from '@cdktn/provider-databricks'

const dataDatabricksAccountSettingUserPreferenceV2Config: dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2Config.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2Config.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2Config.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2Config.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2Config.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2Config.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/account_setting_user_preference_v2#name DataDatabricksAccountSettingUserPreferenceV2#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2Config.property.userId">userId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/account_setting_user_preference_v2#user_id DataDatabricksAccountSettingUserPreferenceV2#user_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2Config.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/account_setting_user_preference_v2#name DataDatabricksAccountSettingUserPreferenceV2#name}.

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2Config.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/account_setting_user_preference_v2#user_id DataDatabricksAccountSettingUserPreferenceV2#user_id}.

---

### DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanVal <a name="DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanVal" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanVal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanVal.Initializer"></a>

```typescript
import { dataDatabricksAccountSettingUserPreferenceV2 } from '@cdktn/provider-databricks'

const dataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanVal: dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanVal = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanVal.property.value">value</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/account_setting_user_preference_v2#value DataDatabricksAccountSettingUserPreferenceV2#value}. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanVal.property.value"></a>

```typescript
public readonly value: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/account_setting_user_preference_v2#value DataDatabricksAccountSettingUserPreferenceV2#value}.

---

### DataDatabricksAccountSettingUserPreferenceV2EffectiveStringVal <a name="DataDatabricksAccountSettingUserPreferenceV2EffectiveStringVal" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringVal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringVal.Initializer"></a>

```typescript
import { dataDatabricksAccountSettingUserPreferenceV2 } from '@cdktn/provider-databricks'

const dataDatabricksAccountSettingUserPreferenceV2EffectiveStringVal: dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringVal = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringVal.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/account_setting_user_preference_v2#value DataDatabricksAccountSettingUserPreferenceV2#value}. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringVal.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/account_setting_user_preference_v2#value DataDatabricksAccountSettingUserPreferenceV2#value}.

---

### DataDatabricksAccountSettingUserPreferenceV2StringVal <a name="DataDatabricksAccountSettingUserPreferenceV2StringVal" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringVal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringVal.Initializer"></a>

```typescript
import { dataDatabricksAccountSettingUserPreferenceV2 } from '@cdktn/provider-databricks'

const dataDatabricksAccountSettingUserPreferenceV2StringVal: dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringVal = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringVal.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/account_setting_user_preference_v2#value DataDatabricksAccountSettingUserPreferenceV2#value}. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringVal.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/account_setting_user_preference_v2#value DataDatabricksAccountSettingUserPreferenceV2#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference <a name="DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAccountSettingUserPreferenceV2 } from '@cdktn/provider-databricks'

new dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.property.valueInput">valueInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.property.value">value</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanVal">DataDatabricksAccountSettingUserPreferenceV2BooleanVal</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.property.value"></a>

```typescript
public readonly value: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksAccountSettingUserPreferenceV2BooleanVal;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanVal">DataDatabricksAccountSettingUserPreferenceV2BooleanVal</a>

---


### DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference <a name="DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAccountSettingUserPreferenceV2 } from '@cdktn/provider-databricks'

new dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.property.valueInput">valueInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.property.value">value</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanVal">DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanVal</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.property.value"></a>

```typescript
public readonly value: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanVal;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanVal">DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanVal</a>

---


### DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference <a name="DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAccountSettingUserPreferenceV2 } from '@cdktn/provider-databricks'

new dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringVal">DataDatabricksAccountSettingUserPreferenceV2EffectiveStringVal</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksAccountSettingUserPreferenceV2EffectiveStringVal;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringVal">DataDatabricksAccountSettingUserPreferenceV2EffectiveStringVal</a>

---


### DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference <a name="DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAccountSettingUserPreferenceV2 } from '@cdktn/provider-databricks'

new dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringVal">DataDatabricksAccountSettingUserPreferenceV2StringVal</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksAccountSettingUserPreferenceV2StringVal;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringVal">DataDatabricksAccountSettingUserPreferenceV2StringVal</a>

---



