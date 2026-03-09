# `dataDatabricksDatabaseInstance` Submodule <a name="`dataDatabricksDatabaseInstance` Submodule" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksDatabaseInstance <a name="DataDatabricksDatabaseInstance" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/database_instance databricks_database_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.Initializer"></a>

```typescript
import { dataDatabricksDatabaseInstance } from '@cdktn/provider-databricks'

new dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance(scope: Construct, id: string, config: DataDatabricksDatabaseInstanceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig">DataDatabricksDatabaseInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig">DataDatabricksDatabaseInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.putProviderConfig"></a>

```typescript
public putProviderConfig(value: DataDatabricksDatabaseInstanceProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfig">DataDatabricksDatabaseInstanceProviderConfig</a>

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksDatabaseInstance resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.isConstruct"></a>

```typescript
import { dataDatabricksDatabaseInstance } from '@cdktn/provider-databricks'

dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.isTerraformElement"></a>

```typescript
import { dataDatabricksDatabaseInstance } from '@cdktn/provider-databricks'

dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.isTerraformDataSource"></a>

```typescript
import { dataDatabricksDatabaseInstance } from '@cdktn/provider-databricks'

dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.generateConfigForImport"></a>

```typescript
import { dataDatabricksDatabaseInstance } from '@cdktn/provider-databricks'

dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataDatabricksDatabaseInstance resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksDatabaseInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksDatabaseInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/database_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksDatabaseInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.capacity">capacity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.childInstanceRefs">childInstanceRefs</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList">DataDatabricksDatabaseInstanceChildInstanceRefsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.creator">creator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.customTags">customTags</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsList">DataDatabricksDatabaseInstanceCustomTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.effectiveCapacity">effectiveCapacity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.effectiveCustomTags">effectiveCustomTags</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsList">DataDatabricksDatabaseInstanceEffectiveCustomTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.effectiveEnablePgNativeLogin">effectiveEnablePgNativeLogin</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.effectiveEnableReadableSecondaries">effectiveEnableReadableSecondaries</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.effectiveNodeCount">effectiveNodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.effectiveRetentionWindowInDays">effectiveRetentionWindowInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.effectiveStopped">effectiveStopped</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.effectiveUsagePolicyId">effectiveUsagePolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.enablePgNativeLogin">enablePgNativeLogin</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.enableReadableSecondaries">enableReadableSecondaries</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.nodeCount">nodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.parentInstanceRef">parentInstanceRef</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference">DataDatabricksDatabaseInstanceParentInstanceRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.pgVersion">pgVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference">DataDatabricksDatabaseInstanceProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.readOnlyDns">readOnlyDns</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.readWriteDns">readWriteDns</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.retentionWindowInDays">retentionWindowInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.stopped">stopped</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.usagePolicyId">usagePolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfig">DataDatabricksDatabaseInstanceProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.capacity"></a>

```typescript
public readonly capacity: string;
```

- *Type:* string

---

##### `childInstanceRefs`<sup>Required</sup> <a name="childInstanceRefs" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.childInstanceRefs"></a>

```typescript
public readonly childInstanceRefs: DataDatabricksDatabaseInstanceChildInstanceRefsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList">DataDatabricksDatabaseInstanceChildInstanceRefsList</a>

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `creator`<sup>Required</sup> <a name="creator" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.creator"></a>

```typescript
public readonly creator: string;
```

- *Type:* string

---

##### `customTags`<sup>Required</sup> <a name="customTags" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.customTags"></a>

```typescript
public readonly customTags: DataDatabricksDatabaseInstanceCustomTagsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsList">DataDatabricksDatabaseInstanceCustomTagsList</a>

---

##### `effectiveCapacity`<sup>Required</sup> <a name="effectiveCapacity" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.effectiveCapacity"></a>

```typescript
public readonly effectiveCapacity: string;
```

- *Type:* string

---

##### `effectiveCustomTags`<sup>Required</sup> <a name="effectiveCustomTags" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.effectiveCustomTags"></a>

```typescript
public readonly effectiveCustomTags: DataDatabricksDatabaseInstanceEffectiveCustomTagsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsList">DataDatabricksDatabaseInstanceEffectiveCustomTagsList</a>

---

##### `effectiveEnablePgNativeLogin`<sup>Required</sup> <a name="effectiveEnablePgNativeLogin" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.effectiveEnablePgNativeLogin"></a>

```typescript
public readonly effectiveEnablePgNativeLogin: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `effectiveEnableReadableSecondaries`<sup>Required</sup> <a name="effectiveEnableReadableSecondaries" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.effectiveEnableReadableSecondaries"></a>

```typescript
public readonly effectiveEnableReadableSecondaries: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `effectiveNodeCount`<sup>Required</sup> <a name="effectiveNodeCount" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.effectiveNodeCount"></a>

```typescript
public readonly effectiveNodeCount: number;
```

- *Type:* number

---

##### `effectiveRetentionWindowInDays`<sup>Required</sup> <a name="effectiveRetentionWindowInDays" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.effectiveRetentionWindowInDays"></a>

```typescript
public readonly effectiveRetentionWindowInDays: number;
```

- *Type:* number

---

##### `effectiveStopped`<sup>Required</sup> <a name="effectiveStopped" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.effectiveStopped"></a>

```typescript
public readonly effectiveStopped: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `effectiveUsagePolicyId`<sup>Required</sup> <a name="effectiveUsagePolicyId" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.effectiveUsagePolicyId"></a>

```typescript
public readonly effectiveUsagePolicyId: string;
```

- *Type:* string

---

##### `enablePgNativeLogin`<sup>Required</sup> <a name="enablePgNativeLogin" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.enablePgNativeLogin"></a>

```typescript
public readonly enablePgNativeLogin: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `enableReadableSecondaries`<sup>Required</sup> <a name="enableReadableSecondaries" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.enableReadableSecondaries"></a>

```typescript
public readonly enableReadableSecondaries: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.nodeCount"></a>

```typescript
public readonly nodeCount: number;
```

- *Type:* number

---

##### `parentInstanceRef`<sup>Required</sup> <a name="parentInstanceRef" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.parentInstanceRef"></a>

```typescript
public readonly parentInstanceRef: DataDatabricksDatabaseInstanceParentInstanceRefOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference">DataDatabricksDatabaseInstanceParentInstanceRefOutputReference</a>

---

##### `pgVersion`<sup>Required</sup> <a name="pgVersion" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.pgVersion"></a>

```typescript
public readonly pgVersion: string;
```

- *Type:* string

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksDatabaseInstanceProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference">DataDatabricksDatabaseInstanceProviderConfigOutputReference</a>

---

##### `readOnlyDns`<sup>Required</sup> <a name="readOnlyDns" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.readOnlyDns"></a>

```typescript
public readonly readOnlyDns: string;
```

- *Type:* string

---

##### `readWriteDns`<sup>Required</sup> <a name="readWriteDns" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.readWriteDns"></a>

```typescript
public readonly readWriteDns: string;
```

- *Type:* string

---

##### `retentionWindowInDays`<sup>Required</sup> <a name="retentionWindowInDays" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.retentionWindowInDays"></a>

```typescript
public readonly retentionWindowInDays: number;
```

- *Type:* number

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `stopped`<sup>Required</sup> <a name="stopped" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.stopped"></a>

```typescript
public readonly stopped: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `usagePolicyId`<sup>Required</sup> <a name="usagePolicyId" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.usagePolicyId"></a>

```typescript
public readonly usagePolicyId: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | DataDatabricksDatabaseInstanceProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfig">DataDatabricksDatabaseInstanceProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksDatabaseInstanceChildInstanceRefs <a name="DataDatabricksDatabaseInstanceChildInstanceRefs" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefs.Initializer"></a>

```typescript
import { dataDatabricksDatabaseInstance } from '@cdktn/provider-databricks'

const dataDatabricksDatabaseInstanceChildInstanceRefs: dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefs.property.branchTime">branchTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/database_instance#branch_time DataDatabricksDatabaseInstance#branch_time}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefs.property.lsn">lsn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/database_instance#lsn DataDatabricksDatabaseInstance#lsn}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefs.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/database_instance#name DataDatabricksDatabaseInstance#name}. |

---

##### `branchTime`<sup>Optional</sup> <a name="branchTime" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefs.property.branchTime"></a>

```typescript
public readonly branchTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/database_instance#branch_time DataDatabricksDatabaseInstance#branch_time}.

---

##### `lsn`<sup>Optional</sup> <a name="lsn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefs.property.lsn"></a>

```typescript
public readonly lsn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/database_instance#lsn DataDatabricksDatabaseInstance#lsn}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefs.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/database_instance#name DataDatabricksDatabaseInstance#name}.

---

### DataDatabricksDatabaseInstanceConfig <a name="DataDatabricksDatabaseInstanceConfig" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig.Initializer"></a>

```typescript
import { dataDatabricksDatabaseInstance } from '@cdktn/provider-databricks'

const dataDatabricksDatabaseInstanceConfig: dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/database_instance#name DataDatabricksDatabaseInstance#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfig">DataDatabricksDatabaseInstanceProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/database_instance#provider_config DataDatabricksDatabaseInstance#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/database_instance#name DataDatabricksDatabaseInstance#name}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksDatabaseInstanceProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfig">DataDatabricksDatabaseInstanceProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/database_instance#provider_config DataDatabricksDatabaseInstance#provider_config}.

---

### DataDatabricksDatabaseInstanceCustomTags <a name="DataDatabricksDatabaseInstanceCustomTags" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTags.Initializer"></a>

```typescript
import { dataDatabricksDatabaseInstance } from '@cdktn/provider-databricks'

const dataDatabricksDatabaseInstanceCustomTags: dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/database_instance#key DataDatabricksDatabaseInstance#key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/database_instance#value DataDatabricksDatabaseInstance#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/database_instance#key DataDatabricksDatabaseInstance#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/database_instance#value DataDatabricksDatabaseInstance#value}.

---

### DataDatabricksDatabaseInstanceEffectiveCustomTags <a name="DataDatabricksDatabaseInstanceEffectiveCustomTags" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTags.Initializer"></a>

```typescript
import { dataDatabricksDatabaseInstance } from '@cdktn/provider-databricks'

const dataDatabricksDatabaseInstanceEffectiveCustomTags: dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/database_instance#key DataDatabricksDatabaseInstance#key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/database_instance#value DataDatabricksDatabaseInstance#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/database_instance#key DataDatabricksDatabaseInstance#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/database_instance#value DataDatabricksDatabaseInstance#value}.

---

### DataDatabricksDatabaseInstanceParentInstanceRef <a name="DataDatabricksDatabaseInstanceParentInstanceRef" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRef"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRef.Initializer"></a>

```typescript
import { dataDatabricksDatabaseInstance } from '@cdktn/provider-databricks'

const dataDatabricksDatabaseInstanceParentInstanceRef: dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRef = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRef.property.branchTime">branchTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/database_instance#branch_time DataDatabricksDatabaseInstance#branch_time}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRef.property.lsn">lsn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/database_instance#lsn DataDatabricksDatabaseInstance#lsn}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRef.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/database_instance#name DataDatabricksDatabaseInstance#name}. |

---

##### `branchTime`<sup>Optional</sup> <a name="branchTime" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRef.property.branchTime"></a>

```typescript
public readonly branchTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/database_instance#branch_time DataDatabricksDatabaseInstance#branch_time}.

---

##### `lsn`<sup>Optional</sup> <a name="lsn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRef.property.lsn"></a>

```typescript
public readonly lsn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/database_instance#lsn DataDatabricksDatabaseInstance#lsn}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRef.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/database_instance#name DataDatabricksDatabaseInstance#name}.

---

### DataDatabricksDatabaseInstanceProviderConfig <a name="DataDatabricksDatabaseInstanceProviderConfig" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfig.Initializer"></a>

```typescript
import { dataDatabricksDatabaseInstance } from '@cdktn/provider-databricks'

const dataDatabricksDatabaseInstanceProviderConfig: dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/database_instance#workspace_id DataDatabricksDatabaseInstance#workspace_id}. |

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/database_instance#workspace_id DataDatabricksDatabaseInstance#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksDatabaseInstanceChildInstanceRefsList <a name="DataDatabricksDatabaseInstanceChildInstanceRefsList" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.Initializer"></a>

```typescript
import { dataDatabricksDatabaseInstance } from '@cdktn/provider-databricks'

new dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.get"></a>

```typescript
public get(index: number): DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefs">DataDatabricksDatabaseInstanceChildInstanceRefs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksDatabaseInstanceChildInstanceRefs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefs">DataDatabricksDatabaseInstanceChildInstanceRefs</a>[]

---


### DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference <a name="DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksDatabaseInstance } from '@cdktn/provider-databricks'

new dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.resetBranchTime">resetBranchTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.resetLsn">resetLsn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBranchTime` <a name="resetBranchTime" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.resetBranchTime"></a>

```typescript
public resetBranchTime(): void
```

##### `resetLsn` <a name="resetLsn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.resetLsn"></a>

```typescript
public resetLsn(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.property.effectiveLsn">effectiveLsn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.property.branchTimeInput">branchTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.property.lsnInput">lsnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.property.branchTime">branchTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.property.lsn">lsn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefs">DataDatabricksDatabaseInstanceChildInstanceRefs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `effectiveLsn`<sup>Required</sup> <a name="effectiveLsn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.property.effectiveLsn"></a>

```typescript
public readonly effectiveLsn: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `branchTimeInput`<sup>Optional</sup> <a name="branchTimeInput" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.property.branchTimeInput"></a>

```typescript
public readonly branchTimeInput: string;
```

- *Type:* string

---

##### `lsnInput`<sup>Optional</sup> <a name="lsnInput" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.property.lsnInput"></a>

```typescript
public readonly lsnInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `branchTime`<sup>Required</sup> <a name="branchTime" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.property.branchTime"></a>

```typescript
public readonly branchTime: string;
```

- *Type:* string

---

##### `lsn`<sup>Required</sup> <a name="lsn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.property.lsn"></a>

```typescript
public readonly lsn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksDatabaseInstanceChildInstanceRefs;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceChildInstanceRefs">DataDatabricksDatabaseInstanceChildInstanceRefs</a>

---


### DataDatabricksDatabaseInstanceCustomTagsList <a name="DataDatabricksDatabaseInstanceCustomTagsList" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsList.Initializer"></a>

```typescript
import { dataDatabricksDatabaseInstance } from '@cdktn/provider-databricks'

new dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsList.get"></a>

```typescript
public get(index: number): DataDatabricksDatabaseInstanceCustomTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTags">DataDatabricksDatabaseInstanceCustomTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksDatabaseInstanceCustomTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTags">DataDatabricksDatabaseInstanceCustomTags</a>[]

---


### DataDatabricksDatabaseInstanceCustomTagsOutputReference <a name="DataDatabricksDatabaseInstanceCustomTagsOutputReference" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksDatabaseInstance } from '@cdktn/provider-databricks'

new dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTags">DataDatabricksDatabaseInstanceCustomTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksDatabaseInstanceCustomTags;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceCustomTags">DataDatabricksDatabaseInstanceCustomTags</a>

---


### DataDatabricksDatabaseInstanceEffectiveCustomTagsList <a name="DataDatabricksDatabaseInstanceEffectiveCustomTagsList" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsList.Initializer"></a>

```typescript
import { dataDatabricksDatabaseInstance } from '@cdktn/provider-databricks'

new dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsList.get"></a>

```typescript
public get(index: number): DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTags">DataDatabricksDatabaseInstanceEffectiveCustomTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksDatabaseInstanceEffectiveCustomTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTags">DataDatabricksDatabaseInstanceEffectiveCustomTags</a>[]

---


### DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference <a name="DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksDatabaseInstance } from '@cdktn/provider-databricks'

new dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTags">DataDatabricksDatabaseInstanceEffectiveCustomTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksDatabaseInstanceEffectiveCustomTags;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceEffectiveCustomTags">DataDatabricksDatabaseInstanceEffectiveCustomTags</a>

---


### DataDatabricksDatabaseInstanceParentInstanceRefOutputReference <a name="DataDatabricksDatabaseInstanceParentInstanceRefOutputReference" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.Initializer"></a>

```typescript
import { dataDatabricksDatabaseInstance } from '@cdktn/provider-databricks'

new dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.resetBranchTime">resetBranchTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.resetLsn">resetLsn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBranchTime` <a name="resetBranchTime" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.resetBranchTime"></a>

```typescript
public resetBranchTime(): void
```

##### `resetLsn` <a name="resetLsn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.resetLsn"></a>

```typescript
public resetLsn(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.property.effectiveLsn">effectiveLsn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.property.branchTimeInput">branchTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.property.lsnInput">lsnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.property.branchTime">branchTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.property.lsn">lsn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRef">DataDatabricksDatabaseInstanceParentInstanceRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `effectiveLsn`<sup>Required</sup> <a name="effectiveLsn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.property.effectiveLsn"></a>

```typescript
public readonly effectiveLsn: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `branchTimeInput`<sup>Optional</sup> <a name="branchTimeInput" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.property.branchTimeInput"></a>

```typescript
public readonly branchTimeInput: string;
```

- *Type:* string

---

##### `lsnInput`<sup>Optional</sup> <a name="lsnInput" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.property.lsnInput"></a>

```typescript
public readonly lsnInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `branchTime`<sup>Required</sup> <a name="branchTime" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.property.branchTime"></a>

```typescript
public readonly branchTime: string;
```

- *Type:* string

---

##### `lsn`<sup>Required</sup> <a name="lsn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.property.lsn"></a>

```typescript
public readonly lsn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRefOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksDatabaseInstanceParentInstanceRef;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceParentInstanceRef">DataDatabricksDatabaseInstanceParentInstanceRef</a>

---


### DataDatabricksDatabaseInstanceProviderConfigOutputReference <a name="DataDatabricksDatabaseInstanceProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksDatabaseInstance } from '@cdktn/provider-databricks'

new dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfig">DataDatabricksDatabaseInstanceProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksDatabaseInstanceProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstance.DataDatabricksDatabaseInstanceProviderConfig">DataDatabricksDatabaseInstanceProviderConfig</a>

---



